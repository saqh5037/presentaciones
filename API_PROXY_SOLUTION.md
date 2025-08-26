# 🔧 Solución de Proxy para API

## Problema Original
Al acceder desde una IP pública (como 189.172.8.175:4321), el navegador intentaba conectar directamente al puerto 4323, pero este puerto podía estar bloqueado por el firewall o no ser accesible desde internet.

## Solución Implementada
Configuramos un **proxy en Vite** que redirige todas las llamadas a `/api` hacia el servidor local de la API en el puerto 4323.

## Cómo funciona:

1. **El navegador hace una petición a**: 
   ```
   http://189.172.8.175:4321/api/auth/login
   ```

2. **Vite intercepta la petición** y la redirige internamente a:
   ```
   http://localhost:4323/api/auth/login
   ```

3. **La respuesta se envía de vuelta** al navegador a través del mismo puerto 4321

## Ventajas de esta solución:

✅ **Un solo puerto expuesto**: Solo necesitas abrir el puerto 4321 en el firewall  
✅ **Funciona desde cualquier lugar**: Local, red local, o IP pública  
✅ **Sin configuración adicional**: No necesitas cambiar nada en el cliente  
✅ **Más seguro**: La API no está expuesta directamente a internet  

## Configuración en vite.config.js:

```javascript
proxy: {
  '/api': {
    target: 'http://localhost:4323',
    changeOrigin: true,
    secure: false
  }
}
```

## Configuración en el cliente:

```javascript
// src/config/api.config.js
export const getApiUrl = () => {
  return '/api'  // Usa rutas relativas, Vite maneja el proxy
}
```

## Para verificar que funciona:

```bash
# Desde la máquina local
curl http://localhost:4321/api/users

# Desde otra máquina en la red
curl http://[IP-DEL-SERVIDOR]:4321/api/users
```

## Arquitectura:

```
[Navegador] --puerto 4321--> [Vite Dev Server] --interno--> [API Server :4323]
                                    |
                                  (proxy)
                                    |
                              [SQLite DB]
```

## Notas importantes:

- Esta configuración es para **desarrollo**
- Para **producción**, considera usar nginx o un reverse proxy dedicado
- La base de datos SQLite está en `/prisma/dev.db`
- Todos los usuarios comparten la misma base de datos