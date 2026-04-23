# Mejora de Landing Page - JKA Academy

Analiza el siguiente código HTML y aplica mejoras enfocadas en **conversión, claridad, consistencia visual y performance**.

Divide las acciones en las siguientes categorías:

---

## 🟢 Qué se debe MANTENER

- Estructura general de landing (Hero → Beneficios → Programas → Horarios → Testimonios → Sedes → CTA → Footer)
- Identidad visual:
  - Color principal rojo (`jka-red`)
  - Tipografías (`Bebas Neue` para títulos y `Manrope` para cuerpo)
- Uso de TailwindCSS como sistema de estilos
- CTA principal hacia WhatsApp (es correcto como canal de conversión)
- Jerarquía clara en Hero (headline + subheadline + CTA)
- Sección de programas segmentada por edades (bien orientada a negocio)
- Uso de testimonios (social proof)
- Floating button de WhatsApp (bien implementado)

---

## 🟡 Qué se debe CAMBIAR

### 1. Hero Section (ALTA PRIORIDAD)
- Cambiar el texto:
  - Hacerlo más directo y orientado a conversión
  - Ejemplo: menos institucional, más beneficio inmediato
- Agregar urgencia real:
  - “Cupos limitados este mes”
- Ajustar contraste del fondo:
  - Imagen demasiado oscura + overlay → pierde impacto visual
- CTA:
  - Reducir texto: “Agenda tu clase gratis” (más directo)

---

### 2. Navegación
- Agregar:
  - Scroll spy o estado activo en menú
- Mejorar:
  - Sticky nav con fondo blur o leve sombra al hacer scroll

---

### 3. Beneficios
- Cambiar títulos:
  - Más orientados a resultado, no a característica
  - Ejemplo:
    - “Instructores Pro” → “Aprende con instructores certificados JKA”
- Reducir texto (demasiado descriptivo)
- Aumentar impacto visual (iconos más grandes o con más contraste)

---

### 4. Programas
- Agregar:
  - Badge tipo “Más Popular” en Adultos
- Mejorar CTA:
  - Todos deberían tener el mismo estilo (consistencia)
- Ajustar copy:
  - Más emocional / resultado (ej: confianza, disciplina, salud)

---

### 5. Horarios
- Problema:
  - Se ve informativo, pero no accionable
- Mejorar:
  - Destacar horarios más populares
  - Agregar CTA por bloque
- Considerar:
  - Visual tipo calendario o cards más dinámicas

---

### 6. Testimonios
- Agregar:
  - Foto real (no placeholders)
- Mejorar:
  - Jerarquía visual (quote más grande)
- Opcional:
  - Rating con estrellas

---

### 7. Sede
- Mejorar:
  - Incluir mapa embebido real (Google Maps iframe)
- Agregar:
  - Prueba social local (ej: “+100 alumnos activos en Viña”)
- CTA:
  - Más directo: “Cómo llegar”

---

### 8. CTA Final
- Cambiar copy:
  - Más agresivo en conversión:
    - “Agenda tu primera clase gratis ahora”
- Agregar:
  - Microconfianza:
    - “Sin compromiso”
    - “Respuesta en minutos”

---

## 🔴 Qué se debe ELIMINAR

- Textos redundantes o demasiado largos en:
  - Beneficios
  - Programas
- Elementos visuales sin propósito claro:
  - Algunos fondos decorativos que no aportan conversión
- Links vacíos (`#`)
- Placeholder content:
  - Número telefónico
  - Links de WhatsApp sin número real
  - Redes sociales sin destino

---

## 🔵 Qué se debe AÑADIR

### 1. Conversión
- Contador o urgencia:
  - “Últimos cupos disponibles”
- Prueba social:
  - Número de alumnos
  - Años activos en la ciudad
- FAQ corto (objeciones típicas):
  - ¿Necesito experiencia?
  - ¿Qué debo llevar?

---

### 2. UX / UI
- Estados hover más notorios
- Microinteracciones (hover, scale, fade)
- Mejor spacing en mobile

---

### 3. Performance
- Lazy loading en imágenes
- Optimización de imágenes (peso)
- Evitar múltiples fonts innecesarias

---

### 4. Mobile First
- Revisar:
  - Tamaño de botones (tap targets)
  - Padding lateral
  - Hero más compacto

---

### 5. Tracking (CLAVE NEGOCIO)
- Agregar:
  - Eventos de click en WhatsApp
  - Scroll tracking
- Preparar para:
  - Meta Pixel / Google Analytics

---

## Objetivo final

Transformar la landing desde una página “bonita” a una página que:
- Convierta visitas en leads
- Reduzca fricción
- Transmita confianza inmediata
- Genere acción rápida (WhatsApp)
