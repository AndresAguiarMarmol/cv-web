/**
 * Módulo de Internacionalización (i18n) Bilingüe (Español / Inglés)
 * Para Portfolio Web de Andrés Aguiar Mármol - Licenciado en Informática & Analista de Sistemas TI
 * 
 * Soporta ejecución dual: Navegador (window.I18nModule) y Node.js (CommonJS / node --test)
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Entorno Node.js / CommonJS
    module.exports = factory();
  } else {
    // Entorno Navegador (Global)
    root.I18nModule = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const CLAVE_IDIOMA = 'cv-web-lang';
  const IDIOMAS_SOPORTADOS = ['es', 'en'];

  /**
   * Catálogo de traducciones para interfaz (UI Chrome)
   */
  const DICCIONARIO = {
    es: {
      // Navegación
      nav_home: 'Inicio',
      nav_summary: 'Resumen 30s',
      nav_pillars: 'Especialidad',
      nav_projects: 'Proyectos',
      nav_projects_title: 'Casos de Éxito',
      nav_skills: 'Stack Técnico',
      nav_experience: 'Trayectoria',
      nav_certs: 'Formación',
      nav_contact: 'Contacto',
      nav_download_cv: 'Descargar CV',
      nav_download_pdf: 'Descargar CV en PDF',
      nav_tagline: 'Licenciado en Informática',

      // Hero & Perfil
      hero_status: 'Disponible para Jefatura de Soporte, Gerencia TI & Consultoría',
      hero_headline: 'Más de 40 años optimizando recursos de TI, liderando soporte corporativo y desarrollando software empresarial.',
      hero_summary: 'Licenciado en Informática (UCLA, 1° de su Promoción) con más de 40 años de trayectoria: 13 años liderando la División de Soporte Técnico en CVG ALCASA, 10 años en dirección de operaciones de TI comercial y desarrollo actual en Python 3.13, JavaScript moderno y Cloud APIs.',
      cta_projects: 'Ver Casos de Éxito',
      cta_whatsapp: 'WhatsApp Directo',
      cta_copy_email: 'Copiar Correo',
      cta_email_copied: '¡Correo copiado!',
      cta_download_cv: 'Descargar Curriculum en PDF',
      cta_view_linkedin: 'Ver Perfil en LinkedIn',
      cta_profile_badge: 'Perfil Oficial',
      profile_label_grad: 'Graduación:',
      profile_val_grad: '1° en Promoción UCLA (3.66/4)',
      profile_label_spec: 'Especialidad:',
      profile_val_spec: 'Jefatura Soporte, Gerencia TI & Cloud',
      profile_label_phone: 'Teléfono:',

      // Selector de Rol Adaptativo (cv-andres-aguiar)
      target_role_label: 'Enfoque según Cargo Objetivo:',
      target_role_soporte: 'Jefatura de Soporte',
      target_role_gerencia: 'Gerencia TI',
      target_role_developer: 'Desarrollador Senior',
      btn_export_json: 'Exportar JSON para ATS / Apps',
      modal_json_title: 'Esquema JSON Adaptativo (cv-andres-aguiar)',
      modal_json_desc: 'Datos estructurados listos para alimentar portales de postulación, parseadores de CV y sistemas ATS:',
      modal_json_copy: 'Copiar JSON',
      toast_json_copied: '¡Esquema JSON copiado al portapapeles!',

      // Resumen 30s & Ecosistema
      brand_tech_title: 'Ecosistema Tecnológico Principal:',

      // Pilares de Especialización
      tag_pillars: 'Áreas de dominio',
      pillars_title: 'Capacidades Centrales en TI',
      pillars_subtitle: 'Alineación precisa entre visión estratégica y ejecución técnica para garantizar proyectos sin desvíos y con alta adopción de usuario.',

      // Buscador Global en Tiempo Real
      search_title: 'Explorar Portfolio en Tiempo Real',
      search_subtitle: 'Filtra habilidades, proyectos STAR y experiencia profesional al instante',
      search_placeholder: 'Buscar por tecnología, empresa, metodología o rol (ej: Python, SQL, IA, Saint, Alcasa, Soporte)...',
      search_aria_label: 'Buscar en todo el portfolio',
      search_clear_title: 'Limpiar búsqueda',
      search_suggestions_label: 'Sugerencias rápidas:',
      search_counter_single: '1 coincidencia encontrada',
      search_counter_multiple: 'coincidencias encontradas',
      search_empty_title_prefix: 'No se encontraron coincidencias para',
      search_empty_desc: 'Intenta verificar la ortografía o explorar mediante las sugerencias de tecnologías y áreas más consultadas:',
      search_empty_reset: 'Restablecer búsqueda y ver todo',

      // Proyectos & Casos de Estudio
      tag_projects: 'Casos de estudio',
      projects_title: 'Proyectos de Arquitectura & Software',
      projects_subtitle: 'Cada caso aborda el desafío bajo el enfoque STAR: Situación, Tarea técnica, Acción de análisis y Resultados medibles.',
      projects_hint: '💡 Haz clic en cualquier proyecto para ver el análisis completo',
      filter_area_label: 'Filtrar por Área:',
      filter_all: 'Todos',
      filter_core: 'Sistemas Core',
      filter_ai: 'IA & Moderno',
      filter_dev: 'Desarrollo',
      filter_leadership: 'Soporte & Operaciones',
      filter_web: 'Web & Cloud',
      filter_gestion: 'Gestión & ERP',
      filter_sports: 'Software Deportivo',
      filter_crypto: 'Cripto & Infraestructura',
      filter_erp: 'Análisis & ERP',
      projects_empty: 'No hay proyectos que coincidan con los criterios actuales.',
      project_read_more: 'Ver caso completo',

      // Habilidades Técnicas
      tag_skills: 'Herramientas y tecnologías',
      skills_title: 'Stack de Análisis & Gestión TI',
      skills_subtitle: 'Dominio de frameworks de trabajo, lenguajes de consulta, herramientas de modelado y protocolos de integración.',

      // Trayectoria Profesional
      tag_experience: 'Trayectoria profesional',
      experience_title: 'Evolución & Liderazgo en TI',
      experience_subtitle: 'Evolución de responsabilidades, proyectos gestionados y resultados en entornos de TI y consultoría.',

      // Certificaciones & Educación
      tag_certs: 'Validación continua',
      certs_title: 'Certificaciones & Educación',
      certs_subtitle: 'Cursos recientes, certificaciones oficiales y especializaciones en Inteligencia Artificial, desarrollo web y programación moderna que avalan una actualización técnica continua.',
      certs_courses_title: 'Cursos Realizados & Certificaciones',
      certs_academic_title: 'Formación Académica Universitaria',
      certs_view_btn: 'Ver Certificado Oficial (PDF)',
      certs_verify_btn: 'Validar Credencial',

      // Aptitudes & Perfil Integral
      tag_profile: 'Perfil integral',
      aptitudes_title: 'Aptitudes, Idiomas & Disciplina',
      aptitudes_subtitle: 'Competencias blandas, dominio de idiomas y disciplina personal que complementan más de cuatro décadas de experiencia profesional.',
      aptitudes_soft_title: 'Aptitudes Personales',
      aptitudes_lang_title: 'Idiomas',
      aptitudes_interest_title: 'Otros Intereses',

      // Contacto
      contact_channels_tag: 'Canales Directos',
      contact_title: '¿Conversamos sobre tu próximo proyecto TI?',
      contact_desc: 'Disponible para proyectos de análisis de sistemas, consultoría de soporte técnico, integraciones con Python / SQL y optimización de recursos tecnológicos.',
      contact_phone_label: 'Teléfono / WhatsApp',
      contact_email_label: 'Correo Electrónico',
      contact_linkedin_label: 'Red Profesional',
      contact_location_label: 'Ubicación Actual',
      contact_copy_btn: 'Copiar email con 1 clic',
      contact_whatsapp_btn: 'Escribir por WhatsApp',
      contact_form_title: 'Enviar Mensaje Rápido',
      contact_form_subtitle: 'Te responderé a la brevedad dentro de las próximas 24 horas hábiles.',
      contact_form_name: 'Nombre Completo / Empresa *',
      contact_form_name_placeholder: 'Ej: Lic. Martín Gómez / Grupo Consultor',
      contact_form_email: 'Correo Electrónico de Contacto *',
      contact_form_email_placeholder: 'nombre@empresa.com',
      contact_form_message: 'Mensaje o Propuesta *',
      contact_form_message_placeholder: 'Hola Andrés, nos gustaría coordinar una entrevista técnica o conversar sobre una vacante de Jefatura de Soporte o Gerencia TI...',
      contact_form_submit: 'Enviar Mensaje',

      // Modal STAR
      modal_impact_title: 'Métrica de Impacto Comprobada',
      modal_problem_title: 'El Desafío / Situación Inicial',
      modal_action_title: 'Análisis, Arquitectura & Acciones Ejecutadas',
      modal_tech_title: 'Tecnologías & Estándares de Integración',
      modal_results_title: 'Entregables y Resultados de Negocio',
      modal_close_btn: 'Cerrar Ventana',

      // Pie de Página & Botones Flotantes
      footer_role: 'Curriculum & Portfolio de Licenciado en Informática / Analista TI',
      footer_print: 'Imprimir / Guardar en PDF',
      footer_back_to_top: 'Volver arriba ↑',
      floating_whatsapp: 'WhatsApp',
      floating_call: 'Llamar',
      floating_copy_email: 'Copiar Correo',
      floating_download_cv: 'Descargar CV',
      floating_top: 'Arriba',

      // Toasts & Notificaciones
      toast_lang_switched_es: 'Idioma cambiado a Español',
      toast_lang_switched_en: 'Language switched to English',
      toast_dark_mode: 'Modo oscuro activado',
      toast_light_mode: 'Modo claro activado',
      toast_email_copied: '¡Correo electrónico copiado al portapapeles!',
      toast_form_required: 'Por favor completa todos los campos requeridos.',
      toast_form_opening: '¡Abriendo tu cliente de correo para enviar el mensaje!',

      // Selector de idioma
      lang_toggle_label: 'Cambiar idioma (Español / English)',
      lang_btn_text: 'EN'
    },

    en: {
      // Navigation
      nav_home: 'Home',
      nav_summary: '30s Summary',
      nav_pillars: 'Specialty',
      nav_projects: 'Projects',
      nav_projects_title: 'Case Studies',
      nav_skills: 'Tech Stack',
      nav_experience: 'Experience',
      nav_certs: 'Education',
      nav_contact: 'Contact',
      nav_download_cv: 'Download CV',
      nav_download_pdf: 'Download Resume (PDF)',
      nav_tagline: 'Computer Science B.S.',

      // Hero & Profile
      hero_status: 'Available for Support Mgmt, IT Direction & Consulting',
      hero_headline: 'Over 40 years optimizing IT resources, leading enterprise support, and developing business software.',
      hero_summary: 'Computer Science graduate (UCLA, 1st in Class) with over 40 years of track record: 13 years leading the Technical Support Division at CVG ALCASA, 10 years in commercial IT operations, and active development in Python 3.13, modern JavaScript, and Cloud APIs.',
      cta_projects: 'View Case Studies',
      cta_whatsapp: 'Direct WhatsApp',
      cta_copy_email: 'Copy Email',
      cta_email_copied: 'Email copied!',
      cta_download_cv: 'Download Resume in PDF',
      cta_view_linkedin: 'View LinkedIn Profile',
      cta_profile_badge: 'Official Profile',
      profile_label_grad: 'Graduation:',
      profile_val_grad: '1st in UCLA Class (3.66/4)',
      profile_label_spec: 'Specialty:',
      profile_val_spec: 'Support Mgmt, IT Direction & Cloud',
      profile_label_phone: 'Phone:',

      // Adaptive Target Role Selector (cv-andres-aguiar)
      target_role_label: 'Focus by Target Role:',
      target_role_soporte: 'Support Management',
      target_role_gerencia: 'IT Management',
      target_role_developer: 'Senior Developer',
      btn_export_json: 'Export JSON for ATS / Apps',
      modal_json_title: 'Adaptive JSON Schema (cv-andres-aguiar)',
      modal_json_desc: 'Structured data ready to feed job application portals, resume parsers, and ATS engines:',
      modal_json_copy: 'Copy JSON',
      toast_json_copied: 'JSON schema copied to clipboard!',

      // 30s Summary & Brand Tech
      brand_tech_title: 'Core Tech Ecosystem:',

      // Pillars
      tag_pillars: 'Domain areas',
      pillars_title: 'Core IT Capabilities',
      pillars_subtitle: 'Precise alignment between strategic vision and technical execution to ensure projects without deviations and with high user adoption.',

      // Real-Time Search
      search_title: 'Explore Portfolio in Real Time',
      search_subtitle: 'Filter skills, STAR projects, and professional experience instantly',
      search_placeholder: 'Search by technology, company, methodology, or role (e.g., Python, SQL, AI, Saint, Alcasa, Support)...',
      search_aria_label: 'Search across the whole portfolio',
      search_clear_title: 'Clear search',
      search_suggestions_label: 'Quick suggestions:',
      search_counter_single: '1 match found',
      search_counter_multiple: 'matches found',
      search_empty_title_prefix: 'No matches found for',
      search_empty_desc: 'Try checking your spelling or explore through the most consulted technologies and areas:',
      search_empty_reset: 'Reset search and view all',

      // Projects
      tag_projects: 'Case studies',
      projects_title: 'Architecture & Software Projects',
      projects_subtitle: 'Each case approaches the challenge with STAR methodology: Situation, Task, Action, and measurable Results.',
      projects_hint: '💡 Click on any project to view the full analysis',
      filter_area_label: 'Filter by Area:',
      filter_all: 'All',
      filter_core: 'Core Systems',
      filter_ai: 'AI & Modern',
      filter_dev: 'Development',
      filter_leadership: 'Support & Operations',
      filter_web: 'Web & Cloud',
      filter_gestion: 'Business Mgmt & ERP',
      filter_sports: 'Sports Software',
      filter_crypto: 'Crypto & Infrastructure',
      filter_erp: 'Analysis & ERP',
      projects_empty: 'No projects match current criteria.',
      project_read_more: 'View full case',

      // Technical Skills
      tag_skills: 'Tools & technologies',
      skills_title: 'IT Analysis & Management Stack',
      skills_subtitle: 'Mastery of work frameworks, query languages, modeling tools, and integration protocols.',

      // Experience
      tag_experience: 'Professional career',
      experience_title: 'Evolution & Leadership in IT',
      experience_subtitle: 'Evolution of responsibilities, managed projects, and measurable results in enterprise IT and consulting.',

      // Certifications & Education
      tag_certs: 'Continuous validation',
      certs_title: 'Certifications & Education',
      certs_subtitle: 'Recent courses, official certifications, and specializations in Artificial Intelligence, web development, and modern programming.',
      certs_courses_title: 'Completed Courses & Certifications',
      certs_academic_title: 'University Academic Education',
      certs_view_btn: 'View Official Certificate (PDF)',
      certs_verify_btn: 'Verify Credential',

      // Aptitudes & Integral Profile
      tag_profile: 'Integral profile',
      aptitudes_title: 'Aptitudes, Languages & Discipline',
      aptitudes_subtitle: 'Soft skills, language proficiency, and personal discipline complementing over four decades of professional experience.',
      aptitudes_soft_title: 'Personal Aptitudes',
      aptitudes_lang_title: 'Languages',
      aptitudes_interest_title: 'Other Interests',

      // Contact
      contact_channels_tag: 'Direct Channels',
      contact_title: 'Shall we discuss your next IT project?',
      contact_desc: 'Available for systems analysis projects, technical support consulting, Python / SQL integrations, and technological resources optimization.',
      contact_phone_label: 'Phone / WhatsApp',
      contact_email_label: 'Email Address',
      contact_linkedin_label: 'Professional Network',
      contact_location_label: 'Current Location',
      contact_copy_btn: 'Copy email with 1 click',
      contact_whatsapp_btn: 'Message on WhatsApp',
      contact_form_title: 'Send Quick Message',
      contact_form_subtitle: 'I will reply promptly within the next 24 business hours.',
      contact_form_name: 'Full Name / Company *',
      contact_form_name_placeholder: 'e.g., Martin Gomez / Consulting Group',
      contact_form_email: 'Contact Email Address *',
      contact_form_email_placeholder: 'name@company.com',
      contact_form_message: 'Message or Proposal *',
      contact_form_message_placeholder: 'Hi Andres, we would like to schedule a technical interview or discuss a Support Management or IT Leadership opportunity...',
      contact_form_submit: 'Send Message',

      // STAR Modal
      modal_impact_title: 'Proven Impact Metric',
      modal_problem_title: 'The Challenge / Initial Situation',
      modal_action_title: 'Analysis, Architecture & Actions Taken',
      modal_tech_title: 'Technologies & Integration Standards',
      modal_results_title: 'Deliverables and Business Results',
      modal_close_btn: 'Close Window',

      // Footer & Floating
      footer_role: 'Computer Science Graduate / IT Analyst Portfolio & CV',
      footer_print: 'Print / Save as PDF',
      footer_back_to_top: 'Back to top ↑',
      floating_whatsapp: 'WhatsApp',
      floating_call: 'Call',
      floating_copy_email: 'Copy Email',
      floating_download_cv: 'Download CV',
      floating_top: 'Top',

      // Toasts
      toast_lang_switched_es: 'Idioma cambiado a Español',
      toast_lang_switched_en: 'Language switched to English',
      toast_dark_mode: 'Dark mode enabled',
      toast_light_mode: 'Light mode enabled',
      toast_email_copied: 'Email copied to clipboard!',
      toast_form_required: 'Please fill in all required fields.',
      toast_form_opening: 'Opening your email client to send message!',

      // Language Switcher
      lang_toggle_label: 'Switch language (Spanish / English)',
      lang_btn_text: 'ES'
    }
  };

  /**
   * Valida si un código de idioma está soportado ('es' o 'en')
   * @param {*} lang 
   * @returns {boolean}
   */
  function esIdiomaValido(lang) {
    return typeof lang === 'string' && IDIOMAS_SOPORTADOS.includes(lang.toLowerCase().trim());
  }

  /**
   * Resuelve el idioma inicial según persistencia previa y navegador
   * @param {string|null} guardado 
   * @param {string|null} navLang 
   * @returns {'es'|'en'}
   */
  function resolverIdiomaInicial(guardado, navLang) {
    if (esIdiomaValido(guardado)) {
      return guardado.toLowerCase().trim();
    }
    if (navLang && typeof navLang === 'string' && navLang.toLowerCase().trim().startsWith('en')) {
      return 'en';
    }
    return 'es';
  }

  /**
   * Obtiene la traducción para una clave dada con fallback a español
   * @param {string} clave 
   * @param {string} lang 
   * @returns {string}
   */
  function obtenerTraduccion(clave, lang) {
    const targetLang = esIdiomaValido(lang) ? lang.toLowerCase().trim() : 'es';
    const dict = DICCIONARIO[targetLang];
    if (dict && typeof dict[clave] === 'string') {
      return dict[clave];
    }
    // Fallback a español si no existe en el idioma pedido
    if (targetLang !== 'es' && DICCIONARIO.es && typeof DICCIONARIO.es[clave] === 'string') {
      return DICCIONARIO.es[clave];
    }
    return '';
  }

  /**
   * Devuelve el catálogo completo de un idioma
   * @param {string} lang 
   * @returns {Object}
   */
  function obtenerDiccionario(lang) {
    const targetLang = esIdiomaValido(lang) ? lang.toLowerCase().trim() : 'es';
    return DICCIONARIO[targetLang] || DICCIONARIO.es;
  }

  return {
    CLAVE_IDIOMA,
    IDIOMAS_SOPORTADOS,
    esIdiomaValido,
    resolverIdiomaInicial,
    obtenerTraduccion,
    obtenerDiccionario
  };
});
