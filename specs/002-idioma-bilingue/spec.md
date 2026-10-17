# Spec 002 — Selector de Idioma Bilingüe de Interfaz (Español / Inglés)

Estado: implementada

## Contexto y objetivo
El portfolio web de Andres Aguiar recibe visitas tanto de reclutadores y líderes técnicos hispanohablantes como de cazatalentos y consultores internacionales. Para brindar una experiencia inclusiva y global, se requiere un sistema de traducción de la interfaz de usuario (UI chrome) que permita alternar instantáneamente entre **Español (ES)** e **Inglés (EN)**.

El objetivo de esta especificación es permitir que los elementos de navegación, botones de acción, marcadores de sección, campo de búsqueda y controles interactivos se traduzcan fluidamente, detectando la preferencia del navegador y recordando la elección del usuario entre sesiones.

---

## Usuarios
- **Reclutador Internacional:** Navega la plataforma en inglés para entender rápidamente las secciones, buscar competencias y descargar el currículum.
- **Reclutador / Cliente Hispanohablante:** Disfruta de la experiencia nativa original en español.

---

## Historias de usuario
- **HU-1:** Como visitante internacional cuyo navegador está configurado en inglés, quiero que la interfaz aparezca en inglés por defecto para orientarme sin fricciones.
- **HU-2:** Como usuario, quiero alternar entre Español e Inglés con un botón claro (ES / EN) en la barra de navegación para elegir mi idioma preferido en cualquier momento.
- **HU-3:** Como usuario recurrente, quiero que mi preferencia de idioma se guarde en mi navegador para no tener que seleccionarla en cada visita.
- **HU-4:** Como usuario que utiliza el buscador, quiero que los textos informativos, el placeholder del input, el contador de resultados y el botón de restablecer se adapten al idioma activo.

---

## Definiciones
- **UI Chrome (Interfaz):** Todos los textos de interacción, navegación, botones CTA, etiquetas de sección, accesibilidad (`aria-label`) y avisos flotantes (toasts).
- **Idioma activo:** El idioma actual seleccionado (`"es"` o `"en"`).
- **Persistencia de idioma:** Clave en almacenamiento local del navegador (`cv-web-lang`).

---

## Requisitos funcionales (EARS)

### RF-1: Detección y resolución del idioma inicial
- **RF-1.1:** CUANDO el usuario carga el sitio por primera vez (sin preferencia guardada), EL SISTEMA detectará el idioma del navegador mediante `navigator.language`.
- **RF-1.2:** SI el idioma detectado del navegador comienza por `"en"`, ENTONCES EL SISTEMA inicializará la interfaz en inglés (`"en"`).
- **RF-1.3:** SI el idioma detectado no es inglés o no está disponible, ENTONCES EL SISTEMA inicializará la interfaz en español (`"es"`).
- **RF-1.4:** SI existe una preferencia guardada en el almacenamiento local, ENTONCES EL SISTEMA priorizará dicho valor sobre la detección automática del navegador.

### RF-2: Control de alternancia de idioma
- **RF-2.1:** EL SISTEMA presentará un botón conmutador de idioma accesible en la barra de navegación de escritorio y en el menú móvil junto al control de tema claro/oscuro.
- **RF-2.2:** CUANDO el usuario pulsa el control de idioma, EL SISTEMA alternará el idioma activo (de `"es"` a `"en"` o viceversa), actualizará el texto del botón y guardará la preferencia en el almacenamiento local.
- **RF-2.3:** CUANDO se cambia de idioma, EL SISTEMA mostrará un mensaje breve (toast) notificando el cambio ("Idioma cambiado a Inglés" / "Language switched to English").

### RF-3: Actualización de la interfaz en tiempo real
- **RF-3.1:** CUANDO cambia el idioma activo, EL SISTEMA traducirá todos los elementos marcados con identificadores de internacionalización (`data-i18n`) sin recargar la página.
- **RF-3.2:** EL SISTEMA actualizará los enlaces de navegación (`Inicio / Home`, `Proyectos / Projects`, `Habilidades / Skills`, `Trayectoria / Experience`, `Contacto / Contact`).
- **RF-3.3:** EL SISTEMA actualizará los botones de acción (`Ver Casos de Éxito / View Case Studies`, `Copiar Correo / Copy Email`, `Descargar Curriculum / Download Resume`).
- **RF-3.4:** EL SISTEMA actualizará los textos del buscador: placeholder del campo, textos del contador de coincidencias, botón de limpieza y mensaje de estado vacío con sugerencias.
- **RF-3.5:** EL SISTEMA actualizará el atributo `lang` del elemento raíz `<html>` a `"es"` o `"en"` según corresponda para accesibilidad y SEO.

---

## Requisitos no funcionales
- **RNF-1 (Rendimiento):** El cambio de idioma debe ejecutarse de forma instantánea (< 20 ms) en el cliente sin parpadeos ni peticiones de red adicionales.
- **RNF-2 (Accesibilidad):** El botón de conmutación debe incluir atributos `aria-label` descriptivos y reflejar el estado actual.
- **RNF-3 (Sin dependencias externas):** Diccionario ligero estructurado en JavaScript Vanilla, compatible con `node --test`.

---

## Casos límite
- **Almacenamiento local bloqueado o inaccesible (modo incógnito estricto):** El sistema utilizará la preferencia en memoria sin arrojar excepciones.
- **Valor corrupto en almacenamiento local:** Si la clave guardada contiene un valor distinto a `"es"` o `"en"`, el sistema recurrirá a `"es"` como fallback seguro.

---

## Fuera de alcance
- Traducción automática del cuerpo extenso de los proyectos STAR y la descripción histórica detallada de cada empleo (se mantiene en español original por acuerdo explícito con el usuario).
- Traducción de documentos PDF externos.

---

## Criterios de finalización
1. El botón conmutador de idioma aparece visible y alineado en la barra de navegación y en el menú móvil.
2. Al pulsar el botón, la interfaz completa (navegación, botones, buscador, insignias de sección) cambia fluidamente entre español e inglés.
3. El atributo `<html lang="...">` se actualiza dinámicamente.
4. La selección persiste tras recargar la página.
5. El sistema detecta automáticamente navegadores configurados en inglés en la primera visita.
6. La suite de pruebas unitarias pasa al 100% con `node --test`.
