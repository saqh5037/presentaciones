# 🌐 Acceso desde Red (Otras Computadoras)

## Configuración Actual

El sistema está configurado para aceptar conexiones desde cualquier dispositivo en la red local.

## Para iniciar todos los servicios:

```bash
./start-all.sh
```

## Puertos utilizados:

- **4321**: Aplicación principal (Vite)
- **4322**: Servidor de tokens
- **4323**: API de usuarios (SQLite + Prisma)

## Acceso desde otra computadora:

1. **Obtén la IP del servidor**:
   - En Mac: `ifconfig | grep inet`
   - En Windows: `ipconfig`
   - En Linux: `ip addr show`
   
   Busca tu IP local (generalmente empieza con 192.168.x.x o 10.x.x.x)

2. **Desde otra computadora en la misma red**, accede usando:
   ```
   http://[IP-DEL-SERVIDOR]:4321
   ```
   
   Por ejemplo:
   ```
   http://192.168.1.100:4321
   ```

## Solución de problemas:

### Si no puedes acceder desde otra computadora:

1. **Verifica el firewall**:
   - Mac: `System Preferences > Security & Privacy > Firewall`
   - Windows: Permite las conexiones entrantes para Node.js
   - Linux: `sudo ufw allow 4321,4322,4323/tcp`

2. **Verifica que los servicios estén corriendo**:
   ```bash
   lsof -i :4321  # Aplicación principal
   lsof -i :4322  # Servidor de tokens  
   lsof -i :4323  # API de usuarios
   ```

3. **Verifica la conectividad**:
   Desde la otra computadora:
   ```bash
   ping [IP-DEL-SERVIDOR]
   ```

### Si ves "NetworkError when attempting to fetch resource":

Esto significa que el cliente no puede conectar con la API. Asegúrate de:
1. La API está corriendo (`npm run user-server`)
2. El puerto 4323 está abierto en el firewall
3. Estás usando la IP correcta

## Usuarios disponibles:

| Usuario | Contraseña | Rol | Acceso |
|---------|------------|-----|--------|
| admin | admin123 | Administrador | Todas las presentaciones |
| demo | demo123 | Usuario | Musi Kickoff V1 y V2 |
| bernardo | bernardo123 | Usuario | Etiquetas Escolares |
| WBI | wbi2025 | Usuario | Labsis Expert |

## Base de datos:

La base de datos SQLite se encuentra en:
```
/prisma/dev.db
```

Esta base de datos es compartida por todas las conexiones, por lo que los cambios hechos desde cualquier computadora se reflejan inmediatamente en todas las demás.

## Para desarrollo:

Si necesitas ver la base de datos visualmente:
```bash
npm run db:studio
```
Esto abrirá Prisma Studio en http://localhost:5555