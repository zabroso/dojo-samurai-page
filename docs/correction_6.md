````md id="landing-colegios-logos-v2"

# Prompt de Corrección – Sección Colegios (Logos / Prueba Social)

Aplica las siguientes mejoras **únicamente en la sección de colegios** del landing.

---

## ✅ Qué se mantiene
- Estructura general de la sección (título, descripción, grilla y CTA).
- Mensaje principal: programas de karate para colegios.
- CTA “Ver programas para colegios”.
- Uso de grilla para mostrar instituciones.

---

## ❌ Qué se quita
- El uso de **texto plano como reemplazo de logos** dentro de las cards.
- El estilo visual actual demasiado sobrio (parece placeholder).
- Sensación de “lista de nombres” → debe transformarse en “prueba social”.

---

## ➕ Qué se añade

### 1. Título de validación (prueba social)
Agregar sobre el título principal:

```html
<span class="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-6 block">
Colegios que ya confían en nosotros
</span>
````

---

### 2. Reemplazo de texto por logos

Cada card debe contener un `<img>` en lugar de texto.

Ejemplo:

```html
<img src="https://placehold.co/160x60?text=Colegio+1" alt="Colegio 1" class="max-h-12 object-contain">
```

* Usar placeholders realistas si no hay logos reales.
* Todos los logos deben mantener proporción (no deformar).

---

### 3. Aumentar cantidad de logos

* Pasar de 5 → mínimo 8 (ideal 10–12).
* Objetivo: generar sensación de confianza y volumen institucional.

---

### 4. Microcopy antes del CTA

Agregar texto antes del botón:

```html
<p class="text-sm text-muted mb-6">
Implementa este programa en tu institución
</p>
```

---

### 5. Animación sutil en hover

Agregar interacción:

* `hover:scale-105`
* `transition-all duration-300`

---

## 🔄 Qué debe cambiar

### 1. Estilo de cards (logos)

Reemplazar estilo actual por uno más limpio y enfocado en logos:

```html
<div class="bg-white rounded-xl h-24 flex items-center justify-center p-4 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all border border-border">
```

---

### 2. Grilla más densa (más institucional)

Cambiar:

```html
grid-cols-2 md:grid-cols-3 lg:grid-cols-5
```

Por:

```html
grid-cols-2 md:grid-cols-4 lg:grid-cols-6
```

---

### 3. Espaciado vertical

Reducir separación inferior de logos:

```html
mb-16 → mb-12
```

---

### 4. Jerarquía visual

* Logos deben ser el foco visual principal.
* Reducir protagonismo del texto dentro de las cards.
* Mantener consistencia en tamaños (altura uniforme).

---

## 🎯 Objetivo del cambio

Transformar la sección de:

> listado simple

a:

> bloque de **prueba social institucional fuerte**

Debe comunicar:

* Confianza
* Trayectoria
* Validación por terceros (colegios)

---

## 🧠 Notas de implementación

* No usar logos pixelados.
* Mantener contraste (logos visibles sobre fondo blanco).
* Evitar saturación visual: consistencia > variedad extrema.

---

## Resultado esperado

Una sección que:

* Se percibe más profesional
* Aumenta credibilidad
* Refuerza el componente B2B del negocio
* Mejora conversión hacia “programas para colegios”

```
```
