# CONTEXTO
Tengo una landing page ya diseñada (B2C) para un dojo de karate (JKA Academy).
Quiero agregar una sección enfocada en colegios (B2B), pero SIN romper el foco principal de la página.

# OBJETIVO
Agregar una sección breve, elegante y estratégica que:
- Introduzca la oferta para colegios
- Muestre prueba social (colegios que ya han confiado)
- Redirija a una landing específica de colegios

# UBICACIÓN
Insertar la nueva sección:
👉 Justo después de la sección "Beneficios"
👉 Antes de la sección "Programas"

# REQUERIMIENTOS DE DISEÑO
- Mantener el mismo lenguaje visual actual (Tailwind, colores JKA, tipografías)
- Sección limpia, no invasiva
- No competir visualmente con el Hero ni con Programas
- Debe sentirse parte natural del flujo

# CONTENIDO DE LA SECCIÓN

## 1. Encabezado
Título:
"Programas de Karate para Colegios"

Subtítulo (breve):
"Llevamos disciplina, actividad física y formación valórica a instituciones educativas a través del Karate-Do tradicional."

## 2. Logos de colegios (prueba social)
Crear un grid responsive (3 a 6 elementos) con logos placeholder:

- Usar cajas con fondo neutro (bg-white / bg-surface)
- Bordes suaves (rounded-xl)
- Centrado vertical y horizontal
- Texto placeholder dentro:
  - "Colegio A"
  - "Colegio B"
  - "Colegio C"
  - etc.

Opcional:
- Escala de grises (opacity-60)
- Hover → opacity-100

## 3. CTA
Botón principal:
Texto: "Ver programas para colegios"

- Estilo consistente con botones actuales (bg-jka-red)
- Hover igual que otros CTAs
- Link:
  href="/colegios"

## 4. Layout sugerido
- Sección con fondo sutil (bg-white o bg-surface)
- Contenedor centrado (max-w-7xl)
- Texto centrado arriba
- Logos en grid debajo
- Botón centrado al final

# IMPORTANTE
- NO modificar otras secciones
- NO eliminar contenido existente
- NO cambiar estructura global
- SOLO agregar esta nueva sección bien integrada

# OUTPUT
Devuélveme:
- el html completo con la seccion nueva