# Constitución del Portfolio & Curriculum Web (CV Web)

1. **Simplicidad del stack y cero compilación:** HTML5 semántico, Tailwind CSS (CDN), JavaScript Vanilla modular y CSS personalizado; ejecutable directamente con doble clic (`file://`), servidor local rápido o GitHub Pages, sin pasos de compilación ni librerías pesadas.
2. **Centralización de datos (Single Source of Truth):** Toda la información del perfil profesional, experiencia, proyectos STAR, habilidades y certificaciones reside en `assets/js/data.js` (`PROFILE_DATA`). El DOM se hidrata dinámicamente mediante `assets/js/main.js`.
3. **Diseño responsivo, estética moderna y modo oscuro:** Interfaz limpia y profesional optimizada para móviles y escritorio, con soporte de temas Claro/Oscuro con persistencia en `localStorage` (`theme`) y transiciones visuales cuidadas.
4. **Accesibilidad y componentes nativos:** Uso de `<dialog>` nativo para modales (casos STAR, visualización de certificados, selector de descarga), enlaces semánticos, navegación por teclado y contraste accesible.
5. **Optimización para exportación y PDF:** Soporte integral de estilos de impresión (`@media print`) para generar currículums ejecutivos impecables en PDF mediante Ctrl+P o descarga directa.
6. **Idioma y rigor profesional:** Textos en español, redacción técnica orientada a logros cuantificables, casos de estudio estructurados y profesionalismo en TI.
