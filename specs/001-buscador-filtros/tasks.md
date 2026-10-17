# Tareas: Spec 001 — Buscador y Filtros Avanzados en Tiempo Real

- [x] **T1. Funciones puras de búsqueda, normalización y suite de tests unitarios.** RF-2.1, RF-2.2, RF-2.3, RF-3.1, RF-4.1
  - Hecho cuando: Se cree `tests/search.test.js` y `assets/js/search.js`, pasando al 100% con `node --test` todas las aserciones de normalización de tildes/casing, escape de caracteres regex, coincidencia parcial, resaltado `<mark>`, filtrado de habilidades, proyectos (cruzado con categoría) y trayectoria laboral.

- [x] **T2. Marcado HTML accesible, estilos visuales y reglas de impresión en CSS.** RF-1.1, RF-1.4, RF-3.2, RF-3.3, RF-5.1, RF-5.2
  - Hecho cuando: Se incorpore en `index.html` la barra de búsqueda dedicada `#search-section` con `<input>`, botón de limpieza rápida `#btn-clear-search`, contador `#search-results-counter` y el contenedor de estado vacío `#search-empty-state` con sugerencias de palabras clave; y en `assets/css/custom.css` los estilos para modo claro/oscuro, resaltado `<mark>` y reglas `@media print` que garanticen la impresión íntegra del CV sin controles de búsqueda.

- [x] **T3. Integración interactiva en el DOM, orquestación en tiempo real y filtrado cruzado en main.js.** RF-1.2, RF-1.3, RF-2.4, RF-3.1, RF-4.1, RF-4.2
  - Hecho cuando: Al ingresar texto en el buscador se filtren en vivo las tarjetas de Habilidades, Proyectos y Experiencia, se actualice el contador de coincidencias, se resalten los términos coincidentes, funcione el botón de limpieza/Escape y se combinen adecuadamente los filtros de categoría de proyectos.

- [x] **T4. Verificación integral, validación de casos límite y actualización de memoria.** Criterios de finalización 1 a 8
  - Hecho cuando: Se ejecute la suite de tests unitarios `node --test` con 100% de éxito, se verifique la sintaxis y comportamiento en consola del navegador, se comprueben los casos límite (caracteres especiales, borrado rápido, impresión con Ctrl+P) y se actualice `memory.md`.
