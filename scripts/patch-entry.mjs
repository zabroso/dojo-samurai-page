/**
 * Post-build script:
 * 1. Parchea las rutas absolutas en dist/server/entry.mjs
 * 2. Genera deploy-server.zip  → sube a /home/mydojoap/dojo_samurai_page/
 * 3. Genera deploy-static.zip  → sube a public_html/ (raíz del dominio)
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const entryPath = resolve(root, 'dist/server/entry.mjs')

const PROD_BASE = 'file:///home/mydojoap/dojo_samurai_page'
const PROD_CLIENT = 'file:///home/mydojoap/public_html/dojosamurai.cl'

// ─── 1. Parchar entry.mjs ────────────────────────────────────────────────────

let content = readFileSync(entryPath, 'utf-8')

const patched = content
  .replace(/file:\/\/[^"]*\/dist\/client\//g, PROD_CLIENT)
  .replace(/file:\/\/[^"]*\/dist\/server\//g, `${PROD_BASE}/dist/server/`)

if (patched === content) {
  console.error('⚠️  No se encontraron rutas file:// en entry.mjs. Verificá el build.')
  process.exit(1)
}

writeFileSync(entryPath, patched)
console.log('✓ entry.mjs parcheado')

// ─── 2. Limpiar zips anteriores ──────────────────────────────────────────────

execSync('rm -f deploy-server.zip deploy-static.zip', { cwd: root })

// ─── 3. deploy-server.zip (dist/server/) ─────────────────────────────────────
// Estructura dentro del zip: dist/server/...
// El usuario lo descomprime en /home/mydojoap/dojo_samurai_page/

execSync('zip -rq deploy-server.zip dist/server/', { cwd: root })
console.log('✓ deploy-server.zip generado')

// ─── 4. deploy-static.zip (contenido de dist/client/) ────────────────────────
// Estructura dentro del zip: _astro/, images/, favicon.svg, etc.
// El usuario lo descomprime en public_html/

execSync('zip -rq deploy-static.zip .', { cwd: resolve(root, 'dist/client') })
// Mover el zip a la raíz del proyecto
execSync('mv dist/client/deploy-static.zip .', { cwd: root })
console.log('✓ deploy-static.zip generado')

// ─── 5. Instrucciones ────────────────────────────────────────────────────────

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  DEPLOY LISTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. deploy-server.zip
     Sube y descomprime en:
     /home/mydojoap/dojo_samurai_page/
     (reemplaza dist/server/)

  2. deploy-static.zip
     Sube y descomprime en:
     /home/mydojoap/public_html/
     (imágenes, CSS y JS que Apache sirve directamente)

  3. Reinicia la app Node en el panel del hosting

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
