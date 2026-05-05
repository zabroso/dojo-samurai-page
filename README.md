# dojo-samurai-page

## Deploy a producción

### Estructura del hosting

El deploy está dividido en dos partes:

| Archivo | Destino en el servidor |
|---|---|
| `deploy-server.zip` | `/home/mydojoap/dojo_samurai_page/` |
| `deploy-static.zip` | `/home/mydojoap/public_html/` |

Apache enruta todas las requests al servidor Node.js (puerto 4321). Node.js sirve los estáticos desde `public_html/` y el SSR desde `dojo_samurai_page/dist/server/`.

---

### Paso a paso

**1. Generar los zips de deploy**

```bash
npm run build:prod
```

Esto compila el proyecto, parchea las rutas de producción en `entry.mjs` y genera:
- `deploy-server.zip` — archivos del servidor Node.js
- `deploy-static.zip` — CSS, JS, imágenes y demás estáticos

**2. Subir y descomprimir `deploy-server.zip`**

Subir el archivo al servidor y descomprimir en `/home/mydojoap/dojo_samurai_page/`.

```bash
unzip -o deploy-server.zip -d /home/mydojoap/dojo_samurai_page/
```

Esto reemplaza únicamente `dist/server/`.

**3. Subir y descomprimir `deploy-static.zip`** *(solo si cambiaron estilos, JS o imágenes)*

Subir el archivo al servidor y descomprimir en `/home/mydojoap/public_html/`.

```bash
unzip -o deploy-static.zip -d /home/mydojoap/public_html/
```

**4. Reiniciar la app Node.js**

Desde el panel del hosting, reiniciar la aplicación Node.js para que tome los nuevos archivos del servidor.

---

### Cuándo subir cada zip

| Cambié... | ¿Subir `deploy-server.zip`? | ¿Subir `deploy-static.zip`? |
|---|---|---|
| Solo HTML / lógica de páginas | Sí | No |
| Estilos (CSS) o JavaScript del cliente | Sí | Sí |
| Imágenes en `public/` | No | Sí |
| Ambos | Sí | Sí |

> Siempre reiniciar la app Node.js después de subir `deploy-server.zip`.