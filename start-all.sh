#!/bin/bash

echo "🚀 Iniciando sistema de presentaciones..."
echo ""

# Colores para la salida
GREEN='\033[0;32m'
BLUE='\033[0;34m'
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
echo -e "${GREEN}✅ Todos los servicios iniciados!${NC}"
echo ""

# Obtener IP local
LOCAL_IP=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | head -n 1)

echo "📝 Servicios disponibles:"
echo ""
echo "  Acceso LOCAL:"
echo "   - Aplicación principal: http://localhost:4321"
echo "   - API de usuarios: http://localhost:4323"
echo "   - Servidor de tokens: http://localhost:4322"
echo ""
echo "  Acceso desde RED (otras computadoras):"
echo "   - Aplicación principal: http://$LOCAL_IP:4321"
echo "   - API de usuarios: http://$LOCAL_IP:4323"
echo "   - Servidor de tokens: http://$LOCAL_IP:4322"
echo ""
echo "🔑 Usuarios disponibles:"
echo "   - admin / admin123 (Administrador)"
echo "   - demo / demo123 (Usuario con acceso a Musi)"
echo "   - bernardo / bernardo123 (Usuario con acceso a Etiquetas)"
echo "   - WBI / wbi2025 (Usuario con acceso a Labsis)"
echo ""
echo "Para detener todos los servicios, presiona Ctrl+C"
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

# Mantener el script en ejecución
wait