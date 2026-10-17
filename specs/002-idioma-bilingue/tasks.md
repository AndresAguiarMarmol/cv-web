# Tareas: Spec 002 — Selector de Idioma Bilingüe de Interfaz

- [x] **T1. Funciones puras de internacionalización y suite de pruebas unitarias.** RF-1.1, RF-1.2, RF-1.3, RF-1.4, RF-3.1
  - Hecho cuando: Se cree `tests/i18n.test.js` y `assets/js/i18n.js` con el catálogo bilingüe y funciones puras (`esIdiomaValido`, `resolverIdiomaInicial`, `obtenerTraduccion`, `obtenerDiccionario`), pasando al 100% con `node --test`.

- [x] **T2. Marcado de botones selectores de idioma y atributos data-i18n en index.html.** RF-2.1, RF-3.1, RF-3.2, RF-3.3, RF-3.4, RF-3.5
  - Hecho cuando: Se incorporen los botones `#lang-toggle` y `#lang-toggle-mobile` en `index.html`, se etiqueten los textos con `data-i18n` y se importe `assets/js/i18n.js`.

- [x] **T3. Integración interactiva en el DOM y persistencia en localStorage en main.js.** RF-2.2, RF-2.3, RF-3.1, RF-3.5
  - Hecho cuando: Se implementen `initLanguage()` y `setLanguage(lang)` en `main.js`, conmutando fluidamente los textos, actualizando el atributo `lang` en `<html>`, notificando con toast y persistiendo en `localStorage`.

- [x] **T4. Verificación integral, validación de casos límite y actualización de memoria.** Criterios de finalización 1 a 6
  - Hecho cuando: Todas las pruebas unitarias pasen al 100%, se verifiquen los casos límite (valores corruptos, modo incógnito), no haya errores en consola y se actualice `memory.md`.
