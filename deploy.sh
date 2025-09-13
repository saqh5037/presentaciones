#!/bin/bash

# Script de despliegue para el Sistema de Presentaciones
# Servidor: AWS EC2 - ec2-52-55-189-120.compute-1.amazonaws.com

echo "🚀 Iniciando despliegue del Sistema de Presentaciones..."

# Variables de configuración
PROJECT_DIR="/home/dynamtek/proyectos/presentaciones"
DB_FILE="$PROJECT_DIR/prisma/dev.db"
ENV_FILE="$PROJECT_DIR/.env"

# Crear directorio del proyecto si no existe
if [ ! -d "$PROJECT_DIR" ]; then
    echo "📁 Creando directorio del proyecto..."
    mkdir -p "$PROJECT_DIR"
fi

# Navegar al directorio
cd "$PROJECT_DIR"

# Clonar o actualizar el repositorio
if [ ! -d ".git" ]; then
    echo "📥 Clonando repositorio..."
    git clone https://github.com/saqh5037/presentaciones.git .
else
    echo "🔄 Actualizando repositorio..."
    git pull origin master
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Configurar variables de entorno
if [ ! -f "$ENV_FILE" ]; then
    echo "⚙️ Configurando variables de entorno..."
    cat > "$ENV_FILE" << EOF
# Database
DATABASE_URL="file:./dev.db"

# Server Ports
PORT=4321
TOKEN_SERVER_PORT=4322
USER_API_PORT=4323

# Security
JWT_SECRET=$(openssl rand -base64 32)
ADMIN_PASSWORD=Admin@2025

# Network
HOST=0.0.0.0
EOF
fi

# Inicializar base de datos
echo "🗄️ Configurando base de datos..."
npx prisma generate
npx prisma migrate deploy
npm run db:seed

# Crear configuración PM2
echo "📝 Creando configuración PM2..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'presentations-frontend',
      script: 'npm',
      args: 'run dev',
      env: {
        PORT: 4321,
        HOST: '0.0.0.0'
      },
      cwd: '/home/dynamtek/proyectos/presentaciones'
    },
    {
      name: 'presentations-token-server',
      script: 'server.js',
      env: {
        PORT: 4322
      },
      cwd: '/home/dynamtek/proyectos/presentaciones'
    },
    {
      name: 'presentations-user-api',
      script: 'api/userApi.js',
      env: {
        PORT: 4323,
        DATABASE_URL: 'file:./dev.db'
      },
      cwd: '/home/dynamtek/proyectos/presentaciones'
    }
  ]
}
EOF

# Detener servicios previos si existen
echo "🛑 Deteniendo servicios previos..."
pm2 delete presentations-frontend 2>/dev/null || true
pm2 delete presentations-token-server 2>/dev/null || true
pm2 delete presentations-user-api 2>/dev/null || true

# Iniciar servicios con PM2
echo "🚀 Iniciando servicios con PM2..."
pm2 start ecosystem.config.js

# Guardar configuración PM2
pm2 save

# Configurar Nginx
echo "🌐 Configurando Nginx..."
sudo tee /etc/nginx/sites-available/presentaciones << 'EOF'
server {
    listen 80;
    server_name presentaciones.labsis.app;

    location / {
        proxy_pass http://127.0.0.1:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:4323;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /token-api/ {
        proxy_pass http://127.0.0.1:4322/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
EOF

# Habilitar sitio en Nginx (opcional)
# sudo ln -sf /etc/nginx/sites-available/presentaciones /etc/nginx/sites-enabled/
# sudo nginx -t
# sudo systemctl reload nginx

echo "✅ Despliegue completado!"
echo ""
echo "📊 Estado de los servicios:"
pm2 list

echo ""
echo "🌐 URLs de acceso:"
echo "   Frontend: http://ec2-52-55-189-120.compute-1.amazonaws.com:4321"
echo "   Token API: http://ec2-52-55-189-120.compute-1.amazonaws.com:4322"
echo "   User API: http://ec2-52-55-189-120.compute-1.amazonaws.com:4323"
echo ""
echo "👤 Credenciales por defecto:"
echo "   Usuario: admin"
echo "   Contraseña: Admin@2025"