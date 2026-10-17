# Spec 001 — Buscador y Filtros Avanzados en Tiempo Real

Estado: implementada

## Contexto y objetivo
El portfolio profesional cuenta con más de 40 años de trayectoria, múltiples proyectos en formato STAR, decenas de habilidades técnicas y diversas experiencias corporativas. Los reclutadores, gerentes de contratación y clientes disponen de poco tiempo y buscan validar rápidamente si el candidato domina competencias o tecnologías específicas (ejemplo: "Python", "SQL", "Saint", "Inteligencia Artificial", "Soporte", "Alcasa").

El objetivo de esta funcionalidad es proporcionar un mecanismo de búsqueda y filtrado interactivo en tiempo real que permita explorar, localizar y resaltar al instante cualquier habilidad, proyecto o experiencia laboral en el portfolio.

---

## Usuarios
- **Reclutador / Talent Acquisition:** Necesita comprobar en segundos si el perfil cumple con las palabras clave requeridas para una vacante.
- **Líder Técnico / CTO:** Busca evaluar proyectos específicos y tecnologías aplicadas (arquitectura, bases de datos, herramientas).
- **Cliente de Consultoría:** Desea encontrar antecedentes en industrias, ERPs o áreas operativas afines a su necesidad.

---

## Historias de usuario
- **HU-1:** Como reclutador técnico, quiero escribir una palabra clave en un buscador para ver únicamente los proyectos, habilidades y experiencias laborales que coincidan con ella.
- **HU-2:** Como visitante, quiero ver cuántas coincidencias existen en el portfolio para conocer la relevancia del término buscado.
- **HU-3:** Como evaluador, quiero ver el término buscado resaltado visualmente en los textos para identificar rápidamente el contexto donde fue aplicado.
- **HU-4:** Como usuario que navega por categorías de proyectos, quiero que la búsqueda se combine con los filtros existentes para refinar mis resultados sin perder coherencia.
- **HU-5:** Como reclutador que desea imprimir o guardar el currículum en PDF, quiero que el documento impreso mantenga siempre el historial completo, independientemente de la búsqueda temporal activa en pantalla.

---

## Definiciones
- **Término de búsqueda:** Cadena de caracteres introducida por el usuario con al menos un carácter visible.
- **Búsqueda normalizada:** Comparación de cadenas insensible a mayúsculas, minúsculas, espacios sobrantes y signos diacríticos (tildes/acentos).
- **Coincidencia parcial:** Se considera coincidencia si el término ingresado forma parte de cualquier texto relevante del elemento (título, descripción, logros, tecnologías asociadas, empresa o rol).
- **Estado de Cero Coincidencias:** Condición en la cual ningún proyecto, habilidad ni experiencia coincide con el término de búsqueda ingresado.

---

## Requisitos funcionales (EARS)

### RF-1: Entrada de búsqueda y control
- **RF-1.1:** EL SISTEMA presentará una barra de búsqueda dedicada y accesible visible antes de las secciones de contenido principal (Habilidades, Proyectos y Experiencia).
- **RF-1.2:** CUANDO el usuario introduce texto en la barra de búsqueda, EL SISTEMA filtrará en tiempo real las secciones de Habilidades Técnicas, Proyectos y Experiencia Laboral.
- **RF-1.3:** CUANDO el usuario pulsa el control de limpieza (botón de limpiar/restablecer) o borra todo el texto, EL SISTEMA restaurará la visualización de todos los elementos y eliminará cualquier resaltado.
- **RF-1.4:** MIENTRAS el campo de búsqueda contenga texto, EL SISTEMA mostrará un botón interactivo para borrar rápidamente la consulta con un solo clic.

### RF-2: Criterios de coincidencia y normalización
- **RF-2.1:** EL SISTEMA aplicará comparación normalizada insensible a mayúsculas, minúsculas y tildes (por ejemplo, buscar "gestion" debe coincidir con "Gestión" y buscar "ia" debe coincidir con "IA").
- **RF-2.2:** EL SISTEMA evaluará coincidencias en los títulos, descripciones, etiquetas tecnológicas, nombres de herramientas, empresas y logros de cada elemento evaluado.
- **RF-2.3:** CUANDO se detecta una o más coincidencias en un elemento, EL SISTEMA mantendrá visible dicho elemento y resaltará visualmente el fragmento de texto coincidente.
- **RF-2.4:** SI un elemento no contiene ninguna coincidencia con el término de búsqueda, ENTONCES EL SISTEMA lo ocultará de la vista.

