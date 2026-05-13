// Base URL para imágenes. Si se define PUBLIC_IMAGES_BASE en el entorno
// (ej. https://cdn.dojosamurai.cl), todas las imágenes locales se sirven desde ahí.
// Por defecto vacío → URLs relativas normales (/images/hero.jpg).
const IMAGES_BASE: string = import.meta.env.PUBLIC_IMAGES_BASE ?? ''

/**
 * Construye la URL de una imagen local.
 * Las URLs que ya son absolutas (http/https) se devuelven sin modificar.
 *
 * @example img('/images/hero.jpg') → '/images/hero.jpg' (o 'https://cdn.../images/hero.jpg')
 */
export const img = (path: string): string =>
  path.startsWith('http') ? path : `${IMAGES_BASE}${path}`

export const WHATSAPP_NUMBER = '56982610309'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export const CONTACT_EMAIL = 'club.deportivo.samurai@gmail.com'
export const INSTAGRAM_HANDLE = '@karate.samurai.jka'
export const INSTAGRAM_URL = 'https://www.instagram.com/karate.samurai.jka/'

export const HONBU_ADDRESS = 'Los Baños #55, sector Recreo, Viña del Mar'
export const HONBU_MAPS_URL = 'https://maps.app.goo.gl/vWusF8DpsaXDM6ym7'
