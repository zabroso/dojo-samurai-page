# CLAUDE.md — Samurai JKA Chile

Instrucciones para Claude Code al trabajar en este proyecto.
Lee este archivo completo antes de tocar cualquier código.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 5 (`output: 'server'`) |
| Estilos | Tailwind CSS v4 (config en CSS, no en JS) |
| Islas interactivas | React 19 (`@astrojs/react`) |
| Lenguaje | TypeScript estricto (`astro/tsconfigs/strict`) |
| Servidor | Node.js standalone (`@astrojs/node`) |
| Fuentes | Bebas Neue (display) · Manrope (body) vía Google Fonts |

---

## Arquitectura de componentes

### Regla de oro: cada archivo tiene un solo rol

```
src/
├── config.ts          — constantes globales (URLs, contacto). Sin lógica.
├── types/index.ts     — interfaces TypeScript. Sin implementación.
├── data/mock.ts       — datos mockeados para islas. Sin lógica de negocio.
├── layouts/           — estructura HTML base. Solo un layout: BaseLayout.astro
├── pages/             — ensamblan secciones. SIN lógica, SIN estilos inline.
├── components/
│   ├── layout/        — NavBar, Footer, WhatsAppButton. Globales, sin props de negocio.
│   ├── sections/      — una por sección del landing. Contienen datos estáticos propios.
│   └── ui/            — átomos reutilizables. Reciben todo por props, no conocen el negocio.
└── styles/global.css  — tokens Tailwind v4 + utilidades custom. Solo CSS.
```

### Cuándo usar cada tipo

| Necesidad | Solución |
|---|---|
| HTML estático | `.astro` |
| Componente con estado o eventos del cliente | `.tsx` (isla React) |
| Datos que eventualmente vienen de API | mock en `data/mock.ts` + `ApiResponse<T>` |
| Constante usada en más de un archivo | `src/config.ts` |
| Tipo compartido entre componentes | `src/types/index.ts` |

---

## Convenciones de nombrado

- **PascalCase** para todos los componentes: `HeroSection.astro`, `ProgramCard.astro`, `NewsCarousel.tsx`
- **camelCase** para variables, funciones y props
- **kebab-case** para rutas/URLs: `/karate-inclusivo`, `/sobre-nosotros`
- Los archivos de sección terminan en `Section`: `HeroSection`, `BenefitsSection`
- Los archivos de UI terminan en `Card` o describen su función: `ProgramCard`, `NewsCarousel`

---

## Islas React (componentes dinámicos)

Solo usar islas cuando hay interactividad real en el cliente:
- Estado (`useState`)
- Eventos del DOM que Astro no puede manejar con un `<script>` simple
- Carruseles, modales, tabs con estado

**Directiva correcta por caso:**

| Caso | Directiva |
|---|---|
| Necesita interactividad inmediata al cargar | `client:load` |
| Visible más abajo en la página | `client:visible` |
| Solo en cierto breakpoint o condición | `client:media` |
| El usuario nunca verá esto sin interacción | `client:idle` |

**No usar `client:load` por defecto en todo.** Evaluar cuál corresponde.

El toggle del menú mobile en `NavBar.astro` se resuelve con `<script>` inline — no necesita isla.

---

## Tailwind v4 — reglas

- La configuración va en `src/styles/global.css` dentro de `@theme {}`. **No crear `tailwind.config.js`.**
- Los tokens de color son `--color-{nombre}` → generan `bg-{nombre}`, `text-{nombre}`, etc.
- Las fuentes son `--font-family-{nombre}` → generan `font-{nombre}`.
- Las utilidades custom se definen con `@utility` (no con `@layer utilities`):

```css
/* correcto */
@utility jka-transition {
  transition: all 0.2s ease-in-out;
}

/* incorrecto */
@layer utilities {
  .jka-transition { ... }
}
```

- Los `@keyframes` van **fuera** del bloque `@theme {}`.

---

## Patrón ApiResponse — obligatorio para carruseles

Todos los componentes que eventualmente van a consumir una API deben usar este wrapper:

```typescript
// src/types/index.ts
export interface ApiResponse<T> {
  data: T[]
  total: number
  page: number
}
```

Los props de la isla reciben `ApiResponse<T>`, no el array directo:

