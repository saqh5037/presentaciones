# 🌍 Acceso Público a la Aplicación

## Solución Actual: Cloudflare Tunnel

Tu aplicación está disponible públicamente en:
**https://rogers-cakes-sites-sometimes.trycloudflare.com**

Esta URL cambia cada vez que reinicias el túnel.

## Cómo mantener el túnel activo:

```bash
# En una terminal, ejecuta:
cloudflared tunnel --url http://localhost:4321
```

## Alternativas de Túneles:

### 1. LocalTunnel
```bash
# Instalar
npm install -g localtunnel

# Usar con subdominio personalizado
lt --port 4321 --subdomain mi-presentaciones
# URL resultante: https://mi-presentaciones.loca.lt
```

### 2. Ngrok (requiere cuenta gratuita)
```bash
# Instalar
brew install ngrok

# Configurar token (registro en ngrok.com)
ngrok config add-authtoken TU_TOKEN

# Ejecutar
ngrok http 4321
```

## Ventajas de los túneles:

✅ **Sin configuración de router**: No necesitas abrir puertos  
✅ **HTTPS automático**: Certificados SSL incluidos  
✅ **Funciona detrás de NAT**: Sin problemas con IP dinámica  
✅ **Acceso mundial**: URL pública accesible desde cualquier lugar  

## Script para iniciar todo con túnel:

```bash
#!/bin/bash
# start-with-tunnel.sh

# Iniciar servidores
./start-all.sh &

# Esperar que los servidores inicien
sleep 5

# Crear túnel
echo "🌍 Creando túnel público..."
cloudflared tunnel --url http://localhost:4321
```

## Usuarios disponibles:

| Usuario | Contraseña | Rol |
|---------|------------|-----|
| admin | admin123 | Administrador |
| demo | demo123 | Usuario |
| bernardo | bernardo123 | Usuario |
| WBI | wbi2025 | Usuario |

## Notas de seguridad:

⚠️ **Túneles temporales**: Son para desarrollo/demo, no producción  
⚠️ **URLs públicas**: Cualquiera con el link puede acceder  
⚠️ **Contraseñas**: Cambia las contraseñas por defecto para uso público  

## Para producción considera:

1. **VPS/Cloud**: DigitalOcean, AWS, Google Cloud
2. **Vercel/Netlify**: Para el frontend
3. **Railway/Render**: Para el backend con base de datos
4. **Dominio propio**: Con certificado SSL