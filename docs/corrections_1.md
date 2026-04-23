Voy a ir directo a mejoras concretas que puedes pasarle a Stitch, sin relleno.

---

## 1. Jerarquía visual (problema principal)

Hoy todo compite: tabs, métricas y cards tienen peso similar.

**Corrección:**

* Reduce protagonismo de métricas (menos altura + menor contraste).
* Dale más foco a las cards (son el contenido real).
* El header azul está muy dominante → baja saturación o altura.

**Prompt para Stitch:**

> Reduce la altura del header y baja el contraste del gradiente. Las métricas deben tener menor peso visual (fondo más claro, tipografía más pequeña). El foco principal deben ser las cards de seminarios.

---

## 2. Filtros mal resueltos (Tabs)

“Todos / Próximo / En curso / Finalizado” parecen tabs, pero funcionan como filtros.

**Problema:**
No está claro el estado activo y no escala bien.

**Corrección:**

* Convertir a segmented control o pills con estado activo más claro.
* Agregar contador por estado (ej: Próximo (1)).

**Prompt:**

> Cambia los tabs por un segmented control tipo pills. El estado activo debe tener fondo sólido y los demás outline. Agrega contador de items por estado.

---

## 3. Cards inconsistentes

Hay ruido visual y falta de estructura clara.

**Problemas:**

* Mucho texto sin jerarquía.
* Fechas poco escaneables.
* Imagen domina demasiado.

**Correcciones:**

* Limitar título a 2 líneas.
* Subtítulo (Sensei / lugar) en menor peso.
* Fecha como bloque separado (icono + formato compacto).
* Badge de año más sutil.

**Prompt:**

> Reestructura las cards:
>
> * Título máximo 2 líneas.
> * Subinfo (instructor y lugar) en tipografía secundaria.
> * Fechas en una sola línea con icono.
> * Reduce el tamaño del badge de año y colócalo como overlay discreto.
> * Aplica hover con elevación y ligera escala.

---

## 4. Falta de estado (UX)

No se distingue claramente:

* Próximo vs En curso vs Finalizado

**Corrección:**
Agregar estado visual en cada card:

* Color code (sutil):

  * Próximo → azul
  * En curso → verde
  * Finalizado → gris

**Prompt:**

> Agrega un badge de estado en cada card con color semántico (próximo, en curso, finalizado). Debe ser visible pero no dominante.

---

## 5. Espaciado y grid

El layout está apretado y poco aireado.

**Corrección:**

* Más espacio vertical entre secciones.
* Grid más consistente (ej: 4 columnas → 3 en pantallas medianas).
* Padding interno de cards más uniforme.

**Prompt:**

> Aumenta el spacing vertical entre bloques. Usa un grid responsive de 4 columnas desktop, 2 tablet, 1 mobile. Homogeneiza padding interno de cards.

---

## 6. Barra de búsqueda débil

Está perdida visualmente.

**Corrección:**

* Hacerla más ancha.
* Agregar icono de búsqueda dentro.
* Placeholder más útil.

**Prompt:**

> Mejora el input de búsqueda: más ancho, icono a la izquierda, placeholder más descriptivo ("Buscar por nombre, sensei o lugar").

---

## 7. CTA "Crear seminario"

Está bien ubicado, pero no destaca lo suficiente.

**Corrección:**

* Más contraste o tamaño.
* Icono más claro.
* Posible sticky en scroll.

**Prompt:**

> Aumenta prominencia del botón "Crear seminario": mayor contraste, padding y sombra. Mantenerlo visible en scroll (sticky opcional).

---

## 8. Sidebar (detalle fino)

Funciona, pero:

**Corrección:**

* Estado activo más claro.
* Mejor separación de secciones.
* Iconos con menos peso visual.

**Prompt:**

> Mejora el estado activo del sidebar con fondo más claro y borde lateral. Reduce opacidad de iconos inactivos.

---

## 9. Microinteracciones (te falta vida)

Ahora se siente estático.

**Agregar:**

* Hover en cards
* Transiciones suaves
* Feedback en filtros

**Prompt:**

> Agrega microinteracciones: hover en cards (elevación + scale), transición suave en filtros, feedback visual en clicks.

---

## 10. Mejora rápida de alto impacto

Si tienes poco tiempo, dile esto a Stitch:

> Prioriza:
>
> 1. Reestructurar cards
> 2. Mejorar filtros (pills)
> 3. Reducir peso del header
> 4. Agregar estado visual en seminarios

---

Si quieres, en el siguiente paso te propongo directamente un rediseño estilo “dashboard SaaS moderno” (tipo Linear / Stripe) con layout claro para que lo implementes en React + Tailwind.