```tsx
// correcto
interface Props {
  initialData: ApiResponse<NewsItem>
}

// incorrecto — rompe cuando llegue la API real
interface Props {
  items: NewsItem[]
}
```

Cuando llegue la API real, solo cambia dónde se obtiene el dato — el componente no se toca.

---

## Datos estáticos vs mock

| Tipo de dato | Dónde va |
|---|---|
| Contenido fijo de la UI (benefits, programs, schedules) | Dentro del componente `Section`, como `const` tipada |
| Datos que eventualmente vienen de API (noticias, logos) | `src/data/mock.ts` como `ApiResponse<T>` |
| URLs, emails, teléfonos, handles | `src/config.ts` |

**Nunca hardcodear URLs de WhatsApp o emails directamente en los componentes.**
Siempre importar desde `src/config.ts`.

---

## Contacto y WhatsApp

El número de WhatsApp y las URLs de contacto están en `src/config.ts`.
Todos los links de WhatsApp deben usar `WHATSAPP_BASE` y encodear el mensaje:

```astro
---
import { WHATSAPP_BASE } from '../../config'
const href = `${WHATSAPP_BASE}?text=${encodeURIComponent('Mensaje aquí')}`
---
<a href={href} target="_blank" rel="noreferrer">...</a>
```

---

## SEO

- `BaseLayout.astro` recibe `title` y `description` como props opcionales con defaults correctos.
- Cada página puede sobreescribir title y description pasando props al layout.
- Todas las `<img>` deben tener `alt` descriptivo (no vacío, no "imagen").
- Los `<iframe>` de mapas deben tener `title` descriptivo.
- Los íconos decorativos (`material-symbols-outlined` usados como adorno) deben tener `aria-hidden="true"`.

---

## Imágenes

- Todas las imágenes van en `public/images/`.
- Subdirectorios por categoría: `programs/`, `schools/`, `testimonials/`.
- Usar `loading="lazy"` en todas salvo las del hero (esas van con `loading="eager"`).
- No usar imágenes externas en producción — solo rutas locales desde `public/`.

---

## Lo que NO hacer

- **No crear archivos de barrel (`index.ts`)** innecesarios. La estructura es plana y predecible.
- **No usar `any` en TypeScript.** Si no sabes el tipo, inferirlo o definirlo en `types/index.ts`.
- **No agregar lógica en `pages/index.astro`.** Solo importa y ensambla secciones.
- **No mezclar datos de negocio en componentes `ui/`.** Los átomos reciben props, no saben de dojos ni instructores.
- **No usar `@layer utilities` de Tailwind v3.** Este proyecto usa Tailwind v4 con `@utility`.
- **No poner colores, emails o teléfonos en hardcode** dentro de componentes. Siempre `config.ts`.
- **No usar `client:load` en componentes que no necesitan ser interactivos** desde el primer render.
- **No crear componentes nuevos** si uno existente puede recibir una prop adicional para cubrir el caso.

---

## Checklist antes de hacer un cambio

- [ ] ¿El archivo nuevo sigue PascalCase?
- [ ] ¿El componente nuevo tiene props tipadas con interfaces de `types/index.ts`?
- [ ] ¿Usé `WHATSAPP_BASE` desde `config.ts` en lugar de hardcodear el número?
- [ ] ¿Las imágenes tienen `alt` descriptivo?
- [ ] ¿El componente de isla usa `ApiResponse<T>` en sus props si los datos eventualmente vienen de API?
- [ ] ¿Elegí la directiva `client:*` correcta para la isla?
- [ ] ¿Agregué `loading="lazy"` a las imágenes fuera del hero?

---

## Pendientes conocidos (no inventar soluciones)

- `HONBU_MAPS_URL` en `config.ts` → reemplazar con URL real de Google Maps
- `src` del iframe en `LocationSection.astro` → reemplazar con embed real de Google Maps
- `public/images/` → faltan todas las fotos reales (hero, sensei, programas, testimonios, logos de colegios)
- Horarios en `ScheduleSection.astro` → datos placeholder, reemplazar con horarios reales
- Testimonios en `TestimonialsSection.astro` → datos placeholder
- Rating de Google en `TestimonialsSection.astro` → verificar el 4.9/5 real

Si encuentras un TODO en el código, no lo resuelvas con datos inventados. Consultarlo primero.
