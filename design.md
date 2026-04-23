# Samurai JKA Chile — Design Document

## Filosofía visual

El sitio debe transmitir **tradición, autoridad y confianza** — no agresividad ni espectáculo. La referencia no es una película de acción; es una academia seria con 50 años de historia.

Tres palabras que guían cada decisión visual:

> **Instruir. Enseñar. Educar.**

---

## Identidad cromática

| Token | Color | Uso |
|---|---|---|
| `--color-primary` | `#C8102E` | Acento principal (rojo JKA, botones CTA, eyebrows) |
| `--color-ink` | `#0D0D0D` | Textos principales, fondos oscuros |
| `--color-surface` | `#F5F4F0` | Fondos claros, secciones alternas |
| `--color-white` | `#FFFFFF` | Texto sobre fondos oscuros |
| `--color-muted` | `#6B6B6B` | Textos secundarios, metadatos |
| `--color-border` | `#E0DDD7` | Bordes sutiles, separadores |

**Paleta extendida para secciones oscuras:**
- Fondo dark: `#111111` o `#0D0D0D`
- Accent hover: `#A50D24` (rojo oscuro)

---

## Tipografía

| Rol | Familia | Peso | Uso |
|---|---|---|---|
| Display / Headlines | Bebas Neue | 400 | H1, H2 grandes, secciones hero |
| Body | Manrope | 400, 500, 700, 800 | Párrafos, labels, navegación, CTAs |

**Escala tipográfica (base 16px):**
- `eyebrow`: 11px / 700 / letter-spacing 0.12em / uppercase
- `h1` hero: 56–72px (fluid)
- `h2` sección: 36–48px
- `h3` tarjeta: 20–24px
- `body`: 16px / line-height 1.6
- `small / meta`: 13–14px

---

## Estructura del sitio (v1)

### Navegación principal

```
[Logo / Marca]  Historia  Cursos  Sedes  Karate Inclusivo  Contacto
                                                    [CTA: Solicitar info →]
```

### Secciones de la home (en orden)

1. **Hero** — titular fuerte + lead + 3 facts (trayectoria, estilo, casa matriz) + 2 CTAs
2. **Quiénes somos** — historia del dojo desde 1976, Sensei Puchi, afiliación JKA
3. **Cursos por edad** — grid de 5 programas con rango etario
4. **Instructores** — equipo del Honbu Dojo (instructores formales primero, luego Senpai Colaboradores)
5. **Karate Inclusivo** — sección dedicada, tono sensible, equipo responsable
6. **Sedes** — mapa o grid de los 13 dojos con instructor y datos de contacto
7. **Galería** — fotos reales de práctica, exámenes, seminarios
8. **CTA Banner** — "Kihon. Kata. Kumite. Disciplina que trasciende generaciones."
9. **Footer / Contacto** — WhatsApp, email, redes, dojosamurai.cl

---

## Secciones detalladas

### Hero
- Imagen de fondo: clase grupal real o examen de grado (foto horizontal, alta calidad)
- Eyebrow: `Japan Karate Association · Viña del Mar · Chile · Desde 1976`
- H1: directo y formativo — NO clickbait, NO hype
- Lead: menciona a Sensei Puchi, JKA, y diversidad de alumnos
- Facts bar: `50 años de trayectoria | Shotokan JKA | 13 dojos en Chile`
- CTA primario: **Solicitar información** (WhatsApp)
- CTA secundario: **Ver sedes**

### Historia / Quiénes somos
- Portrait de Sensei Raúl Puchi con grado y cargo institucional
- Texto sobre fundación (9 de agosto 1976), linaje técnico, afiliación JKA
- Mención al rol de Vice Chairman en JKA Chile → credibilidad institucional

### Cursos por edad
- Cards con rango etario visible como etiqueta
- Nombre del programa + descripción de 2-3 líneas
- Sin precios (se consulta por WhatsApp)
- Nota: "Primera clase gratis en Honbu Dojo" como badge o aclaración

### Instructores (Honbu Dojo)
- Jerarquía clara: Director → Instructores formales → Senpai Colaboradores
- Cada instructor: nombre, grado DAN, especialidad
- Senpai Colaboradores como sección separada, tono cálido (comunidad, no organigrama)

### Karate Inclusivo
- Tono: apertura, respeto, adaptación pedagógica real
- Mencionar ambas sedes: Honbu Dojo + Colegio Renacer
- Equipo: Ivette Mancilla (liderazgo), Pablo Ormeño, Adela Cárdenas, Francisco Miranda
- CTA hacia organizaciones de neurodivergencia (contacto directo)
- TODO: revisar esta sección juntos antes de publicar (hay dudas en el contenido)

### Sedes
- Grid con tarjeta por dojo
- Cada tarjeta: nombre del dojo, instructor + grado, datos de contacto disponibles
- Honbu Dojo: tarjeta destacada (featured) con información completa
- Dojos sin info completa: mostrar instructor y "Consultar disponibilidad" → WhatsApp
- Mapa de Chile como elemento visual de contexto (no interactivo en v1)

