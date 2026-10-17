# memory.md — Memoria del proyecto (CV Web)

Registro de todo lo que debe preservarse entre sesiones de trabajo: arquitectura de datos, decisiones técnicas tomadas e historial de cambios.
**Los agentes deben leer este archivo antes de empezar y actualizarlo al terminar cada tarea** (ver `AGENTS.md`).

---

## 1. Estructura de datos y persistencia

### A. Persistencia en `localStorage`
- **Clave:** `theme`
  - **Valores posibles:** `"dark"` | `"light"`
  - **Comportamiento:** Si no existe la clave, se detecta automáticamente la preferencia del sistema (`window.matchMedia('(prefers-color-scheme: dark)')`). Al pulsar el botón de alternancia, se almacena la selección para futuras visitas.
- **Clave:** `cv-web-lang`
  - **Valores posibles:** `"es"` | `"en"`
  - **Comportamiento:** Si no existe la clave guardada, se evalúa `navigator.language`; si comienza por `"en"` se selecciona `"en"`, en cualquier otro caso recurre a `"es"`. Al pulsar el selector de idioma `#lang-toggle` / `#lang-toggle-mobile`, se almacena la selección para futuras visitas con tolerancia a modo incógnito.

### B. Fuente única de datos (`PROFILE_DATA`)
Toda la información del profesional se encuentra centralizada en `assets/js/data.js` bajo el objeto global `PROFILE_DATA`:

| Sección en `PROFILE_DATA` | Tipo de dato | Descripción |
| :--- | :--- | :--- |
| `personal` | Objeto | Nombre, títulos, resumen, ubicación, disponibilidad, email, teléfono, links (LinkedIn, GitHub) y métricas de impacto para el Hero. |
| `executivePitch` | Objeto | Resumen ejecutivo en 30 segundos con 3 pilares estratégicos (adaptabilidad, liderazgo y resultados). |
| `brandTechnologies` | Array de objetos | Tecnologías destacadas con paleta cromática de marca, íconos y categorías. |
| `corePillars` | Array de objetos | Los 4 pilares de especialización con ícono, título y descripción. |
| `technicalSkills` | Objeto de arrays | Habilidades agrupadas por categorías (Lenguajes, Frameworks, Bases de Datos, Metodologías, etc.). |
| `projects` | Array de objetos | Casos de estudio en formato STAR con categorías de filtro, badges, resumen y modal detallado. |
| `experience` | Array de objetos | Trayectoria laboral cronológica con empresa, cargo, período, ubicación y lista de logros. |
| `educationAndCerts` | Objeto | Certificaciones profesionales (con enlaces de validación y PDFs) y títulos académicos de pregrado y posgrado. |

---

## 2. Decisiones vigentes

Decisiones ya tomadas que deben respetarse salvo indicación explícita del usuario:

- **Sin paso de compilación:** El proyecto no utiliza `npm build`, `webpack`, `vite` ni bundlers. Debe funcionar directamente abriendo `index.html` con doble clic (`file://`) o mediante un servidor estático rápido (`python -m http.server`, `npx serve`).
- **Tailwind CSS vía CDN:** La configuración de temas, tipografías y colores corporativos (paleta `brand`) reside en el `<script>` de configuración de Tailwind en el `<head>` de `index.html`.
- **Modo oscuro por clase:** Se usa la clase `dark` en el elemento `<html>`, controlada por `assets/js/main.js` y estilizada mediante clases utilitarias de Tailwind y variables CSS en `assets/css/custom.css`.
- **Separación de datos y lógica:** No añadir textos personales ni proyectos estáticos directamente en `index.html`. Toda nueva entrada debe incorporarse en `assets/js/data.js` para que `assets/js/main.js` la renderice de forma consistente.
- **Modales nativos:** Los modales de detalle de proyectos STAR y opciones de descarga utilizan la etiqueta nativa `<dialog>`, aprovechando `showModal()` y `close()` con soporte nativo de backdrop y tecla Escape.
- **Optimización de impresión (`@media print`):** La descarga del CV en PDF aprovecha las capacidades de impresión del navegador (`Ctrl + P` o botón interactivo), ocultando la navegación, controles interactivos y fondos oscuros mediante estilos de impresión dedicados en `assets/css/custom.css`.
- **Iconos:** Se emplea la biblioteca Lucide Icons cargada vía CDN y renderizada mediante `window.lucide.createIcons()`.
- **Buscador y normalización de texto:** Las funciones de búsqueda residen en `assets/js/search.js` como funciones puras sin dependencias externas, con tolerancia a acentos y mayúsculas, y exportación condicional para ejecución en `node --test`.
- **Internacionalización de interfaz (UI Chrome):** El catálogo bilingüe y funciones puras de i18n residen en `assets/js/i18n.js` con paridad estricta de claves. Solo se traduce el UI Chrome (navegación, botones, buscador, etiquetas de sección, accesibilidad y toasts), preservando el cuerpo técnico en español original por acuerdo explícito para no desvirtuar los logros y métricas STAR.
- **Integridad de impresión:** Las reglas en `assets/css/custom.css` aseguran que al imprimir o guardar en PDF (Ctrl + P), los elementos filtrados temporalmente por el buscador permanezcan siempre visibles (`display: block !important`) para generar un currículum completo.

---

## 3. Historial de cambios

Añadir una entrada nueva arriba del todo por cada tarea terminada.

