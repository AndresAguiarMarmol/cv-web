/**
 * Lógica interactiva del Portfolio de Analista de Sistemas
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  setupNavigation();
  setupModals();
  setupContactForm();
  setupCopyEmail();

  // Inicializar íconos Lucide si están disponibles
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   Gestión de Tema (Claro / Oscuro)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Determinar tema inicial
  if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    showToast(isDark ? 'Modo oscuro activado' : 'Modo claro activado', 'info');
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);
}

/* ==========================================================================
   Renderizado dinámico de datos desde data.js
   ========================================================================== */
function renderProfile() {
  if (typeof PROFILE_DATA === 'undefined') return;

  // 1. Datos Personales & Hero
  const nameEls = document.querySelectorAll('.bind-name');
  nameEls.forEach(el => el.textContent = PROFILE_DATA.personal.name);

  const titleEls = document.querySelectorAll('.bind-title');
  titleEls.forEach(el => el.textContent = PROFILE_DATA.personal.title);

  const subtitleEls = document.querySelectorAll('.bind-subtitle');
  subtitleEls.forEach(el => el.textContent = PROFILE_DATA.personal.subtitle);

  const summaryEls = document.querySelectorAll('.bind-summary');
  summaryEls.forEach(el => el.textContent = PROFILE_DATA.personal.summary);

  const locationEl = document.getElementById('bind-location');
  if (locationEl) locationEl.textContent = PROFILE_DATA.personal.location;

  const statusEl = document.getElementById('bind-status');
  if (statusEl) statusEl.textContent = PROFILE_DATA.personal.status;

  const emailEls = document.querySelectorAll('.bind-email');
  emailEls.forEach(el => {
    el.textContent = PROFILE_DATA.personal.email;
    if (el.tagName === 'A') el.href = `mailto:${PROFILE_DATA.personal.email}`;
  });

  const linkedinEls = document.querySelectorAll('.bind-linkedin');
  linkedinEls.forEach(el => {
    if (el.tagName === 'A') el.href = PROFILE_DATA.personal.linkedin;
  });

  const githubEls = document.querySelectorAll('.bind-github');
  githubEls.forEach(el => {
    if (el.tagName === 'A') el.href = PROFILE_DATA.personal.github;
  });

  // Métricas del Hero
  const metricsContainer = document.getElementById('hero-metrics-container');
  if (metricsContainer && PROFILE_DATA.personal.metrics) {
    metricsContainer.innerHTML = PROFILE_DATA.personal.metrics.map(m => `
      <div class="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-center">
        <span class="block text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">${m.value}</span>
        <span class="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">${m.label}</span>
      </div>
    `).join('');
  }

  // 2. Pilares de Especialización (Core Pillars)
  const pillarsContainer = document.getElementById('pillars-container');
  if (pillarsContainer && PROFILE_DATA.corePillars) {
    pillarsContainer.innerHTML = PROFILE_DATA.corePillars.map(pillar => `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 card-hover flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 font-semibold">
            <i data-lucide="${pillar.icon || 'layers'}" class="w-6 h-6"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">${pillar.title}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">${pillar.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Casos de Estudio / Proyectos
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer && PROFILE_DATA.projects) {
    projectsContainer.innerHTML = PROFILE_DATA.projects.map(proj => `
      <article class="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 card-hover flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
              ${proj.category}
            </span>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
              ${proj.tag}
            </span>
          </div>

          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
            ${proj.title}
          </h3>

          <div class="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border-l-4 border-blue-500">
            <p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Impacto Clave</p>
            <p class="text-sm font-bold text-slate-800 dark:text-slate-200">${proj.impact}</p>
          </div>

          <p class="text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3 leading-relaxed">
            ${proj.summary}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-6">
            ${proj.techStack.slice(0, 5).map(tech => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-medium">
                ${tech}
              </span>
            `).join('')}
            ${proj.techStack.length > 5 ? `<span class="text-xs px-2 py-1 text-slate-400">+${proj.techStack.length - 5} más</span>` : ''}
          </div>
        </div>

        <button 
          type="button" 
          onclick="openProjectModal('${proj.id}')"
          class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-700/60 dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors duration-200"
        >
          <span>Ver Análisis & Detalles</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </article>
    `).join('');
  }

  // 4. Habilidades Técnicas por Categoría
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && PROFILE_DATA.technicalSkills) {
    skillsContainer.innerHTML = Object.entries(PROFILE_DATA.technicalSkills).map(([category, items]) => `
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        <h3 class="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          ${category}
        </h3>
        <ul class="space-y-2.5">
          ${items.map(skill => `
            <li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-500 shrink-0 mt-0.5"></i>
              <span>${skill}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // 5. Trayectoria Profesional (Timeline)
  const experienceContainer = document.getElementById('experience-container');
  if (experienceContainer && PROFILE_DATA.experience) {
    experienceContainer.innerHTML = PROFILE_DATA.experience.map(exp => `
      <div class="relative pl-8 md:pl-0 mb-10 last:mb-0">
        <div class="md:grid md:grid-cols-12 md:gap-8 items-start">
          <div class="md:col-span-4 md:text-right mb-2 md:mb-0">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 mb-1">
              ${exp.period}
            </span>
            <div class="text-sm font-semibold text-slate-700 dark:text-slate-300">${exp.company}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">${exp.location}</div>
          </div>

          <div class="md:col-span-8 bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 card-hover">
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${exp.role}</h4>
            <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">${exp.description}</p>
            <ul class="space-y-2">
              ${exp.highlights.map(h => `
                <li class="flex items-start gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  <span class="text-blue-500 font-bold">•</span>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `).join('');
  }

  const phoneEls = document.querySelectorAll('.bind-phone');
  phoneEls.forEach(el => {
    el.textContent = PROFILE_DATA.personal.phone;
    if (el.tagName === 'A') el.href = `tel:${PROFILE_DATA.personal.phone.replace(/[^0-9+]/g, '')}`;
  });

  const whatsappEls = document.querySelectorAll('.bind-whatsapp');
  whatsappEls.forEach(el => {
    if (el.tagName === 'A') {
      const cleanPhone = PROFILE_DATA.personal.phone.replace(/[^0-9]/g, '');
      el.href = `https://wa.me/${cleanPhone}`;
    }
  });

  // 6. Certificaciones & Educación
  const certsContainer = document.getElementById('certs-container');
  if (certsContainer && PROFILE_DATA.educationAndCerts) {
    certsContainer.innerHTML = PROFILE_DATA.educationAndCerts.certifications.map(cert => `
      <div class="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-4">
        <div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
          <i data-lucide="award" class="w-6 h-6"></i>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <h4 class="text-sm md:text-base font-bold text-slate-900 dark:text-white">${cert.name}</h4>
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
              ${cert.badge}
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400">${cert.issuer} • ${cert.year}</p>
        </div>
      </div>
    `).join('');
  }

  const educationContainer = document.getElementById('education-container');
  if (educationContainer && PROFILE_DATA.educationAndCerts) {
    educationContainer.innerHTML = PROFILE_DATA.educationAndCerts.education.map(edu => `
      <div class="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-4">
        <div class="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 shrink-0">
          <i data-lucide="graduation-cap" class="w-6 h-6"></i>
        </div>
        <div class="space-y-1">
          <h4 class="text-sm md:text-base font-bold text-slate-900 dark:text-white">${edu.title}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">${edu.institution} • ${edu.location || ''} • ${edu.year}</p>
          ${edu.distinction ? `
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-300 text-xs font-bold mt-2">
              <i data-lucide="award" class="w-4 h-4 text-amber-500"></i>
              <span>${edu.distinction}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // 7. Idiomas
  const languagesContainer = document.getElementById('languages-container');
  if (languagesContainer && PROFILE_DATA.languages) {
    languagesContainer.innerHTML = PROFILE_DATA.languages.map(lang => `
      <div class="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <i data-lucide="languages" class="w-4 h-4"></i>
          </div>
          <div>
            <div class="text-sm font-bold text-slate-900 dark:text-white">${lang.name}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">${lang.badge}</div>
          </div>
        </div>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
          ${lang.level}
        </span>
      </div>
    `).join('');
  }

  // 8. Aptitudes
  const aptitudesContainer = document.getElementById('aptitudes-container');
  if (aptitudesContainer && PROFILE_DATA.aptitudes) {
    aptitudesContainer.innerHTML = PROFILE_DATA.aptitudes.map(apt => `
      <div class="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
        <div class="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
          <i data-lucide="${apt.icon || 'check'}" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900 dark:text-white mb-0.5">${apt.name}</div>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">${apt.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 9. Otros Intereses
  const interestsContainer = document.getElementById('interests-container');
  if (interestsContainer && PROFILE_DATA.interests) {
    interestsContainer.innerHTML = PROFILE_DATA.interests.map(item => `
      <div class="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <i data-lucide="${item.icon || 'heart'}" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900 dark:text-white">${item.name}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">${item.desc}</div>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   Configuración de Navegación & Mobile Menu
   ========================================================================== */
function setupNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Resaltado de enlace activo mediante IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-semibold');
          } else {
            link.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-semibold');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Modales Nativos (<dialog closedby="any">) con fallback moderno
   ========================================================================== */
function setupModals() {
  const dialog = document.getElementById('project-modal');
  if (!dialog) return;

  // Fallback para navegadores que aún no soportan closedby="any" nativamente
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isDialogContent) {
        dialog.close();
      }
    });
  }

  // Botón de cierre en el diálogo
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }
}

// Función global para abrir el modal con los datos del proyecto
window.openProjectModal = function(projectId) {
  const dialog = document.getElementById('project-modal');
  if (!dialog || typeof PROFILE_DATA === 'undefined') return;

  const project = PROFILE_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  // Llenar contenido del modal
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-tag').textContent = project.tag;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-impact').textContent = project.impact;
  document.getElementById('modal-problem').textContent = project.problem;
  document.getElementById('modal-action').textContent = project.action;

  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = project.techStack.map(t => `
    <span class="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
      ${t}
    </span>
  `).join('');

  const resultsContainer = document.getElementById('modal-results');
  resultsContainer.innerHTML = project.results.map(r => `
    <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
      <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
      <span>${r}</span>
    </li>
  `).join('');

  dialog.showModal();

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

/* ==========================================================================
   Formulario de Contacto & Enlaces
   ========================================================================== */
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Por favor completa todos los campos requeridos.', 'error');
      return;
    }

    // Preparar mensaje para cliente de correo local
    const subject = encodeURIComponent(`Contacto Profesional Portfolio: ${name}`);
    const body = encodeURIComponent(`Hola Andrés,\n\nMi nombre es ${name} (${email}).\n\nMensaje:\n${message}\n\nSaludos cordiales.`);
    
    // Abrir cliente de correo
    window.location.href = `mailto:${PROFILE_DATA.personal.email}?subject=${subject}&body=${body}`;

    showToast('¡Abriendo tu cliente de correo para enviar el mensaje!', 'success');
    contactForm.reset();
  });
}

function setupCopyEmail() {
  const copyBtns = document.querySelectorAll('.btn-copy-email');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = PROFILE_DATA.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('¡Correo electrónico copiado al portapapeles!', 'success');
      }).catch(() => {
        showToast(`Correo: ${email}`, 'info');
      });
    });
  });

  // Botón de imprimir / descargar PDF
  const printBtns = document.querySelectorAll('.btn-print-cv');
  printBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.print();
    });
  });
}

/* ==========================================================================
   Sistema Ligero de Notificaciones Toast
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' 
    ? 'bg-emerald-600 text-white' 
    : type === 'error' 
      ? 'bg-rose-600 text-white' 
      : 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900';

  toast.className = `toast px-4 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2 ${bgClass}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
