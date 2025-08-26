import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import cors from 'cors'

const app = express()
const prisma = new PrismaClient()
const PORT = 4323

// Middleware
app.use(cors())
app.use(express.json())

// ==================== AUTH ENDPOINTS ====================

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { username }
    })
    
    if (!user || !user.active) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }
    
    // Verify password
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }
    
    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    })
    
    // Parse allowedPresentations
    let presentations = user.allowedPresentations
    try {
      presentations = JSON.parse(user.allowedPresentations)
    } catch (e) {
      // Keep as string if not valid JSON
    }
    
    // Return user session (without password)
    const session = {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      allowedPresentations: presentations,
      loginTime: new Date().toISOString()
    }
    
    res.json({ success: true, session })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Error al iniciar sesión' })
  }
})

// ==================== USER MANAGEMENT ENDPOINTS ====================

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
        allowedPresentations: true,
        active: true,
        lastLogin: true,
        createdAt: true
      }
    })
    
    // Parse allowedPresentations for each user
    const parsedUsers = users.map(user => ({
      ...user,
      allowedPresentations: user.allowedPresentations === 'all' 
        ? 'all' 
        : JSON.parse(user.allowedPresentations || '[]')
    }))
    
    res.json(parsedUsers)
  } catch (error) {
    console.error('Get users error:', error)
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
})

// Get single user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        role: true,
        allowedPresentations: true,
        active: true,
        lastLogin: true,
        createdAt: true
      }
    })
    
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
    
    // Parse allowedPresentations
    user.allowedPresentations = user.allowedPresentations === 'all' 
      ? 'all' 
      : JSON.parse(user.allowedPresentations || '[]')
    
    res.json(user)
  } catch (error) {
    console.error('Get user error:', error)
    res.status(500).json({ error: 'Error al obtener usuario' })
  }
})

// Create new user
app.post('/api/users', async (req, res) => {
  try {
    const { username, password, email, name, role, allowedPresentations, active } = req.body
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        name,
        role: role || 'viewer',
        allowedPresentations: JSON.stringify(allowedPresentations || []),
        active: active !== undefined ? active : true
      }
    })
    
    res.json({ 
      success: true, 
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Create user error:', error)
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'El usuario o email ya existe' })
    }
    res.status(500).json({ error: 'Error al crear usuario' })
  }
})

// Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const { name, email, role, allowedPresentations, active } = req.body
    
    const updateData = {
      name,
      email,
      role,
      active
    }
    
    // Only update allowedPresentations if provided
    if (allowedPresentations !== undefined) {
      updateData.allowedPresentations = JSON.stringify(allowedPresentations)
    }
    
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: updateData
    })
    
    res.json({ 
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Update user error:', error)
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'El email ya está en uso' })
    }
    res.status(500).json({ error: 'Error al actualizar usuario' })
  }
})

// Change password
app.put('/api/users/:id/password', async (req, res) => {
  try {
    const { password } = req.body
    
    if (!password || password.length < 6) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
    await prisma.user.update({
      where: { id: req.params.id },
      data: { password: hashedPassword }
    })
    
    res.json({ success: true, message: 'Contraseña actualizada correctamente' })
  } catch (error) {
    console.error('Change password error:', error)
    res.status(500).json({ error: 'Error al cambiar contraseña' })
  }
})

// Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    // Check if it's the last admin
    const user = await prisma.user.findUnique({
      where: { id: req.params.id }
    })
    
    if (user?.role === 'admin') {
      const adminCount = await prisma.user.count({
        where: { role: 'admin' }
      })
      
      if (adminCount <= 1) {
        return res.status(400).json({ error: 'No se puede eliminar el último administrador' })
      }
    }
    
    await prisma.user.delete({
      where: { id: req.params.id }
    })
    
    res.json({ success: true, message: 'Usuario eliminado correctamente' })
  } catch (error) {
    console.error('Delete user error:', error)
    res.status(500).json({ error: 'Error al eliminar usuario' })
  }
})

// ==================== SERVER ====================

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 User API server running on http://0.0.0.0:${PORT}`)
  console.log('📝 Available endpoints:')
  console.log('  POST   /api/auth/login')
  console.log('  GET    /api/users')
  console.log('  GET    /api/users/:id')
  console.log('  POST   /api/users')
  console.log('  PUT    /api/users/:id')
  console.log('  PUT    /api/users/:id/password')
  console.log('  DELETE /api/users/:id')
})