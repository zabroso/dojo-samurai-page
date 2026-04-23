# Prompt de mejoras UI/UX para Landing JKA Academy

Analiza la siguiente landing page (código adjunto) y aplica mejoras de diseño, UX y conversión.

Divide tu respuesta en 4 secciones claras:

---

## 1. ✅ Qué se debe MANTENER

- La estructura general tipo landing (Hero → Beneficios → Programas → Horarios → Sedes → Footer).
- El enfoque en conversión directa vía WhatsApp.
- Uso de Tailwind como base de estilos.
- Identidad visual basada en rojo (JKA) + blanco + negro.
- Segmentación de programas (Niños, Juveniles, Adultos).
- Presencia de prueba social implícita (años de trayectoria, red de dojos).
- CTA principal visible desde el hero.

---

## 2. 🔧 Qué se debe CAMBIAR

### Hero section
- Reducir altura excesiva (`min-h-[870px]`).
- Mejorar contraste del texto (overlay más oscuro o imagen menos lavada).
- Acortar el H1 → más directo y orientado a beneficio.
- CTA más agresivo:  
  → Ejemplo: “Agenda tu clase gratis hoy”.

### Jerarquía visual
- Simplificar tipografías (demasiados estilos personalizados).
- Reducir uso excesivo de `uppercase`.
- Ajustar spacing vertical (hay demasiado aire innecesario).

### Navbar
- Agregar estado activo o feedback visual.
- Hacer el CTA más destacado.

### Sección “¿Por qué elegir?”
- Cambiar grid de 5 columnas → 3 o 4 máximo.
- Dar más peso visual a íconos.
- Reescribir copy → más específico y orientado a resultados.

### Cards de programas
- Reducir contenido redundante.
- Hacer botones más llamativos (más primarios).
- Mejor diferenciación entre programas.

### Horarios
- Mala UX en mobile.
- No es escaneable.
- Reemplazar tabla por bloques/cards.

### Sedes
- Botón “Cómo llegar” debe tener link real (Google Maps).
- Reducir espacio desperdiciado.

---

## 3. ❌ Qué se debe ELIMINAR

- Duplicación de imports de Google Fonts.
- Exceso de configuración en `tailwind.config`.
- Clases redundantes o innecesarias.
- Texto genérico sin valor:
  - “desarrollo integral”
  - “metodología moderna”
- Elementos decorativos sin función.
- Tabla tradicional de horarios.
- Uso excesivo de:
  - `tracking-widest`
  - estilos que afectan legibilidad

---

## 4. ➕ Qué se debe AÑADIR

### Prueba social real
- Testimonios (padres/alumnos).
- Fotos reales (evitar stock).
- Métricas:
  - número de alumnos
  - años activos
  - casos reales

### CTAs estratégicos
- Repetir CTA después de cada sección clave.
- Sticky CTA en mobile.

### Urgencia / escasez
- “Cupos limitados”
- “Últimos cupos este mes”

### Flujo de conversión claro
- Paso 1: Agenda
- Paso 2: Asiste
- Paso 3: Inscríbete

### WhatsApp optimizado
- Mensajes prellenados segmentados:
  - niños
  - adultos
- Botón más visible en mobile.

### Mobile-first
- Espaciados más compactos.
- Botones full width.
- Mejor legibilidad.

### Microinteracciones
- Mejores estados hover.
- Feedback visual en botones.

### SEO básico
- Mejor uso de H1, H2.
- Keywords locales:
  - “karate en Viña del Mar”
  - “clases de karate niños”
  - etc.

---

## 🎯 Objetivo final

Optimizar la landing para:

- Aumentar conversiones a WhatsApp
- Mejorar claridad del mensaje
- Reducir fricción en mobile
- Lograr un diseño más limpio, moderno y enfocado en ventas