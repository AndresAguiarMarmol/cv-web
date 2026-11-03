/**
 * Datos del Perfil Profesional - Andrés Aguiar Mármol
 * Licenciado en Informática & Analista de Sistemas TI (+40 años de trayectoria)
 * Centralizado y estructurado según la skill cv-andres-aguiar
 */
const PROFILE_DATA = {
  personal: {
    name: "Andrés Aguiar Mármol",
    title: "Licenciado en Informática | Analista de Sistemas TI",
    subtitle: "Jefatura de Soporte Técnico • Gerencia de TI & Infraestructura • Desarrollador / Analista Senior",
    summary: "Licenciado en Informática (UCLA, 1° de su Promoción, Promedio: 3.66/4.00) con más de 40 años de sólida trayectoria combinando 13 años como Jefe de División de Soporte Técnico en CVG ALCASA (Ficha: 10.752), 10 años en dirección de operaciones de TI comercial y desarrollo contemporáneo de software empresarial y aplicaciones web offline-first (Ventas NovaPrint ERP, Bóveda Digital Zero-Knowledge, Gimnasio Pro, Dojo Karate La Reina, Momentos Cookie, SAINT ERP multimoneda en Python/SQL y Cloud APIs).",
    location: "Santiago, Chile",
    status: "Disponible para Jefatura de Soporte, Gerencia TI & Consultoría",
    email: "andres.aguiar.marmol@gmail.com",
    phone: "+56 9 3339 5447",
    linkedin: "https://www.linkedin.com/in/andres-aguiar-b4824395",
    github: "https://github.com/AndresAguiarMarmol",
    cvPdfUrl: "#",
    metrics: [
      { label: "Años de Trayectoria TI", value: "+40" },
      { label: "Jefatura Soporte ALCASA", value: "13 Años" },
      { label: "Graduación UCLA", value: "1° Lugar" },
      { label: "Índice Académico", value: "3.66/4" }
    ],
    // Enfoques profesionales adaptativos según la vacante (cv-andres-aguiar)
    targetProfiles: {
      soporte: {
        id: "soporte",
        roleName: "Jefatura de Soporte Técnico (Prioridad 1)",
        shortTitle: "Jefe de Soporte Técnico & Mesa de Ayuda",
        badge: "Enfoque Principal: Jefatura de Soporte",
        headline: "13 años liderando la Jefatura de Soporte Técnico y la continuidad operativa en planta industrial de alta demanda.",
        summary: "Especialista en dirección estratégica de soporte, administración de mesa de ayuda bajo SLAs/ITIL, mantenimiento preventivo de infraestructura de servidores, redes LAN/WLAN, parque de estaciones de trabajo y liderazgo de equipos técnicos multidisciplinarios (CVG ALCASA, 2012–2025).",
        highlightPillars: [
          "13 años continuos como Jefe de División de Soporte Técnico en CVG ALCASA (Ficha 10.752).",
          "Garantía de alta disponibilidad en servidores, redes y parque computacional bajo SLAs estrictos.",
          "Reducción de tiempos de inactividad operativa y gestión integral de inventario tecnológico y licencias."
        ]
      },
      gerencia: {
        id: "gerencia",
        roleName: "Gerencia de TI / Infraestructura (Prioridad 2)",
        shortTitle: "Gerente de TI & Dirección de Infraestructura",
        badge: "Enfoque: Gerencia & Dirección TI",
        headline: "Más de cuatro décadas combinando gobernanza tecnológica, gestión presupuestaria y dirección de operaciones.",
        summary: "Visión integral del ciclo de vida tecnológico que fusiona 40 años en desarrollo y gobernanza de sistemas de misión empresarial con una década completa como Cofundador y VP de Operaciones. Dominio de presupuestos de hardware/software, negociación con proveedores, gestión de inventarios y alineación estratégica de TI.",
        highlightPillars: [
          "40 años de trayectoria combinando desarrollo de software de negocio con gestión de infraestructura.",
          "Gobernanza tecnológica, gestión de contratos, proveedores, seguridad operacional y continuidad del negocio.",
          "Supervisión financiera, presupuestos de TI y software empresarial en producción (ERP NovaPrint, Dojo Karate La Reina, Momentos Cookie)."
        ]
      },
      developer: {
        id: "developer",
        roleName: "Desarrollador / Analista Senior (Prioridad 3)",
        shortTitle: "Analista de Sistemas / Desarrollador Senior",
        badge: "Enfoque: Ingeniería de Software",
        headline: "Sólida formación formal en Ciencias de la Computación y desarrollo activo en PWAs, Python, Web Crypto y Cloud.",
        summary: "Licenciado en Informática (UCLA, 1° de su Promoción). Capacidad demostrada para analizar y programar soluciones de software completas y vigentes: Bóveda Digital (Zero-Knowledge AES-256-GCM), ERP Ventas NovaPrint, Gimnasio Pro, Dojo de Karate La Reina, Momentos Cookie, módulos multimoneda en Python/SQL y Google Cloud APIs.",
        highlightPillars: [
          "Licenciado en Informática UCLA (1° Lugar de la Promoción, Promedio: 3.66/4.00).",
          "Desarrollo contemporáneo con Web Crypto API (AES-256), IndexedDB, LocalStorage resiliente, Python 3.13 y Cloud APIs.",
          "Sistemas completos en producción: Ventas NovaPrint, Bóveda Digital, Gimnasio Pro, Dojo Karate La Reina y SAINT ERP multimoneda."
        ]
      }
    }
  },

  // 1. Resumen Ejecutivo en 30 Segundos (Elevator Pitch)
  executivePitch: {
    title: "Resumen Ejecutivo en 30 Segundos",
    badge: "Propuesta de Valor",
    subtitle: "Tres razones estratégicas por las cuales mi perfil aporta solidez directiva, versatilidad y resultados inmediatos a su organización:",
    points: [
      {
        id: "support-leadership",
        badge: "Jefatura & SLAs",
        icon: "shield-check",
        title: "13 Años en Jefatura de Soporte Técnico (CVG ALCASA)",
        description: "Dirección estratégica de mesa de ayuda y soporte técnico integral corporativo e industrial (2012–2025, Ficha 10.752). Mantenimiento preventivo de infraestructura de servidores, redes LAN/WLAN, parque de estaciones de trabajo, gestión de inventario y liderazgo de equipos técnicos multidisciplinarios de alto rendimiento."
      },
      {
        id: "governance-operations",
        badge: "Gobernanza TI & Negocio",
        icon: "briefcase",
        title: "40 Años en Operaciones TI & 10 Años Dirección Comercial",
        description: "Visión integral del ciclo de vida tecnológico combinando gobernanza de sistemas de misión empresarial con una década como Cofundador y VP de Operaciones en Mini Market Don Andrés. Dominio de presupuestos de hardware/software, control de licencias, contratos con proveedores y continuidad de negocio."
      },
      {
        id: "software-engineering",
        badge: "Ingeniería & Producción",
        icon: "award",
        title: "1° en Promoción UCLA & Sistemas en Producción Activa",
        description: "Licenciado en Informática graduado con Honores (Promedio 3.66/4.00, 1° Lugar). Soluciones creadas y operando activamente hoy: ERP Ventas NovaPrint con IVA 19%, Bóveda Digital (AES-256-GCM), Gimnasio Pro, Dojo de Karate La Reina, Momentos Cookie, módulo multimoneda SAINT ERP en Python/SQL y Google Drive API v3."
      }
    ]
  },

  // 2. Insignias Tecnológicas con Identidad de Marca
  brandTechnologies: [
    { name: "Soporte Técnico & ITIL", category: "Jefatura & Mesa de Ayuda", color: "#2563EB", bg: "rgba(37, 99, 235, 0.12)", icon: "headphones" },
    { name: "Infraestructura & Redes", category: "Servidores & LAN/WLAN", color: "#0EA5E9", bg: "rgba(14, 165, 233, 0.12)", icon: "network" },
    { name: "Python 3.13", category: "Backend, Scripts & APIs", color: "#387EB8", bg: "rgba(56, 126, 184, 0.12)", icon: "code-2" },
    { name: "Web Crypto API (AES-256)", category: "Ciberseguridad Zero-Knowledge", color: "#6366F1", bg: "rgba(99, 102, 241, 0.14)", icon: "shield-check" },
    { name: "ERP Textil & Bodega", category: "Gestión Comercial & IVA 19%", color: "#EC4899", bg: "rgba(236, 72, 153, 0.14)", icon: "layers" },
    { name: "Google Cloud & APIs", category: "OAuth 2.0 & Drive v3", color: "#4285F4", bg: "rgba(66, 133, 244, 0.14)", icon: "cloud" },
    { name: "SQL Server", category: "Bases de Datos Relacionales", color: "#CC292B", bg: "rgba(204, 41, 43, 0.12)", icon: "database" },
    { name: "JavaScript (ES6+) & PWAs", category: "Frontend & Offline-First", color: "#EAB308", bg: "rgba(234, 179, 8, 0.15)", icon: "file-code" },
    { name: "HTML5 & CSS3 Moderno", category: "Estándares Web", color: "#E44D26", bg: "rgba(228, 77, 38, 0.12)", icon: "layout" },
    { name: "PowerShell & Bash", category: "Automatización & CLI", color: "#1E293B", bg: "rgba(30, 41, 59, 0.14)", icon: "terminal" },
    { name: "SAINT ERP", category: "Módulos Administrativos", color: "#10B981", bg: "rgba(16, 185, 129, 0.12)", icon: "layers" },
    { name: "Hardware & Rigs/ASICs", category: "Diagnóstico & Cripto", color: "#F7931A", bg: "rgba(247, 147, 26, 0.14)", icon: "cpu" }
  ],

  // 3. Categorías de Filtro Interactivo de Proyectos
  filterCategories: [
    { id: "all", label: "Todos los Casos (14)", icon: "grid" },
    { id: "gestion", label: "Gestión & ERP (4)", icon: "layers" },
    { id: "sports", label: "Software Deportivo (2)", icon: "activity" },
    { id: "web", label: "Web, Cloud & Cripto (4)", icon: "globe" },
    { id: "leadership", label: "Soporte & Operaciones TI (3)", icon: "users" },
    { id: "dev", label: "Python & Sistemas Core (2)", icon: "code" }
  ],

  languages: [
    { name: "Español", level: "Nativo", badge: "Idioma Materno" },
    { name: "Inglés Técnico", level: "Intermedio", badge: "Documentación, Sistemas & APIs" }
  ],

  aptitudes: [
    { name: "Resolución Pragmática de Incidencias", icon: "shield-alert", desc: "Diagnóstico veloz y solución efectiva de incidencias críticas en operaciones de alta exigencia." },
    { name: "Liderazgo de Equipos Multidisciplinarios", icon: "users-round", desc: "Coordinación empática y estructurada de técnicos, analistas, desarrolladores y operadores." },
    { name: "Arquitectura de Software & Ciberseguridad", icon: "shield-check", desc: "Diseño riguroso de modelos Zero-Knowledge, cifrado en cliente y flujos transaccionales seguros." },
    { name: "Comunicación Transversal", icon: "heart-handshake", desc: "Puente fluido entre la alta gerencia de negocio y los equipos técnicos ejecutores." },
    { name: "Orientación a la Eficiencia y Servicio", icon: "sparkles", desc: "Foco permanente en la satisfacción del usuario, cumplimiento de SLAs y optimización de costos." },
    { name: "Capacidad Analítica & Rigor Formal", icon: "brain", desc: "Modelado estructurado de requerimientos complejos respaldado por sólida formación universitaria." }
  ],

  interests: [
    { name: "Ciclismo de Montaña", icon: "bike", desc: "Pasión por el deporte outdoor, superación, constancia y disciplina." },
    { name: "Crossfit", icon: "dumbbell", desc: "Entrenamiento de fuerza funcional y alta resistencia personal." },
    { name: "Lectura Técnica & Nuevas Tecnologías", icon: "book-open", desc: "Actualización continua en IA, Cloud Computing y arquitecturas de software." },
    { name: "Música", icon: "music", desc: "Apreciación artística, concentración y armonía personal." }
  ],

  corePillars: [
    {
      id: "leadership-it",
      icon: "headphones",
      title: "Jefatura de Soporte Técnico & Help Desk",
      description: "13 años como Jefe de División de Soporte Técnico en planta industrial de alta demanda (CVG ALCASA, 2012–2025). Administración de mesa de ayuda bajo SLAs/ITIL, soporte a usuarios en terreno, inventario tecnológico, compras de equipamiento y dirección de equipos técnicos multidisciplinarios."
    },
    {
      id: "governance-it",
      icon: "briefcase",
      title: "Gobernanza TI & Sistemas de Gestión ERP",
      description: "Visión integral del ciclo de vida tecnológico: diseño y despliegue de ERPs y sistemas comerciales (Ventas NovaPrint, Dojo Karate La Reina, Momentos Cookie, SAINT ERP), control presupuestario, compras tecnológicas y continuidad operativa de negocio."
    },
    {
      id: "cloud-software-dev",
      icon: "code",
      title: "Desarrollo de Software, Web Crypto & Cloud APIs",
      description: "Programación en Python 3.13 y JavaScript moderno; arquitectura de ciberseguridad Zero-Knowledge (Bóveda Digital con AES-256-GCM y PBKDF2); integración de servicios en la nube (Google Cloud Console, OAuth 2.0, Google Drive API v3 y motores OCR); desarrollo de PWAs offline."
    },
    {
      id: "sports-software",
      icon: "activity",
      title: "Software Deportivo & Biomecánica de Rendimiento",
      description: "Desarrollo de soluciones especializadas para atletas y gimnasios (Gimnasio Pro, Halterofilia Pro): bitácoras de sobrecarga progresiva, cálculo de tonelaje, catálogo de 12 movimientos biomecánicos, conversión dinámica de unidades y licenciamiento criptográfico offline."
    }
  ],

  projects: [
    // 1. Ventas NovaPrint
    {
      id: "proj-novaprint-erp",
      filterCategory: "gestion",
      title: "Ventas NovaPrint: ERP Textil, Cotizador Inteligente & Control de Producción",
      category: "ERP Textil & Producción",
      tag: "Flujo Integral de Taller",
      visualBadge: "Cotizador DTF/Sublimación ➔ IVA 19% Chile ➔ Enlace Prenda/Talla ➔ Ticket Térmico",
      impact: "Control completo del ciclo textil: Cotización con escala de volumen, inventario, compras a proveedores y taller",
      summary: "Sistema ERP textil y cotizador técnico diseñado para talleres de estampados y confección, que valida compatibilidad de telas/técnicas (DTF, Serigrafía, Sublimación, Vinilo), calcula IVA chileno (19% D.L. 825) y delivery, enlaza pedidos con compras de bodega y emite tickets térmicos de producción.",
      problem: "Pérdidas económicas por estampados defectuosos (sublimación sobre algodón o prendas oscuras), cotizaciones lentas de tirajes con recargos por talla especial, descontrol de existencias y falta de enlace entre pedidos de clientes y compras a proveedores textiles.",
      action: "Desarrollé una suite ERP integral con cotizador automatizado que valida la compatibilidad técnica de estampados; programé la escala automática de descuentos por volumen (hasta 20%); calculé el IVA 19% chileno y costos de delivery; diseñé el módulo de enlace Prenda-Color-Talla con auto-creación en inventario para compras de faltantes; e implementé tickets de producción para impresoras térmicas con reglas @media print.",
      techStack: ["JavaScript Vanilla Modular", "ERP Textil & Bodega", "Legislación IVA Chile (D.L. 825)", "Cotizador Técnico DTF/Sublimación", "Impresión Tickets Térmicos", "PWA Offline"],
      results: [
        "Eliminación total de mermas por incompatibilidad técnica entre telas y métodos de estampado.",
        "Sincronización automatizada entre pedidos de clientes, detección de faltantes en bodega y compras a proveedores.",
        "Emisión de tickets térmicos listos para operarios de taller y comprobantes de venta detallados para clientes."
      ]
    },
    // 2. Bóveda Digital
    {
      id: "proj-boveda-digital",
      filterCategory: "web",
      title: "Bóveda Digital: Wallet Segura de Documentos con Cifrado AES-256-GCM",
      category: "Ciberseguridad & PWA",
      tag: "Arquitectura Zero-Knowledge",
      visualBadge: "PIN Maestro ➔ PBKDF2 (100k) ➔ AES-GCM 256-bit ➔ IndexedDB Offline",
      impact: "Almacenamiento seguro 100% offline con estándar criptográfico militar y cero exposición de datos",
      summary: "Aplicación web securizada diseñada para almacenar, organizar y consultar documentos sensibles (cédulas, pasaportes, licencias, tarjetas y pólizas) con acceso offline, derivación de claves PBKDF2 y cifrado simétrico AES-256-GCM en el cliente.",
      problem: "Los usuarios requieren portar documentos personales y de identidad en sus dispositivos sin depender de conectividad constante y con la certeza absoluta de que ningún servidor o tercero pueda acceder a los datos sin su PIN maestro.",
      action: "Implementé una arquitectura Zero-Knowledge utilizando la Web Crypto API nativa; diseñé la derivación de clave criptográfica con PBKDF2 (100.000 iteraciones, HMAC-SHA256) a partir del PIN maestro; estructuré la persistencia local en IndexedDB; y construí módulos de escáner simulado con OCR, copia veloz de credenciales y enlaces temporales efímeros.",
      techStack: ["Web Crypto API", "AES-256-GCM", "PBKDF2 (HMAC-SHA256)", "IndexedDB", "JavaScript ES6+", "Arquitectura Zero-Knowledge", "PWA Offline"],
      results: [
        "Cifrado local de extremo a extremo sin transmisión de claves maestras ni documentos descifrados.",
        "Acceso inmediato 100% offline a documentos estructurados con soporte de categorías y alertas de vencimiento.",
        "Arquitectura compatible con autenticación JWT y control de planes de suscripción (Básico y PRO)."
      ]
    },
    // 3. Dojo Karate La Reina
    {
      id: "proj-karate-dojo",
      filterCategory: "gestion",
      title: "Administración del Dojo de Karate — Municipalidad de La Reina (Santiago)",
      category: "Gestión Financiera & Tesorería",
      tag: "Cobranza Automatizada",
      visualBadge: "Semáforo de Pagos ➔ Fondo Reserva (10%) ➔ Cobranza Día 3 (01:00 AM) ➔ Becas La Reina",
      impact: "Automatización de cobranzas mensuales programadas, control de morosidad y segregación de fondos bancarios",
      summary: "SPA offline-first para la gestión de tesorería, control de mensualidades y administración de fondos del Dojo de Karate de la Municipalidad de La Reina en Santiago de Chile, con cobranza automática programada y arrastre multianual de deudas.",
      problem: "El dojo requería ordenar su administración contable, controlar alumnos becados vs. regulares, segregar automáticamente un 10% adicional a la cuenta de Fondo de Reserva (Banco Santander) y automatizar el aviso de cobranza mensual sin servidores externos.",
      action: "Diseñé una SPA autocontenida con conciliación de cuentas (Banco Estado, Banco Santander y Caja Chica); implementé un semáforo visual de estado de pago (Al día, Por vencer, Moroso); programé un motor reactivo de cobranza programada (Día 3 a la 01:00 AM); e integré la emisión de comprobantes personalizados vía WhatsApp y plantillas de correo mailto: con desglose de cuota tatami y fondo de reserva.",
      techStack: ["HTML5 / Tailwind CSS", "JavaScript Vanilla SPA", "Automatización Cron / Agente", "Conciliación Multicuenta", "Gestión de Tesorería", "LocalStorage v3"],
      results: [
        "Cero discrepancias en tesorería con separación estricta entre cuenta corriente operativa y fondo de reserva.",
        "Automatización del despacho mensual de cobranzas con plantillas personalizadas y control de becas municipales.",
        "Persistencia y arrastre multianual de deudas impagas con desglose histórico por mes y atleta."
      ]
    },
    // 4. Gimnasio Pro
    {
      id: "proj-gimnasio-pro",
      filterCategory: "sports",
      title: "Gimnasio Pro: Sistema de Monitoreo Biomecánico & Fuerza para Atletas y Boxes",
      category: "Software Deportivo & Biomecánica",
      tag: "Licenciamiento Criptográfico",
      visualBadge: "12 Movimientos ➔ Desglose Cargas ➔ Conversión KG/LBS ➔ Licencia SHA-256",
      impact: "Control biomecánico de 12 movimientos canónicos, cálculo de volumen de tonelaje y validación offline de licencias",
      summary: "Plataforma modular para entrenamiento de fuerza y sobrecarga progresiva en gimnasios y boxes, que gestiona bitácora de series/repeticiones, desglosa cargas simétricas por lado y valida licencias offline mediante criptografía SHA-256 vinculada al hardware.",
      problem: "Los centros de fuerza requerían un sistema que operara sin caídas de red en el box, calculase progresiones y tonelaje acumulado de forma automática, desglosara discos en máquinas Smith y protegiera el software mediante activación sin conexión.",
      action: "Desarrollé una aplicación modular con empaquetado autónomo IIFE (sin restricciones CORS); programé la bitácora de 12 movimientos biomecánicos canónicos; implementé la conversión matemática dinámica entre KG y LBS (factor 2.20462); y diseñé el algoritmo de licenciamiento offline evaluando el Device ID del hardware contra firma criptográfica SHA-256.",
      techStack: ["JavaScript Modular (IIFE)", "Biomecánica de Fuerza", "Criptografía SHA-256", "Device ID Hardware", "Conversión Dinámica KG/LBS", "LocalStorage Resiliente"],
      results: [
        "Operatividad 100% offline garantizada en el suelo del gimnasio sin depender de conexión a internet.",
        "Desglose exacto de placas selectoras y discos simétricos por lado sin errores de cálculo para atletas.",
        "Protección de propiedad intelectual con período trial de 72 horas y activación criptográfica."
      ]
    },
    // 5. Momentos Cookie
    {
      id: "proj-momentos-cookie",
      filterCategory: "gestion",
      title: "Momentos Cookie: Gestión y Control de Pedidos de Taller de Repostería",
      category: "Gestión Comercial & PWA",
      tag: "Semáforo de Producción",
      visualBadge: "Combos & Kits Pintura ➔ Semáforo de Entregas (4 Niveles) ➔ WhatsApp 1-Click ➔ PWA",
      impact: "Planificación cronológica de producción de taller, cálculo de abonos/saldos y cero retrasos en entregas",
      summary: "PWA responsive para el control integral de pedidos, planificación cronológica de entregas y cálculo financiero de un taller de repostería artesanal personalizada (Momentos Cookie), con semáforo visual de cocina y enlace a WhatsApp.",
      problem: "La dispersión de pedidos personalizados generaba desorganización en fechas de entrega comprometidas, errores en el cálculo de abonos/saldos y falta de visibilidad en la cola de producción del taller.",
      action: "Construí una PWA instalable con Service Worker para funcionamiento sin conexión; estructuré el semáforo cronológico de taller en 4 niveles de prioridad (Atrasados, Hoy, Esta Semana, Próximas Semanas); programé el selector de combos con kits de pintura comestible y empaques especiales; e integré comunicación instantánea por WhatsApp con mensajes precargados.",
      techStack: ["PWA (Service Worker / Manifest)", "JavaScript Modular", "Semáforo de Producción", "Control de Abonos y Saldos", "Integración WhatsApp", "LocalStorage"],
      results: [
        "Organización 100% visual del taller de horneado eliminando confusiones en pedidos especiales.",
        "Control financiero exacto de subtotales, abonos recibidos y saldos pendientes al momento del despacho.",
        "Operatividad fluida en tabletas y smartphones desde la cocina sin requerir servidores externos."
      ]
    },
    // 6. Jefatura de Soporte CVG ALCASA
    {
      id: "proj-soporte-cvg",
      filterCategory: "leadership",
      title: "Jefatura de División de Soporte Técnico (CVG ALCASA — 2012 a 2025)",
      category: "Jefatura de Soporte & Operaciones TI",
      tag: "13 Años de Liderazgo",
      visualBadge: "Mesa de Ayuda ➔ SLAs / ITIL ➔ Redes & Servidores ➔ Continuidad Operativa",
      impact: "13 años ininterrumpidos garantizando la disponibilidad de infraestructura TI en planta industrial",
      summary: "Dirección estratégica y operativa de todas las áreas de Soporte Técnico de la empresa estatal del aluminio CVG ALCASA (Ficha: 10.752), administrando la mesa de ayuda corporativa, la infraestructura de servidores, redes LAN/WLAN y parque de estaciones de trabajo.",
      problem: "Asegurar la continuidad operativa de una planta industrial de alta exigencia con cientos de usuarios corporativos, requerimientos heterogéneos y necesidad crítica de minimizar tiempos de inactividad técnica.",
      action: "Lideré equipos multidisciplinarios de soporte y mantenimiento; establecí procesos bajo estándares ITIL y acuerdos de nivel de servicio (SLAs); gestioné planes de adquisición de software y hardware corporativo; e implementé mantenimiento preventivo riguroso del parque computacional.",
      techStack: ["Mesa de Ayuda / Help Desk", "Gestión bajo SLAs / ITIL", "Servidores Windows/Linux", "Redes LAN/WLAN", "Mantenimiento Hardware", "Liderazgo de Equipos"],
      results: [
        "Dirección exitosa del soporte técnico corporativo e industrial durante 13 años continuos (2012–2025).",
        "Reducción sustancial en los tiempos de respuesta y resolución de incidencias críticas en planta.",
        "Optimización del presupuesto en renovación de parque tecnológico y control estricto de licencias.",
        "Alianzas tecnológicas y sinergias operativas con empresas hermanas del conglomerado industrial CVG."
      ]
    },
    // 7. Halterofilia Pro
    {
      id: "proj-halterofilia-pro",
      filterCategory: "sports",
      title: "Halterofilia Pro: Aplicación de Gestión y Monitoreo para Atletas Olímpicos",
      category: "Desarrollo Web & Deporte",
      tag: "En Operación Activa",
      visualBadge: "Atletas ➔ 1RM Dinámico ➔ Métricas Snatch & Clean & Jerk ➔ Offline Storage",
      impact: "Seguimiento digitalizado de marcas y cargas de entrenamiento en tiempo real",
      summary: "Aplicación web desarrollada con HTML, CSS y JavaScript moderno diseñada específicamente para que atletas de halterofilia gestionen y monitoreen de manera precisa su progreso en distintas disciplinas olímpicas, con persistencia local.",
      problem: "Los atletas y entrenadores dependían de anotaciones físicas o planillas dispersas, lo cual ralentizaba calcular porcentajes de carga (1RM) y seguir la evolución de arrancada y dos tiempos.",
      action: "Diseñé una interfaz ágil y responsiva que permite registrar marcas, calcular progresiones porcentuales y visualizar el rendimiento histórico de cada levantador desde cualquier dispositivo móvil o de escritorio.",
      techStack: ["HTML5 Semántico", "CSS3 Moderno", "JavaScript (ES6+)", "Diseño Responsivo", "Métricas Deportivas", "localStorage"],
      results: [
        "Digitalización total del registro de entrenamientos y marcas personales.",
        "Cálculo automático e instantáneo de tablas de porcentajes de carga para atletas.",
        "Interfaz optimizada para su uso cómodo y veloz en el gimnasio desde teléfonos móviles."
      ]
    },
    // 8. SAINT ERP Python / SQL
    {
      id: "proj-saint-python",
      filterCategory: "gestion",
      title: "Módulo MultiMoneda para Sistema Administrativo SAINT ERP",
      category: "Desarrollo Python & SQL",
      tag: "En Operación Activa",
      visualBadge: "Tasa en Vivo ➔ Python 3 / VS Code ➔ SQL Server ➔ SAINT ERP",
      impact: "Transacciones comerciales multimoneda automatizadas en tiempo real",
      summary: "Diseño, programación y puesta en producción de un módulo complementario en Python y SQL Server para habilitar la operativa multimoneda dentro del software administrativo SAINT en el Mini Market Don Andrés.",
      problem: "La versión operativa del sistema administrativo requería adaptación inmediata para procesar pagos y cotizaciones dinámicas en múltiples divisas sin alterar la integridad de los datos contables históricos.",
      action: "Desarrollé en Python bajo entorno Visual Studio Code un módulo de integración que consulta y actualiza las tasas de cambio dinámicas en SQL Server, permitiendo facturación fluida y arqueo de caja transparente para el negocio.",
      techStack: ["Python 3.13", "SQL Server", "VS Code", "SAINT ERP Administrativo", "Stored Procedures"],
      results: [
        "Módulo actualmente en uso y operación activa en 'Mini Market Don Andrés'.",
        "Automatización de conversiones monetarias y reportes diarios de venta.",
        "Cero inconsistencias en el cuadre de caja multimoneda y conciliaciones bancarias."
      ]
    },
    // 9. Soluciones Cloud & Drive API
    {
      id: "proj-cloud-drive",
      filterCategory: "web",
      title: "Soluciones Web Cloud, OAuth 2.0 y Automatización con Drive API v3",
      category: "Arquitectura Cloud & Python",
      tag: "Desarrollo Reciente 2025-2026",
      visualBadge: "Google Cloud Console ➔ OAuth 2.0 ➔ Drive API v3 ➔ Motores OCR / Extracción",
      impact: "Flujos de integración cloud seguros y automatización de procesamiento documental",
      summary: "Diseño y desarrollo de aplicaciones web y utilidades en Python y JavaScript que interactúan de forma segura con servicios en la nube de Google, aplicando autenticación OAuth 2.0, gestión de tokens y procesamiento automatizado de archivos en Google Drive.",
      problem: "La gestión manual de archivos y extracción de datos documentales generaba cuellos de botella en la consulta de información y riesgos de desactualización.",
      action: "Configuré proyectos en Google Cloud Console, implementé flujos de autorización OAuth 2.0 con alcance granular, consumí endpoints de Google Drive API v3 para sincronización de archivos y desarrollé pipelines en Python para extracción y OCR de documentos.",
      techStack: ["Google Cloud Console", "OAuth 2.0", "Google Drive API v3", "Python 3.13", "Extracción / OCR", "JavaScript ES6+", "REST APIs"],
      results: [
        "Flujo seguro de autenticación OAuth 2.0 sin exposición de credenciales maestras.",
        "Automatización integral de carga, catalogación y extracción de archivos en Google Drive.",
        "Arquitectura modular reutilizable para proyectos de integración cloud y procesamiento de datos."
      ]
    },
    // 10. Mini Market Don Andrés
    {
      id: "proj-minimarket-operaciones",
      filterCategory: "leadership",
      title: "Cofundación & Dirección de Operaciones TI – Mini Market Don Andrés (10 Años)",
      category: "Liderazgo & Operaciones Comerciales",
      tag: "Cofundador & VP Operaciones",
      visualBadge: "Factibilidad ➔ Puntos de Venta (POS) ➔ Cadena de Suministro ➔ 10 Años Operación",
      impact: "10 años de gestión integral de operaciones, finanzas, TI y abastecimiento (2014 – 2024)",
      summary: "Cofundación, estructuración estratégica y dirección operativa de Mini Market Don Andrés durante una década completa en Puerto Ordaz, abarcando desde la puesta en marcha de sistemas POS y control de inventarios hasta la supervisión de finanzas, compras y logística comercial.",
      problem: "Planificar, aperturar y mantener rentable un modelo comercial de abastecimiento continuo y servicio al cliente durante 10 años en un entorno económico dinámico y competitivo.",
      action: "Lideré el estudio de factibilidad y ejecución integral del proyecto; implementé y soporté técnicamente los sistemas de punto de venta (POS) y control de stock; supervisé el flujo de caja, presupuestos y rentabilidad; y negocié acuerdos comerciales con distribuidores clave.",
      techStack: ["Sistemas POS", "Control de Inventarios", "Dirección de Operaciones TI", "Gestión Financiera & Presupuesto", "Negociación con Proveedores", "Logística Comercial"],
      results: [
        "Apertura comercial exitosa y modernización constante de los flujos de cobro e inventario.",
        "10 años ininterrumpidos de rentabilidad, solvencia financiera y control presupuestario.",
        "Optimización de costos y alta rotación de inventario mediante soporte técnico continuo.",
        "Crecimiento comercial sostenido e implementación de estándares de servicio que fidelizaron a la clientela local."
      ]
    },
    // 11. Centro de Apoyo al Usuario
    {
      id: "proj-apoyo-usuario",
      filterCategory: "leadership",
      title: "Centro de Apoyo al Usuario & Help Desk Corporativo (2000 – 2012)",
      category: "Mesa de Ayuda & TI",
      tag: "Estandarización de Servicio",
      visualBadge: "Help Desk Central ➔ SLAs ➔ Parque de Microcomputadores",
      impact: "Atención centralizada de solicitudes de TI para toda la organización (2000 - 2012)",
      summary: "Liderazgo de la división encargada de la recepción, control, seguimiento y resolución de requerimientos de servicio tecnológico para la Gerencia de Sistemas y Organización de CVG ALCASA.",
      problem: "Falta de centralización en los pedidos de soporte, compras descentralizadas de microcomputadores y necesidad de control en las actualizaciones de software de la empresa.",
      action: "Estructuré los canales de atención y seguimiento a incidentes, coordiné al personal de campo y administré los procesos de compra y renovación de software para microcomputadores.",
      techStack: ["Help Desk", "Administración de Software", "Microcomputadores", "Control de Incidentes", "Atención al Usuario"],
      results: [
        "Consolidación de una mesa de ayuda confiable durante más de una década.",
        "Control exhaustivo del inventario de software y renovación de parque tecnológico.",
        "Aumento sustancial en la satisfacción de usuarios finales y gerencias usuarias."
      ]
    },
    // 12. Criptomonedas & Hardware
    {
      id: "proj-crypto-mining",
      filterCategory: "web",
      title: "Infraestructura & Operación de Minería de Criptomonedas (BTC / ETH) y Finanzas P2P",
      category: "Criptoactivos & Hardware",
      tag: "+5 Años de Experiencia",
      visualBadge: "Rigs GPU (ETH) + ASICs (BTC) ➔ Hashrate Pool ➔ Plataformas P2P",
      impact: "Operación ininterrumpida de Rigs/ASICs y transacciones cambiarias multimoneda",
      summary: "Diseño, ensamblaje, puesta en marcha, mantenimiento y administración de Rigs de Minado de Ethereum y equipos de minería Bitcoin, complementado con gestión financiera en plataformas globales.",
      problem: "La minería y comercialización de criptoactivos requiere control térmico exhaustivo, balanceo de potencia eléctrica, optimización de hashrate y gestión segura ante la volatilidad cambiaria.",
      action: "Ensamblé y configuré rigs de GPUs para minería de Ethereum y gestioné equipos ASIC para Bitcoin; administré pools de minado y ejecuté operaciones de intercambio de divisas a través de Binance, BTC.com, Uphold y transacciones P2P.",
      techStack: ["Ethereum (ETH)", "Bitcoin (BTC)", "Rigs de GPU", "Equipos ASIC", "Binance", "BTC.com", "Uphold", "Finanzas P2P"],
      results: [
        "Más de 5 años de operación exitosa y continua en minería de Bitcoin y Ethereum (2018–2023, Actual).",
        "Diseño, ensamblado e implementación integral de Rigs de minado con alta eficiencia energética.",
        "Uso avanzado de plataformas cripto para arbitraje, conversión y gestión de liquidez comercial."
      ]
    },
    // 13. Simulación Contrato Colectivo
    {
      id: "proj-simulacion-contrato",
      filterCategory: "dev",
      title: "Sistema de Simulación de Contrato Colectivo & Presupuesto",
      category: "Análisis & Modelado",
      tag: "Impacto Estratégico",
      visualBadge: "Modelos IFPS ➔ Proyección Salarial ➔ Negociación Colectiva",
      impact: "Modelado predictivo financiero para la negociación sindical de ALCASA",
      summary: "Diseño, desarrollo, implementación y operación del Sistema de Simulación de Contrato Colectivo ALCASA 1990 y el Sistema de Formulación Presupuestaria 1992.",
      problem: "La alta gerencia requería simular en tiempo real el impacto económico de las cláusulas salariales y beneficios contractuales durante las negociaciones colectivas.",
      action: "Desarrollé modelos predictivos en el software de simulación IFPS y construí el Sistema de Formulación de Presupuesto garantizando proyecciones exactas.",
      techStack: ["IFPS (Interactive Financial Planning System)", "Natural", "Dbase", "Modelos de Simulación"],
      results: [
        "Herramienta fundamental utilizada en la mesa de negociación del Contrato Colectivo 1990.",
        "Formulación automatizada del presupuesto anual 1992 con desgloses por centro de costo.",
        "Desarrollo e implementación del 'Sistema de Emisión de Tarjetas de Identidad de ALCASA'."
      ]
    },
    // 14. Sistemas Core Administrativos
    {
      id: "proj-sistemas-core",
      filterCategory: "dev",
      title: "Evolución y Mantenimiento de Sistemas Administrativos Core (1985 – 2012)",
      category: "Arquitectura & Programación",
      tag: "Sistemas Core",
      visualBadge: "Nómina Adabas/Natural ➔ Cuentas x Cobrar/Pagar ➔ Contabilidad",
      impact: "Disponibilidad y precisión en Nóminas, Pagos, Cobros y Contabilidad General",
      summary: "Mantenimiento, evolución y programación de la suite administrativa de CVG ALCASA durante 27 años, incluyendo la programación del nuevo Sistema de Nómina corporativo en Adabas/Natural.",
      problem: "Sistemas críticos de misión empresarial requerían actualización constante ante cambios fiscales, organizacionales y contractuales.",
      action: "Programé y coordiné la construcción del nuevo sistema de nóminas sobre motor Adabas/Natural, dando soporte y optimización a los módulos de Cuentas por Pagar, Cuentas por Cobrar, Cheques, Costos y Contabilidad.",
      techStack: ["Adabas", "Natural", "Cobol", "PL1", "Pascal", "Basic"],
      results: [
        "Puesta en producción exitosa del nuevo Sistema de Nómina de CVG ALCASA.",
        "Continuidad garantizada en el procesamiento contable y financiero de la compañía.",
        "Estandarización de flujos de datos entre recursos humanos y finanzas."
      ]
    }
  ],

  technicalSkills: {
    "Liderazgo, Soporte Técnico & Mesa de Ayuda": [
      "Dirección Estratégica de Soporte Técnico Corporativo e Industrial (13 Años en CVG ALCASA)",
      "Gestión de Mesa de Ayuda / Help Desk bajo Acuerdos de Nivel de Servicio (SLAs)",
      "Adopción de Buenas Prácticas ITIL para Gestión de Incidentes y Requerimientos",
      "Continuidad Operativa, Planes de Contingencia y Mitigación de Riesgos TI",
      "Liderazgo y Supervisión de Equipos Técnicos Multidisciplinarios",
      "Administración Presupuestaria de TI, Inventario Tecnológico y Control de Licencias",
      "Negociación, Homologación y Relación con Proveedores de Tecnología"
    ],
    "Ciberseguridad, Web Crypto & Almacenamiento Offline": [
      "Cifrado Simétrico AES-256-GCM con Web Crypto API nativa en el cliente (Bóveda Digital)",
      "Derivación Criptográfica de Claves con PBKDF2 (100.000 iteraciones, HMAC-SHA256)",
      "Arquitecturas Zero-Knowledge y Validación de Licencias Offline con SHA-256 (Gimnasio Pro)",
      "Persistencia Estructurada en IndexedDB y LocalStorage con Mecanismos de Migración Segura",
      "Generación de Enlaces Efímeros Seguros con Caducidad Temporal"
    ],
    "Sistemas de Gestión Comercial, ERP & Tesorería": [
      "Arquitectura ERP Textil: Ventas, Compras, Inventario Prenda-Color-Talla y Fabricación (NovaPrint)",
      "Cotizador Técnico Inteligente con Reglas de Compatibilidad (DTF, Serigrafía, Sublimación, Vinilo)",
      "Cálculo y Facturación bajo Legislación Tributaria Chilena de IVA 19% (D.L. 825) y Delivery",
      "Sistemas de Tesorería, Conciliación Multicuenta y Cobranza Programada (Dojo Karate La Reina)",
      "Gestión de Pedidos, Semáforos Cronológicos de Taller y Control de Saldos (Momentos Cookie)",
      "Módulos MultiMoneda y Sincronización Transaccional para SAINT ERP en Python/SQL"
    ],
    "Software Deportivo, Biomecánica & Rendimiento": [
      "Desarrollo de Soluciones de Alto Rendimiento para Atletas y Boxes (Gimnasio Pro, Halterofilia Pro)",
      "Catálogo y Bitácora de 12 Movimientos Biomecánicos Canónicos y Sobrecarga Progresiva",
      "Cálculo de Tonelaje Acumulado y Progresiones de Porcentajes de Carga (1RM Dinámico)",
      "Conversión Matemática Dinámica de Unidades de Fuerza (KG <-> LBS, Factor 2.20462)",
      "Desglose Simétrico de Cargas por Lado para Máquinas Smith y Discos"
    ],
    "Infraestructura, Redes & Hardware": [
      "Diagnóstico, Mantenimiento Preventivo y Correctivo de Hardware Corporativo e Industrial",
      "Administración y Soporte de Redes LAN / WLAN y Comunicaciones",
      "Sistemas Operativos: Windows (Estaciones y Servidores) y Entornos Linux",
      "Configuración de Periféricos Industriales, Comerciales, Balanzas y Puntos de Venta (POS)",
      "Impresión de Tickets Térmicos de Producción y Recibos Comerciales (@media print)",
      "Infraestructura de Minería de Criptomonedas (Rigs GPU Ethereum & ASICs Bitcoin)"
    ],
    "Programación, Scripting & Servicios Cloud": [
      "Python 3.13 (Visual Studio Code, Scripting, Automatización de Procesos)",
      "Integración Cloud: Google Cloud Console, OAuth 2.0 & Google Drive API v3",
      "Motores de Extracción de Datos, OCR y Procesamiento Automatizado de Documentos",
      "Automatización de Tareas del Sistema con PowerShell y Bash",
      "Bases de Datos Relacionales: SQL Server (Consultas Complejas, Stored Procedures)",
      "Control de Versiones Profesional con Git y Repositorios en GitHub",
      "JavaScript Moderno (ES6+, Manipulación Avanzada del DOM, Vanilla JS sin Bundlers)",
      "HTML5 Semántico, Accesibilidad Web (WCAG AA), CSS3 Moderno y Tailwind CSS",
      "Arquitecturas PWA (Service Workers, Manifest y Funcionamiento 100% Offline)"
    ],
    "Sistemas de Información Core & Modelado": [
      "Sistemas Administrativos de Misión Crítica (Nóminas, Facturación, Presupuestos)",
      "Sistemas Legados Industriales: Adabas & Natural, Cobol, PL1, Pascal",
      "Modelado de Procesos de Negocio y Simulación Financiera (Software IFPS)",
      "Metodología Spec-Driven Development (SDD) para Arquitectura de Software"
    ]
  },

  experience: [
    {
      period: "2025 – Presente",
      role: "Desarrollador de Software Independiente & Arquitectura Cloud",
      company: "Proyectos Digitales & Desarrollo Independiente",
      location: "Santiago, Chile",
      description: "Arquitectura y desarrollo de soluciones web completas, sistemas ERP comerciales, herramientas de ciberseguridad Zero-Knowledge y software deportivo con persistencia offline.",
      highlights: [
        "Ventas NovaPrint: Suite ERP textil completa con cotizador técnico inteligente, cálculo de IVA chileno (19%), enlace Prenda-Color-Talla y tickets térmicos de producción.",
        "Bóveda Digital: Wallet segura de documentos con Web Crypto API (cifrado simétrico AES-256-GCM y PBKDF2), arquitectura Zero-Knowledge y persistencia en IndexedDB.",
        "Administración Dojo Karate La Reina: SPA de tesorería y cobranza programada (Día 3 a la 01:00 AM), conciliación multicuenta (Banco Estado, Banco Santander Fondo de Reserva), becas y arrastre de deudas.",
        "Gimnasio Pro: Plataforma de fuerza y biomecánica con 12 movimientos canónicos, cálculo de tonelaje, conversión KG/LBS y licenciamiento offline mediante firma SHA-256 sobre hardware.",
        "Momentos Cookie: PWA offline de control de pedidos para taller de repostería con semáforo de producción en 4 niveles de prioridad y mensajería WhatsApp.",
        "Integración Cloud & APIs: Configuración en Google Cloud Console, flujos OAuth 2.0, consumo de Google Drive API v3 y pipelines en Python para extracción y OCR de documentos."
      ]
    },
    {
      period: "2012 – 2025",
      role: "Jefe de División de Soporte Técnico (13 Años)",
      company: "CVG ALCASA (Ficha: 10.752)",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Dirección estratégica de soporte técnico, administración de mesa de ayuda corporativa, continuidad operativa de infraestructura de servidores, redes, parque de estaciones de trabajo, gestión de inventario tecnológico y liderazgo de equipos técnicos multidisciplinarios en planta industrial de alta demanda.",
      highlights: [
        "Dirección Integral de Soporte: Conducción ininterrumpida de las operaciones de soporte técnico corporativo e industrial a lo largo de 13 años (2012–2025).",
        "Alta Disponibilidad de Infraestructura: Supervisión y garantía de operatividad de servidores, enlaces de redes LAN/WLAN y parque de microcomputadores bajo SLAs exigentes.",
        "Liderazgo de Equipos Técnicos: Dirección y capacitación continua de personal técnico de soporte, asignación de turnos y atención de incidentes críticos en planta.",
        "Gestión Presupuestaria y Compras TI: Definición y ejecución de compras de hardware, renovación de equipamiento y administración exhaustiva de licencias corporativas.",
        "Sinergias Industriales: Coordinación técnica interinstitucional con empresas matrices y filiales del conglomerado estatal CVG."
      ]
    },
    {
      period: "2014 – 2024",
      role: "Administración y Gestión de TI / Operaciones (10 Años)",
      company: "Mini Market Don Andrés",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Cofundación, modernización de procesos comerciales, implementación de control de inventarios, optimización de flujos de venta y soporte técnico continuo a sistemas de punto de venta (POS).",
      highlights: [
        "Implementación Tecnológica Comercial: Despliegue, configuración y soporte a sistemas de punto de venta (POS), balanzas digitales y red interna de facturación.",
        "Integración de ERP Administrativo: Programación del módulo multimoneda sobre SAINT ERP y SQL Server para transacciones en tiempo real.",
        "Control Operativo y Financiero: Supervisión del flujo de caja, compras, acuerdos comerciales con proveedores y control sistemático de inventarios a lo largo de una década."
      ]
    },
    {
      period: "2018 – 2023, Actual",
      role: "Especialista en Infraestructura Cripto & Operaciones Digitales",
      company: "Operación de Hardware y Criptoactivos",
      location: "Puerto Ordaz / Santiago",
      description: "Más de 5 años de experiencia técnica y financiera en infraestructura de minería de criptoactivos (BTC / ETH) y transacciones digitales.",
      highlights: [
        "Diseño, ensamblaje y puesta en marcha de Rigs de Minado de Ethereum (GPUs) con control térmico y optimización de clocks.",
        "Implementación, configuración y mantenimiento preventivo de equipos ASIC para minería de Bitcoin.",
        "Operaciones de liquidez, conversión cambiaria y arbitraje en plataformas globales (Binance, BTC.com, Uphold y mercados P2P)."
      ]
    },
    {
      period: "1985 – 2012",
      role: "Analista / Programador II",
      company: "CVG ALCASA (Ficha: 10.752)",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Análisis, diseño, implementación y mantenimiento de sistemas corporativos de gestión empresarial, automatización de flujos administrativos y soporte a bases de datos relacionales durante 27 años.",
      highlights: [
        "Sistemas Administrativos de Misión Crítica: Mantenimiento continuo y soporte a los sistemas de Nóminas, Cuentas por Pagar, Cuentas por Cobrar, Emisión de Cheques, Contabilidad General y Costos.",
        "Desarrollo del Sistema de Nómina Corporativo: Coordinación y programación del nuevo Sistema de Nómina sobre motor Adabas / Natural.",
        "Liderazgo de Mesa de Ayuda (2000–2012): Jefe de División Centro de Apoyo al Usuario, centralizando la recepción, seguimiento y solución de solicitudes de servicio TI.",
        "Sistemas Estratégicos y Presupuesto (1990–1995): Analista Superior de Información; desarrollo del Sistema de Simulación de Contrato Colectivo (software IFPS) y Sistema de Emisión de Tarjetas de Identidad."
      ]
    }
  ],

  educationAndCerts: {
    education: [
      {
        title: "Licenciado en Informática (1° de su Promoción)",
        institution: "Universidad Centroccidental Lisandro Alvarado (UCLA)",
        location: "Barquisimeto, Lara, Venezuela",
        year: "1979 - 1984",
        distinction: "Promedio: 3.66 / 4.00 — Primer Lugar de la Promoción (Graduado con Honores)"
      }
    ],
    certifications: [
      {
        name: "Iniciación al Desarrollo con IA: El Nuevo Programador",
        issuer: "mouredev & BIG school (Brais Moure / Romuald Fons)",
        badge: "Certificado de Asistencia (4h)",
        year: "2026 (16/10/2026)",
        file: "assets/docs/certificado-iniciacion-desarrollo-ia-mouredev.pdf",
        credentialId: "84041adfb6"
      },
      {
        name: "Semana de la Inteligencia Artificial",
        issuer: "Hashtag Capacitaciones (NIF: 26.344.392/0001-08)",
        badge: "Certificación Oficial (8h)",
        year: "2026 (06/08/2026)",
        file: "assets/docs/certificado-semana-ia-hashtag.pdf",
        credentialId: "Semana de la IA - Hashtag"
      },
      {
        name: "Iniciación al Desarrollo con IA: De 0 a Producción",
        issuer: "BIG school (Brais Moure / Romuald Fons)",
        badge: "Certificación Oficial (6h)",
        year: "2026 (18/03/2026)",
        file: "assets/docs/certificado-desarrollo-ia-bigschool.pdf",
        credentialId: "Jornadas Formativas IA - BIG school"
      },
      {
        name: "Curso Python y la Web",
        issuer: "Pontificia Universidad Católica de Chile (Escuela de Ingeniería)",
        badge: "Aprobado • Nota 6,6 (75 hrs)",
        year: "Nov 2023 - Feb 2024",
        file: "assets/docs/certificado-python-la-web-puc.pdf",
        credentialId: "A2DE63F20",
        verificationUrl: "https://www.uc.cl/ECvalidacertificado"
      },
      {
        name: "Desarrollo Web (HTML, CSS, JavaScript Moderno & Cloud APIs)",
        issuer: "Proyectos Prácticos & Soluciones Digitales",
        badge: "Aplicaciones Activas",
        year: "2025 - Presente"
      },
      {
        name: "Jefatura en Soporte Técnico, Mesa de Ayuda & SLAs",
        issuer: "CVG ALCASA - Gerencia de Sistemas (Ficha 10.752)",
        badge: "13 Años al Frente de División",
        year: "2012 - 2025"
      },
      {
        name: "Programación en Python & SQL Server (ERP SAINT)",
        issuer: "Formación Continua & Proyectos de Negocio",
        badge: "Activo / En Producción",
        year: "2017 - Presente"
      },
      {
        name: "Minería de Criptomonedas (BTC / ETH) & Finanzas P2P",
        issuer: "Operación de Rigs de GPU / ASICs & Plataformas",
        badge: "+5 Años de Experiencia",
        year: "2018 - 2023, Actual"
      },
      {
        name: "Simulación Financiera & Formulación Presupuestaria (IFPS)",
        issuer: "Especialización Aplicada",
        badge: "Especialista",
        year: "1990 - 1995"
      }
    ]
  }
};