### Carrusel de noticias del dojo
- Muestra las últimas novedades: exámenes, seminarios, nuevos cursos, eventos
- **Referencia visual:** [sentialert.cl](https://sentialert.cl) — imitar el estilo del carrusel/feed de noticias, no integrar la plataforma
- Contenido administrado manualmente en Stitch (o conectado al blog en v2)

### Galería
- 3 columnas, mix de landscape y portrait
- Quote card intercalada: *"El karate comienza y termina con respeto."*
- Imágenes prioritarias: exámenes de grado, seminarios, clases grupales, niños en tatami

### Footer
- Logo + claim
- Links: JKA Chile, dojosamurai.cl, Instagram
- Contacto: WhatsApp (botón flotante también en mobile), email
- Horario de atención si aplica

---

## Componentes UI clave

### Botón CTA principal
```
Fondo: #C8102E | Texto: blanco | Padding: 14px 28px | Border-radius: 4px
Hover: #A50D24 | Font: Manrope 700 | Sin sombra excesiva
```

### Eyebrow (etiqueta de sección)
```
Font: Manrope 700 | Size: 11px | Uppercase | Letter-spacing: 0.12em
Color: #C8102E | Sin decoración
```

### Tarjeta de programa / instructor
```
Fondo: blanco o surface | Border: 1px solid #E0DDD7 | Padding: 24px
Sin sombra dramática | Esquinas: 6–8px radius
Badge de grado DAN: círculo rojo, texto blanco
```

### Botón flotante de WhatsApp
```
Posición: fixed, bottom-right | Ícono: WhatsApp oficial
Color: #25D366 | Visible en mobile y desktop
```

---

## SEO — Estrategia

### Intención de búsqueda objetivo

| Búsqueda | Intención | Dónde responder |
|---|---|---|
| "clases de karate Viña del Mar" | Local / transaccional | Hero, Sedes, title/meta |
| "karate para niños Viña del Mar" | Parental / local | Cursos, Hero lead |
| "karate adultos Viña del Mar" | Personal / local | Cursos adultos |
| "karate Shotokan JKA Chile" | Informacional / autoridad | Historia, meta description |
| "karate inclusivo Viña del Mar" | Especializado | Sección Karate Inclusivo |
| "dojo karate tradicional Chile" | Autoridad | Historia, Footer |
| "primera clase karate gratis Viña del Mar" | Transaccional | Hero, CTA, meta |

### On-page essentials

- `<title>`: Dojo Samurai JKA Viña del Mar | Karate Shotokan Tradicional desde 1976
- `<meta description>`: Academia de karate Shotokan JKA en Viña del Mar. 50 años de historia, instructores certificados JKA, formación para niños, jóvenes y adultos. Primera clase gratis.
- `<h1>` único por página, con keyword primaria
- Alt text en TODAS las imágenes con contexto real (no decorativo)
- URLs limpias por sección: `/cursos`, `/sedes`, `/instructores`, `/karate-inclusivo`
- Schema markup: `LocalBusiness` para cada sede, `Course` para los programas

### Señales de confianza (E-E-A-T)

- Fecha de fundación visible y prominente (1976)
- Grados DAN de cada instructor (credenciales verificables)
- Afiliación JKA con enlace a jkachile.com
- Cargo institucional de Sensei Puchi (Vice Chairman JKA Chile)
- Exámenes de grado regulares como señal de progresión formal
- Red de 13 dojos → presencia geográfica = autoridad regional
- Galería con fotos reales de práctica (no stock)

### Local SEO por sede
Cada dojo debería tener su propia tarjeta con:
- Nombre completo del dojo
- Dirección física (cuando disponible)
- Instructor + grado
- Contacto directo (WhatsApp o teléfono)
- Esto alimenta Google Business Profile de cada sede en el futuro

---

## Tono de contenido

- **No:** "¡Conviértete en un guerrero!", "Domina el arte marcial", frases de película
- **Sí:** "Formamos personas. El karate es el método.", "50 años enseñando disciplina real"
- Lenguaje formal pero cercano, sin jerga marcial excesiva
- Para el público de colegios/organizaciones: tono institucional, propuesta de valor clara
- Para el público parental: seguridad, progresión, valores, comunidad

---

## Plataforma: Stitch (Squarespace)

- Diseño en bloques, sin código custom complejo
- Fuentes: cargar Bebas Neue y Manrope desde Google Fonts o Squarespace Font Pack
- Colores: definir palette en Settings de Stitch antes de construir secciones
- WhatsApp flotante: puede requerir embed de código o bloque HTML personalizado
- Mapa de sedes: embed de Google Maps por cada dojo o sección de texto estructurada

---

## Decisiones pendientes (conversemos)

- [ ] Sección Karate Inclusivo: tono, contenido exacto, si mostrar el Colegio Renacer con nombre
- [ ] Senpai Colaboradores: ¿queremos mostrarlos en el sitio o solo en el backoffice/admin?
- [ ] Galería: ¿tienes fotos de alta calidad disponibles? ¿o necesitamos una sesión fotográfica?
- [ ] Sedes sin info completa: ¿publicamos con datos incompletos o esperamos?
- [ ] ¿Queremos página individual por dojo o todo en una sola sección de sedes?