### 2026-10-16 — Implementación completa: Selector de Idioma Bilingüe ES/EN (Spec 002)
- **T1 completada:** Creado [assets/js/i18n.js](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/assets/js/i18n.js) con catálogo bilingüe (ES / EN) y funciones puras (`esIdiomaValido`, `resolverIdiomaInicial`, `obtenerTraduccion`, `obtenerDiccionario`) con dual export UMD/CommonJS. Suite de pruebas [tests/i18n.test.js](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/tests/i18n.test.js) con 6/6 tests pasando (paridad exacta de claves).
- **T2 completada:** Incorporados en [index.html](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/index.html) los botones `#lang-toggle` (navbar escritorio) y `#lang-toggle-mobile` (menú móvil) junto a los controles de tema. Etiquetados los elementos traducibles de la interfaz mediante atributos declarativos (`data-i18n`, `data-i18n-placeholder`, `data-i18n-title`, `data-i18n-aria-label`).
- **T3 completada:** Implementada en [assets/js/main.js](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/assets/js/main.js) la orquestación dinámica (`initLanguage`, `setLanguage`), actualización del atributo `<html lang="...">`, persistencia en `localStorage` bajo `cv-web-lang`, adaptación de filtros de proyectos y notificaciones flotantes (toasts) según idioma activo.
- **T4 completada:** Verificación al 100% de la suite combinada de pruebas (14/14 tests pasando en `tests/search.test.js` y `tests/i18n.test.js`), validación de sintaxis con `node -c`, tolerancia a modo incógnito y actualización de especificación a `implementada`.

### 2026-10-16 — Refinamiento visual e identidad de ingeniería (frontend-design)
- Aplicados los principios de la skill `frontend-design` para dotar al portfolio de una estética arquitectónica y técnica ("The Systems Architect"):
  - Reemplazados los rótulos genéricos en mayúsculas forzadas (`UPPERCASE TRACKING-WIDEST`) por indicadores semánticos `.section-tag` sobrios con iconos y caja baja equilibrada.
  - Rediseñado el titular principal del Hero eliminando clips de degradado múltiples para una lectura ejecutiva más rotunda y sólida.
  - Refinadas las tarjetas de métricas del Hero con presentación tabular de alta precisión técnica.
  - Refinado el bloque del Elevator Pitch y las tarjetas de proyectos STAR, con bloques destacados de "Resultado comprobable" y botones táctiles sutiles.
  - Reestructurado el sistema de variables CSS en [assets/css/custom.css](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/assets/css/custom.css) con elevaciones limpias, contraste descansado y paleta técnica abisal en modo oscuro.
  - 8/8 tests unitarios pasando en verde en `node --test` y sintaxis JS 100% validada.

### 2026-10-16 — Implementación completa: Buscador y Filtros Avanzados (Spec 001)
- **T1 completada:** Creado [assets/js/search.js](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/assets/js/search.js) con funciones puras (`normalizarTexto`, `escaparRegex`, `coincideTexto`, `resaltarCoincidencias`, `filtrarHabilidades`, `filtrarProyectos`, `filtrarExperiencia`, `calcularTotalCoincidencias`) y suite unitaria nativa [tests/search.test.js](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/tests/search.test.js) con 8/8 tests pasando en `node --test`.
- **T2 completada:** Maquetada en [index.html](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/index.html) la sección `#search-section` accesible con input, botón de limpieza, contador dinámico y panel de cero coincidencias `#search-empty-state` con chips de sugerencias rápidas. En [assets/css/custom.css](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/assets/css/custom.css) se definieron estilos para `<mark class="search-highlight">` (modo claro/oscuro) y reglas `@media print` para forzar la impresión íntegra del currículum.
- **T3 completada:** Implementada en [assets/js/main.js](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/assets/js/main.js) la orquestación interactiva en tiempo real (`setupSearch`, `renderTechnicalSkills`, `renderExperience`, `renderProjects`), sincronizando búsqueda textual y filtros de categoría de proyectos.
- **T4 completada:** Verificación integral de sintaxis (0 errores), suite de pruebas al 100% verde y actualización de la especificación a `implementada`.

### 2026-10-16 — Redacción de la especificación funcional (specs/001-buscador-filtros/spec.md)
- Generada la especificación [specs/001-buscador-filtros/spec.md](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/specs/001-buscador-filtros/spec.md) en estado `borrador` a partir de las 5 preguntas de clarificación acordadas con el usuario.
- Delimitado el QUÉ y el POR QUÉ del buscador y filtros avanzados en tiempo real (barra dedicada accesible, filtrado simultáneo en Habilidades, Proyectos y Experiencia, resaltado visual de términos, combinación acumulativa con categorías de proyectos, estado sin coincidencias con sugerencias y protección del documento impreso completo al exportar a PDF).
- Cero líneas de código de implementación modificadas en esta fase.

### 2026-10-16 — Inicialización y alineación completa de la documentación del proyecto (`/init`)
- Detectada y resuelta la discrepancia de contexto: se reemplazaron los archivos de documentación huérfanos del proyecto anterior ("Aprendiendo a Leer") por la documentación oficial y especializada de este repositorio (**CV Web & Portfolio de Andres Aguiar**).
- Actualizado [AGENTS.md](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/AGENTS.md) con las directrices de arquitectura, stack técnico (HTML5, Tailwind CDN, Vanilla JS, Lucide) y protocolos de prueba.
- Actualizado [docs/constitution.md](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/docs/constitution.md) con los 6 principios innegociables del proyecto.
- Creado [memory.md](file:///d:/Carpetas/Desarrollos/Desarrollos%20WEB/CV%20Web/memory.md) con la especificación de `PROFILE_DATA`, persistencia de tema en `localStorage`, decisiones arquitectónicas vigentes y registro de cambios.
- Eliminada la skill obsoleta `local-dates` y conservadas las directrices de frontend y buenas prácticas web.
