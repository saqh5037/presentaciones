import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, Plus, Edit2, Trash2, Lock, Check, X, 
  Shield, Eye, UserPlus, Save, ArrowLeft
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { 
  getUsers, createUser as apiCreateUser, updateUser as apiUpdateUser, 
  deleteUser as apiDeleteUser, changePassword 
} from '../services/authService'
import { presentations } from '../data/presentations'
import './AdminPanel.css'

function AdminPanel() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [showAddUser, setShowAddUser] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Estado para nuevo usuario
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    role: 'viewer',
    allowedPresentations: []
  })

  // Cargar usuarios al montar
  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      const usersList = await getUsers()
      setUsers(usersList)
      setLoading(false)
    } catch (err) {
      setError('Error cargando usuarios')
      setLoading(false)
    }
  }

  const handleCreateUser = async () => {
    try {
      setError('')
      const result = await apiCreateUser(newUser)
      if (result.success) {
        await loadUsers() // Recargar la lista de usuarios
        setShowAddUser(false)
        setNewUser({
          username: '',
          password: '',
          email: '',
          name: '',
          role: 'viewer',
          allowedPresentations: []
        })
        setSuccess('Usuario creado exitosamente')
        setTimeout(() => setSuccess(''), 3000)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  const handleUpdateUser = async (userId, updates) => {
    try {
      setError('')
      const result = await apiUpdateUser(userId, updates)
      if (result.success) {
        await loadUsers() // Recargar la lista de usuarios
        setEditingUser(null)
        setSuccess('Usuario actualizado exitosamente')
        setTimeout(() => setSuccess(''), 3000)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDeleteUser = async (userId) => {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      try {
        setError('')
        const result = await apiDeleteUser(userId)
        if (result.success) {
          await loadUsers() // Recargar la lista de usuarios
          setSuccess('Usuario eliminado exitosamente')
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError(err.message)
      }
    }
  }

  const handleResetPassword = async (userId) => {
    const newPassword = prompt('Ingresa la nueva contraseña:')
    if (newPassword) {
      try {
        setError('')
        const result = await changePassword(userId, newPassword)
        if (result.success) {
          setSuccess('Contraseña actualizada exitosamente')
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError(err.message)
      }
    }
  }

  const togglePresentationAccess = (presentationId, userState, setUserState) => {
    const current = userState.allowedPresentations || []
    if (current.includes(presentationId)) {
      setUserState({
        ...userState,
        allowedPresentations: current.filter(p => p !== presentationId)
      })
    } else {
      setUserState({
        ...userState,
        allowedPresentations: [...current, presentationId]
      })
    }
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
        <p>Cargando usuarios...</p>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <button 
          onClick={() => navigate('/')}
          className="back-button"
        >
          <ArrowLeft size={20} />
          Volver al Dashboard
        </button>
        
        <div className="header-center">
          <h1>
            <Shield size={30} />
            Panel de Administración
          </h1>
          <p>Gestión de usuarios y permisos</p>
        </div>

        <motion.button
          className="add-user-btn"
          onClick={() => setShowAddUser(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <UserPlus size={20} />
          Nuevo Usuario
        </motion.button>
      </div>

      {error && (
        <div className="alert alert-error">
          <X size={20} />
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success">
          <Check size={20} />
          {success}
        </div>
      )}

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Presentaciones</th>
              <th>Último Acceso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={user.id}
                className={`user-row ${!user.active ? 'inactive' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="user-cell">
                  <div className="user-info-compact">
                    <div className="user-avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="user-name">{user.name}</div>
                      <div className="user-username">@{user.username}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role}`}>
                    {user.role === 'admin' ? <Shield size={14} /> : <Eye size={14} />}
                    {user.role === 'admin' ? 'Admin' : 'Usuario'}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.active ? 'active' : 'inactive'}`}>
                    {user.active ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td className="presentations-cell">
                  {user.role === 'admin' ? (
                    <span className="all-access-badge">Todas</span>
                  ) : user.allowedPresentations === 'all' ? (
                    <span className="all-access-badge">Todas</span>
                  ) : (
                    <div className="presentations-count">
                      {user.allowedPresentations?.length || 0} presentación(es)
                    </div>
                  )}
                </td>
                <td>{user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Nunca'}</td>
                <td>
                  <div className="actions-cell">
                    <button
                      onClick={() => setEditingUser(user)}
                      className="action-btn-inline edit"
                      title="Editar usuario"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleResetPassword(user.id)}
                      className="action-btn-inline password"
                      title="Cambiar contraseña"
                    >
                      <Lock size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="action-btn-inline delete"
                      title="Eliminar usuario"
                      disabled={user.role === 'admin' && users.filter(u => u.role === 'admin').length === 1}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de nuevo usuario */}
      {showAddUser && (
        <div className="modal-overlay" onClick={() => setShowAddUser(false)}>
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Crear Nuevo Usuario</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label>Nombre de usuario</label>
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                  placeholder="juanperez"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  placeholder="juan@empresa.com"
                />
              </div>

              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                  placeholder="••••••••"
                />
              </div>

              <div className="form-group">
                <label>Rol</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option value="viewer">Visualizador</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
            </div>

            {newUser.role !== 'admin' && (
              <div className="presentations-selector">
                <label>Presentaciones permitidas:</label>
                <div className="presentations-list">
                  {presentations.map(pres => (
                    <label key={pres.id} className="presentation-checkbox">
                      <input
                        type="checkbox"
                        checked={newUser.allowedPresentations.includes(pres.id)}
                        onChange={() => togglePresentationAccess(pres.id, newUser, setNewUser)}
                      />
                      <span>{pres.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions">
              <button 
                onClick={() => setShowAddUser(false)}
                className="btn-cancel"
              >
                Cancelar
              </button>
              <button 
                onClick={handleCreateUser}
                className="btn-save"
                disabled={!newUser.username || !newUser.password || !newUser.name}
              >
                <Save size={18} />
                Crear Usuario
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal de edición de usuario */}
      {editingUser && (
        <div className="modal-overlay" onClick={() => setEditingUser(null)}>
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Editar Usuario</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({...editingUser, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Rol</label>
                <select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}
                  disabled={editingUser.role === 'admin' && users.filter(u => u.role === 'admin').length === 1}
                >
                  <option value="viewer">Visualizador</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <div className="form-group">
                <label>Estado</label>
                <select
                  value={editingUser.active}
                  onChange={(e) => setEditingUser({...editingUser, active: e.target.value === 'true'})}
                >
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
              </div>
            </div>

            {editingUser.role !== 'admin' && (
              <div className="presentations-selector">
                <label>Presentaciones permitidas:</label>
                <div className="presentations-list">
                  {presentations.map(pres => (
                    <label key={pres.id} className="presentation-checkbox">
                      <input
                        type="checkbox"
                        checked={editingUser.allowedPresentations?.includes(pres.id)}
                        onChange={() => togglePresentationAccess(pres.id, editingUser, setEditingUser)}
                      />
                      <span>{pres.title}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions">
              <button 
                onClick={() => setEditingUser(null)}
                className="btn-cancel"
              >
                Cancelar
              </button>
              <button 
                onClick={() => handleUpdateUser(editingUser.id, editingUser)}
                className="btn-save"
              >
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel