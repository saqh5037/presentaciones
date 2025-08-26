#!/bin/bash

echo "🚀 Iniciando sistema de presentaciones con túnel público..."
echo ""

# Colores para la salida
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Iniciar servidor de usuarios
echo -e "${BLUE}Starting User API Server (port 4323)...${NC}"
npm run user-server &
USER_PID=$!

# Esperar un momento para que inicie
sleep 2

# Iniciar servidor de tokens
echo -e "${BLUE}Starting Token Server (port 4322)...${NC}"
npm run token-server &
TOKEN_PID=$!

sleep 2

# Iniciar aplicación principal
echo -e "${BLUE}Starting Main Application (port 4321)...${NC}"
npm run dev &
APP_PID=$!

sleep 3

echo ""
echo -e "${GREEN}✅ Todos los servicios locales iniciados!${NC}"
echo ""

# Crear túnel de Cloudflare
echo -e "${YELLOW}🌍 Creando túnel público con Cloudflare...${NC}"
echo ""
echo "En unos segundos tendrás una URL pública para compartir"
echo ""

# Función para manejar la señal de interrupción
cleanup() {
    echo ""
    echo "⏹️  Deteniendo servicios..."
    kill $USER_PID $TOKEN_PID $APP_PID 2>/dev/null
    echo "✅ Servicios detenidos"
    exit 0
}

# Capturar Ctrl+C
trap cleanup INT

# Iniciar Cloudflare Tunnel (esto bloqueará hasta Ctrl+C)
cloudflared tunnel --url http://localhost:4321