### RF-3: Indicador de coincidencias y estados vacíos
- **RF-3.1:** MIENTRAS exista una búsqueda activa con coincidencias, EL SISTEMA mostrará un contador dinámico con el número total de coincidencias encontradas en la página.
- **RF-3.2:** SI ningún elemento de ninguna sección coincide con el término ingresado, ENTONCES EL SISTEMA mostrará un panel de estado "Sin coincidencias" informando el término no encontrado.
- **RF-3.3:** EL SISTEMA incluirá en el panel de estado "Sin coincidencias" un botón de acción rápida para restablecer la búsqueda y una lista de sugerencias de términos clave frecuentes (por ejemplo: "Python", "SQL", "IA", "Soporte", "Alcasa", "Saint").

### RF-4: Interacción con filtros de categorías existentes
- **RF-4.1:** CUANDO el usuario tiene activa una categoría en los proyectos (por ejemplo: "Python") y escribe en el buscador, EL SISTEMA aplicará un filtrado cruzado acumulativo, mostrando solo los proyectos que pertenezcan a esa categoría y que además coincidan con la búsqueda.
- **RF-4.2:** CUANDO el usuario cambia de categoría mientras hay un término en el buscador, EL SISTEMA actualizará los proyectos visibles manteniendo el filtro del término de búsqueda.

### RF-5: Comportamiento ante exportación e impresión
- **RF-5.1:** CUANDO se dispara la orden de impresión o exportación a PDF (mediante atajo del sistema o acción en pantalla), EL SISTEMA garantizará que el currículum impreso contenga todas las secciones y elementos en su totalidad, sin ocultar información filtrada en pantalla.
- **RF-5.2:** EL SISTEMA ocultará la barra de búsqueda y los controles interactivos de filtrado en la vista de impresión.

---

## Requisitos no funcionales
- **RNF-1 (Rendimiento en tiempo real):** La actualización de la interfaz y el filtrado deben ejecutarse de manera fluida (tiempo de respuesta menor a 50 ms por pulsación de tecla) sin bloqueos de interfaz ni recargas de página.
- **RNF-2 (Accesibilidad):** El campo de búsqueda debe contar con etiquetas accesibles (`aria-label`), anunciar el cambio de resultados a lectores de pantalla y ser operable íntegramente mediante teclado.
- **RNF-3 (Diseño responsivo y temas):** La barra de búsqueda, el contador y los estados vacíos deben integrarse armónicamente en dispositivos móviles y de escritorio, respetando tanto el modo claro como el modo oscuro.
- **RNF-4 (Sin dependencias externas):** La funcionalidad debe operar íntegramente con lógica interna del cliente, sin invocar librerías externas de búsqueda ni servicios de terceros.

---

## Casos límite
- **Término con espacios al inicio o al final:** Se recortarán automáticamente los espacios en blanco externos antes de procesar la búsqueda.
- **Caracteres especiales y signos de puntuación:** La búsqueda no debe romperse ni arrojar errores ante caracteres como `+`, `*`, `/`, `-`, `@`, etc.
- **Búsqueda de una sola letra:** Debe funcionar de inmediato (ejemplo: buscar "C" o "R" resaltará las coincidencias correspondientes).
- **Borrado rápido de la consulta con tecla Retroceso o Escape:** La restauración de los elementos debe ser instantánea y sin parpadeos.

---

## Fuera de alcance
- Búsqueda booleana avanzada con operadores lógicos (`AND`, `OR`, `NOT`, comillas de frase exacta).
- Corrección ortográfica o sugerencias de "quizás quisiste decir".
- Indexación de documentos externos en PDF en tiempo de ejecución.

---

## Criterios de finalización
1. La barra de búsqueda es visible y utilizable en modo claro y oscuro en dispositivos móviles y de escritorio.
2. Escribir términos clave filtra simultáneamente Habilidades, Proyectos y Trayectoria profesional.
3. Los textos coincidentes quedan resaltados visualmente.
4. El contador de coincidencias refleja con exactitud los elementos visibles encontrados.
5. El panel de cero resultados aparece cuando no hay coincidencias y permite restablecer la búsqueda con un clic.
6. La combinación con los botones de categoría de proyectos opera de forma cruzada y consistente.
7. Al imprimir la página (Ctrl+P o descarga), el currículum aparece completo y sin los controles de búsqueda.
8. La consola del navegador permanece con cero errores y cero advertencias.

---

## Dudas abiertas
*No hay dudas abiertas: los 5 aspectos clave fueron acordados y clarificados en la fase previa.*
