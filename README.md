# Portfolio & Curriculum Web - Analista de Sistemas TI

Sitio web profesional, moderno, responsivo y de alto rendimiento diseñado específicamente para perfiles de **Analista de Sistemas / TI**.

---

## 🚀 Cómo visualizar el proyecto localmente

No necesitas instalar dependencias pesadas ni configurar compiladores. Tienes varias opciones:

### Opción 1: Abrir directamente en el navegador
Haz doble clic sobre el archivo `index.html` o arrástralo a tu navegador web favorito (Chrome, Edge, Firefox, etc.).

### Opción 2: Usar un servidor local rápido (Recomendado)
Desde PowerShell o tu terminal en la carpeta `cv-analista-ti`:

- **Con Python:**
  ```powershell
  python -m http.server 8000
  ```
  Luego abre `http://localhost:8000` en tu navegador.

- **Con Node.js (npx):**
  ```powershell
  npx serve .
  ```

---

## ✏️ Cómo personalizar tus datos

Toda la información del sitio está centralizada y estructurada en el archivo:
📁 **`assets/js/data.js`**

Allí puedes editar de forma muy sencilla:
1. **`personal`**: Tu nombre, título profesional, ubicación, disponibilidad, correo, enlaces a LinkedIn y GitHub.
2. **`corePillars`**: Tus 4 pilares de especialización (Análisis funcional, APIs, Datos, Agilidad).
3. **`projects`**: Casos de estudio en formato STAR (Situación, Tarea, Acción, Resultados cuantitativos).
4. **`technicalSkills`**: Tecnologías, herramientas de modelado (BPMN, UML), bases de datos y metodologías.
5. **`experience`**: Tu trayectoria laboral con logros clave por empresa.
6. **`educationAndCerts`**: Certificaciones profesionales (Scrum, ITIL, Cloud) y títulos académicos.

---

## 📄 Vincular o descargar tu CV en PDF

El sitio cuenta con dos funciones para el CV en PDF:
1. **Impresión inteligente (Ctrl + P):** La página cuenta con reglas CSS de impresión (`@media print`) optimizadas para que al pulsar "Descargar CV" o `Ctrl + P`, oculte elementos web interactivos y genere un resumen ejecutivo limpio en PDF.
2. **Enlace a tu propio archivo PDF:** Si ya tienes un PDF preparado, guárdalo en `assets/docs/tu_curriculum.pdf` y actualiza la propiedad `cvPdfUrl` en `data.js`.

---

## 🌐 Cómo publicar tu web gratis en Internet (en 2 minutos)

### Con GitHub Pages:
1. Crea un repositorio público en tu cuenta de GitHub (ej: `portfolio` o `mi-cv`).
2. Sube todos los archivos de esta carpeta al repositorio:
   ```sh
   git init
   git add .
   git commit -m "Mi portfolio de Analista de Sistemas TI"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings > Pages**, en "Branch" selecciona `main` y la carpeta `/ (root)`, luego pulsa **Save**.
4. ¡Listo! En menos de 2 minutos tu web estará disponible en `https://tu-usuario.github.io/tu-repositorio/`.

### Con Vercel o Netlify:
- Arrastra la carpeta `cv-analista-ti` directamente al panel de [Netlify Drop](https://app.netlify.com/drop) o vincula tu repositorio en [Vercel](https://vercel.com).
- Se publicará al instante con certificado SSL (HTTPS) gratuito.
