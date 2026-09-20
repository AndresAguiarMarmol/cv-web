/**
 * Datos del Perfil Profesional - Andres Aguiar
 * Analista de Sistemas con más de 40 años de trayectoria en TI
 */
const PROFILE_DATA = {
  personal: {
    name: "Andres Aguiar",
    title: "Analista de Sistemas",
    subtitle: "Más de 40 Años de Trayectoria en Tecnologías de Información, Gestión de TI, Desarrollo Web & Criptoactivos",
    summary: "Profesional experto en Tecnología de Información con más de 40 años de sólida trayectoria liderando operaciones de soporte técnico, administración de plataformas, desarrollo de sistemas y soluciones digitales. Especializado en maximizar el rendimiento tecnológico mediante programación en Python/SQL, desarrollo de aplicaciones web (HTML/CSS/JS), y más de 5 años de experiencia en infraestructura de minería de criptomonedas (BTC/ETH) y finanzas P2P.",
    location: "Santiago, Chile",
    status: "Disponible para Consultoría, Proyectos TI & Desarrollo Web",
    email: "andres.aguiar.marmol@gmail.com",
    phone: "+56 9 3339 5447",
    linkedin: "https://www.linkedin.com/in/andres-aguiar-b4824395",
    github: "https://github.com/AndresAguiarMarmol",
    cvPdfUrl: "#",
    metrics: [
      { label: "Años de Trayectoria TI", value: "+40" },
      { label: "Minería Cripto (BTC/ETH)", value: "+5 Años" },
      { label: "Graduación UCLA", value: "1° Lugar" },
      { label: "Índice Académico", value: "3.55/4" }
    ]
  },

  // 1. Resumen Ejecutivo en 30 Segundos (Elevator Pitch)
  executivePitch: {
    title: "Resumen Ejecutivo en 30 Segundos",
    badge: "Propuesta de Valor",
    subtitle: "Tres razones estratégicas por las cuales mi perfil aporta solidez, versatilidad y resultados inmediatos a su organización:",
    points: [
      {
        id: "adaptability",
        badge: "Versatilidad Tecnológica",
        icon: "cpu",
        title: "Adaptabilidad Tecnológica Continua",
        description: "Capacidad demostrada para dominar y transicionar entre paradigmas: desde sistemas core legados industriales (Adabas, Natural, Cobol) hasta desarrollo moderno en Python, bases de datos SQL Server, aplicaciones web interactivas (HTML5/CSS/JS) y operación de hardware cripto."
      },
      {
        id: "leadership",
        badge: "Gobernanza & Operaciones",
        icon: "briefcase",
        title: "20+ Años en Liderazgo Corporativo TI",
        description: "Dirección de divisiones de Soporte Técnico y Help Desk en plantas industriales de gran envergadura (CVG ALCASA). Gestión de compras de software/hardware, control de presupuestos, cumplimiento de acuerdos y alianzas tecnológicas interinstitucionales."
      },
      {
        id: "results",
        badge: "Excelencia & Producción",
        icon: "award",
        title: "1° en Promoción UCLA & Software en Producción",
        description: "Graduado con Honores (Índice 3.55/4) como Primer Lugar de la Promoción en la UCLA. Software creado y operando activamente hoy: módulo multimoneda para SAINT ERP en Mini Market Don Andres CA y aplicación Halterofilia Pro para atletas olímpicos."
      }
    ]
  },

  // 2. Insignias Tecnológicas con Identidad de Marca
  brandTechnologies: [
    { name: "Python", category: "Backend & Scripting", color: "#387EB8", bg: "rgba(56, 126, 184, 0.12)", icon: "code-2" },
    { name: "SQL Server", category: "Bases de Datos", color: "#CC292B", bg: "rgba(204, 41, 43, 0.12)", icon: "database" },
    { name: "JavaScript (ES6+)", category: "Frontend Web", color: "#EAB308", bg: "rgba(234, 179, 8, 0.15)", icon: "file-code" },
    { name: "HTML5 & CSS3", category: "Web Standards", color: "#E44D26", bg: "rgba(228, 77, 38, 0.12)", icon: "layout" },
    { name: "Bitcoin (BTC)", category: "Cripto & ASICs", color: "#F7931A", bg: "rgba(247, 147, 26, 0.14)", icon: "coins" },
    { name: "Ethereum (ETH)", category: "Rigs de Minería", color: "#627EEA", bg: "rgba(98, 126, 234, 0.14)", icon: "cpu" },
    { name: "VS Code & Git", category: "Dev Tools", color: "#007ACC", bg: "rgba(0, 122, 204, 0.12)", icon: "git-branch" },
    { name: "SAINT ERP", category: "Sistemas Administrativos", color: "#10B981", bg: "rgba(16, 185, 129, 0.12)", icon: "layers" },
    { name: "Adabas & Natural", category: "Sistemas Core", color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.12)", icon: "server" },
    { name: "Binance & P2P", category: "Finanzas Digitales", color: "#F0B90B", bg: "rgba(240, 185, 11, 0.14)", icon: "arrow-left-right" }
  ],

  // 3. Categorías de Filtro Interactivo de Proyectos
  filterCategories: [
    { id: "all", label: "Todos los Casos (8)", icon: "grid" },
    { id: "web", label: "Desarrollo Web (2)", icon: "globe" },
    { id: "dev", label: "Python & Sistemas (2)", icon: "code" },
    { id: "crypto", label: "Cripto & Minería (1)", icon: "cpu" },
    { id: "leadership", label: "Liderazgo TI (2)", icon: "users" },
    { id: "erp", label: "Análisis & Finanzas (1)", icon: "bar-chart-3" }
  ],

  languages: [
    { name: "Español", level: "Nativo", badge: "Idioma Materno" },
    { name: "Inglés Técnico", level: "Intermedio", badge: "Documentación & Sistemas" }
  ],

  aptitudes: [
    { name: "Inteligencia Emocional", icon: "heart-handshake", desc: "Gestión constructiva de relaciones y liderazgo empático." },
    { name: "Espíritu Crítico", icon: "sparkles", desc: "Evaluación rigurosa de soluciones y cuestionamiento analítico." },
    { name: "Trabajo en Equipo", icon: "users-round", desc: "Colaboración fluida entre equipos de negocio, proveedores y desarrolladores." },
    { name: "Capacidad Analítica", icon: "brain", desc: "Descomposición estructurada de flujos de datos y requerimientos complejos." },
    { name: "Habilidades Físicas", icon: "activity", desc: "Dinamismo, disciplina deportiva constante y alta energía personal." }
  ],

  interests: [
    { name: "Ciclismo de Montaña", icon: "bike", desc: "Pasión por el deporte outdoor, superación y constancia." },
    { name: "Halterofilia & Deporte Olímpico", icon: "dumbbell", desc: "Entrenamiento de fuerza y desarrollo de software para atletas." },
    { name: "Lectura", icon: "book-open", desc: "Actualización técnica continua y literatura diversa." },
    { name: "Música", icon: "music", desc: "Apreciación artística y equilibrio personal." }
  ],

  corePillars: [
    {
      id: "leadership-it",
      icon: "users",
      title: "Liderazgo & Gestión de Operaciones TI",
      description: "Más de dos décadas al frente de divisiones corporativas (Soporte Técnico y Centro de Apoyo al Usuario). Coordinación integral de equipos humanos, gestión de infraestructura tecnológica, compras de software/hardware y relaciones interinstitucionales con empresas y proveedores."
    },
    {
      id: "web-software-dev",
      icon: "code",
      title: "Desarrollo de Software & Aplicaciones Web",
      description: "Programación en Python con Visual Studio Code, creación de soluciones web interactivas con HTML, CSS y JavaScript (ej. Halterofilia Pro, CV Interactivo), módulos multimoneda integrados a ERPs (SAINT) y bases de datos con SQL Server."
    },
    {
      id: "crypto-hardware",
      icon: "cpu",
      title: "Criptomonedas, Hardware & Minería",
      description: "+5 años diseñando, ensamblando y operando Rigs de minado de Ethereum (GPUs) y equipos ASIC de Bitcoin. Dominio de plataformas de intercambio de divisas y operaciones financieras P2P (Binance, BTC.com, Uphold)."
    },
    {
      id: "systems-analysis",
      icon: "file-code",
      title: "Análisis y Formulación de Sistemas Core",
      description: "Diseño, levantamiento de requerimientos, modelado y puesta en producción de sistemas empresariales críticos: Nóminas, Presupuesto, Simulación de Contratos Colectivos, Cuentas por Cobrar/Pagar y Emisión de Identidades."
    }
  ],

  projects: [
    {
      id: "proj-halterofilia-pro",
      filterCategory: "web",
      title: "Halterofilia Pro: Aplicación de Gestión y Monitoreo para Atletas Olímpicos",
      category: "Desarrollo Web & Deporte",
      tag: "En Operación Activa",
      visualBadge: "Atletas ➔ 1RM Dinámico ➔ Métricas Snatch & Clean & Jerk",
      impact: "Seguimiento digitalizado de marcas y cargas de entrenamiento en tiempo real",
      summary: "Aplicación web desarrollada con HTML, CSS y JavaScript diseñada específicamente para que atletas de halterofilia gestionen y monitoreen de manera precisa su progreso en distintas disciplinas olímpicas.",
      problem: "Los atletas y entrenadores dependían de anotaciones físicas o planillas dispersas, lo cual ralentizaba calcular porcentajes de carga (1RM) y seguir la evolución de arrancada y dos tiempos.",
      action: "Diseñé una interfaz ágil y responsiva que permite registrar marcas, calcular progresiones porcentuales y visualizar el rendimiento histórico de cada levantador desde cualquier dispositivo.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Diseño Responsivo", "Métricas Deportivas", "Gestión de Datos"],
      results: [
        "Digitalización total del registro de entrenamientos y marcas personales.",
        "Cálculo automático e instantáneo de tablas de porcentajes de carga para atletas.",
        "Interfaz optimizada para su uso cómodo y veloz en el gimnasio desde teléfonos móviles."
      ]
    },
    {
      id: "proj-crypto-mining",
      filterCategory: "crypto",
      title: "Infraestructura & Operación de Minería de Criptomonedas (BTC / ETH) y Finanzas P2P",
      category: "Criptoactivos & Hardware",
      tag: "+5 Años de Experiencia",
      visualBadge: "Rigs GPU (ETH) + ASICs (BTC) ➔ Hashrate Pool ➔ Binance P2P",
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
    {
      id: "proj-cv-web-andres",
      filterCategory: "web",
      title: "Curriculum Vitae & Portfolio Web Interactivo – Andres Aguiar",
      category: "Desarrollo Web & Gestión TI",
      tag: "Showcase Técnico",
      visualBadge: "HTML5 / Tailwind ➔ data.js Modular ➔ <dialog> Nativo ➔ GitHub Pages",
      impact: "Arquitectura desacoplada, alta accesibilidad y soporte nativo multi-tema",
      summary: "Aplicación web moderna construida en HTML, CSS y JavaScript que presenta de forma interactiva y ejecutiva más de cuatro décadas de competencias técnicas y proyectos en TI.",
      problem: "El formato PDF tradicional resulta rígido para presentar en profundidad proyectos complejos en formato STAR, tecnologías de hardware, cripto y sistemas legados.",
      action: "Desarrollé una estructura semántica HTML5 con Tailwind CSS y JavaScript modular; implementé modales nativos con el elemento <dialog closedby='any'>, selector de tema claro/oscuro y reglas de impresión profesional para ATS.",
      techStack: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)", "Accessible Dialog", "Dark Mode", "Git"],
      results: [
        "Muestra práctica de competencias técnicas en desarrollo web moderno y gestión de proyectos TI.",
        "Rendimiento de carga ultrarrápido y compatibilidad 100% responsiva.",
        "Canales de contacto directo integrados (WhatsApp con 1 clic y llamada telefónica)."
      ]
    },
    {
      id: "proj-saint-python",
      filterCategory: "dev",
      title: "Módulo MultiMoneda para Sistema Administrativo SAINT V 9.035",
      category: "Desarrollo Python & SQL",
      tag: "En Operación Activa",
      visualBadge: "Tasa en Vivo ➔ Python / VS Code ➔ SQL Server ➔ SAINT ERP",
      impact: "Transacciones comerciales multimoneda automatizadas en tiempo real",
      summary: "Diseño, programación y puesta en producción de un módulo complementario en Python y SQL Server para habilitar la operativa multimoneda dentro del software administrativo SAINT en el Mini Market Don Andres CA.",
      problem: "La versión operativa del sistema administrativo requería adaptación inmediata para procesar pagos y cotizaciones dinámicas en múltiples divisas sin alterar la integridad de los datos contables históricos.",
      action: "Desarrollé en Python bajo entorno Visual Studio Code un módulo de integración que consulta y actualiza las tasas de cambio dinámicas en SQL Server, permitiendo facturación fluida y arqueo de caja transparente para el negocio.",
      techStack: ["Python", "SQL Server", "VS Code", "SAINT Administrativo", "Reflex / Django"],
      results: [
        "Módulo actualmente en uso y operación activa en 'Mini Market Don Andres CA'.",
        "Automatización de conversiones monetarias y reportes diarios de venta.",
        "Cero inconsistencias en el cuadre de caja multimoneda."
      ]
    },
    {
      id: "proj-soporte-cvg",
      filterCategory: "leadership",
      title: "Coordinación de la División de Soporte Técnico (CVG ALCASA)",
      category: "Gestión & Operaciones TI",
      tag: "Liderazgo Corporativo",
      visualBadge: "Equipos de Soporte ➔ Compras TI ➔ Sinergias Grupo CVG",
      impact: "Gobernanza operativa continua de la Gerencia de Sistemas (2013 - 2018)",
      summary: "Dirección y coordinación de las operaciones de todas las áreas de Soporte Técnico de la empresa estatal del aluminio CVG ALCASA, asegurando la disponibilidad de la infraestructura TI.",
      problem: "Garantizar la continuidad operativa de una planta industrial de gran escala con cientos de usuarios corporativos y requerimientos tecnológicos heterogéneos.",
      action: "Lideré al equipo técnico, definí los planes de adquisición de software y equipamiento clave y establecí mesas de trabajo conjuntas con proveedores y empresas hermanas del conglomerado CVG para sinergias tecnológicas.",
      techStack: ["Gestión de Equipos", "Compras de TI", "Convenios Interinstitucionales", "Infraestructura", "Hardware Corporativo"],
      results: [
        "Coordinación exitosa de operaciones de soporte técnico ininterrumpidas durante el período 2013 - 2018.",
        "Optimización del presupuesto en adquisición de licencias y equipamiento tecnológico.",
        "Alianzas tecnológicas estratégicas con empresas del Grupo CVG."
      ]
    },
    {
      id: "proj-apoyo-usuario",
      filterCategory: "leadership",
      title: "Centro de Apoyo al Usuario & Help Desk Corporativo",
      category: "Mesa de Ayuda & TI",
      tag: "Estandarización de Servicio",
      visualBadge: "Help Desk Central ➔ SLAs ➔ Parque de Microcomputadores",
      impact: "Atención centralizada de solicitudes de TI para toda la organización (2000 - 2012)",
      summary: "Liderazgo de la división encargada de la recepción, control, seguimiento y resolución de requerimientos de servicio tecnológico para la Gerencia de Sistemas y Organización.",
      problem: "Falta de centralización en los pedidos de soporte, compras descentralizadas de microcomputadores y necesidad de control en las actualizaciones de software de la empresa.",
      action: "Estructuré los canales de atención y seguimiento a incidentes, coordiné al personal de campo y administré los procesos de compra y renovación de software para microcomputadores.",
      techStack: ["Help Desk", "Administración de Software", "Microcomputadores", "Control de Incidentes", "Atención al Usuario"],
      results: [
        "Consolidación de una mesa de ayuda confiable durante más de una década.",
        "Control exhaustivo del inventario de software y renovación de parque tecnológico.",
        "Aumento sustancial en la satisfacción de usuarios finales y gerencias usuarias."
      ]
    },
    {
      id: "proj-simulacion-contrato",
      filterCategory: "erp",
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
    {
      id: "proj-sistemas-core",
      filterCategory: "dev",
      title: "Evolución y Mantenimiento de Sistemas Administrativos Core",
      category: "Arquitectura & Programación",
      tag: "Sistemas Core",
      visualBadge: "Nómina Adabas/Natural ➔ Cuentas x Cobrar/Pagar ➔ Contabilidad",
      impact: "Disponibilidad y precisión en Nóminas, Pagos, Cobros y Contabilidad General",
      summary: "Mantenimiento, evolución y programación de la suite administrativa de CVG ALCASA, incluyendo la programación del nuevo Sistema de Nómina en Adabas/Natural.",
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
    "Desarrollo Web & Frontend": [
      "HTML5 Semántico & CSS3 Moderno",
      "JavaScript (Vanilla, Manipulación DOM, ES6+)",
      "Aplicaciones Web Especializadas (Halterofilia Pro)",
      "Diseño Responsivo (Mobile First & Accesibilidad)",
      "Desarrollo de Portfolios & Soluciones Digitales"
    ],
    "Criptomonedas, Blockchain & Hardware": [
      "Minería de Bitcoin (BTC) & Equipos ASIC",
      "Diseño, Armado & Operación de Rigs de Minado (ETH)",
      "Plataformas Cripto: Binance, BTC.com, Uphold",
      "Operaciones Financieras & Arbitraje P2P",
      "Optimización de Hashrate, Clocks & Eficiencia Eléctrica"
    ],
    "Programación & Backend": [
      "Python (Visual Studio Code)",
      "Django & Reflex (Interfaces web modernas)",
      "SQL Server (Consultas Complejas, Store Procedures)",
      "Natural & Adabas",
      "Cobol, PL1, Pascal & Basic"
    ],
    "Gestión de TI & Liderazgo": [
      "Manejo y Coordinación de Personal Técnico",
      "Administración y Compras de Software / Hardware",
      "Help Desk, Soporte Técnico & Atención a Usuarios",
      "Negociación y Relaciones con Proveedores de TI",
      "Modelado de Procesos y Sistemas Administrativos (SAINT ERP)"
    ]
  },

  experience: [
    {
      period: "Actualidad",
      role: "Desarrollador de Aplicaciones Web & Soluciones Digitales",
      company: "Proyectos Digitales & Desarrollo Independiente",
      location: "Santiago, Chile",
      description: "Creación de aplicaciones web interactivas utilizando HTML, CSS y JavaScript para resolver necesidades específicas de usuarios y atletas.",
      highlights: [
        "Creación de la aplicación Halterofilia Pro, diseñada para atletas de halterofilia, permitiendo gestionar y monitorear su progreso en distintas disciplinas olímpicas.",
        "Desarrollo de la aplicación Curriculum Vitae Web – Andrés Aguiar, construida en HTML, CSS y JavaScript como muestra práctica de competencias técnicas en desarrollo web y gestión de proyectos TI.",
        "Construcción de interfaces modernas, adaptables y con estándares accesibles de navegación."
      ]
    },
    {
      period: "2018 - 2023, Actual",
      role: "Especialista en Minería de Criptomonedas & Operaciones Digitales",
      company: "Operación y Minería de Criptoactivos",
      location: "Puerto Ordaz / Santiago",
      description: "Más de 5 años de experiencia técnica y financiera en la industria de criptoactivos, abarcando infraestructura física de minería y gestión cambiaria.",
      highlights: [
        "Más de 5 años de experiencia en minería de Bitcoin (BTC) y Ethereum (ETH).",
        "Diseño, armado, puesta en marcha y operación continua de Rigs de Minado de Ethereum (GPUs).",
        "Implementación, configuración y gestión de equipos de minería de Bitcoin (ASICs).",
        "Uso avanzado de criptomonedas para intercambio de divisas y operaciones en plataformas como Binance, BTC.com, Uphold y transacciones P2P."
      ]
    },
    {
      period: "2017 - Presente",
      role: "Programador Python & Especialista en Sistemas Administrativos",
      company: "Proyectos Independientes / Mini Market Don Andres CA",
      location: "Puerto Ordaz, Bolívar / Santiago, Chile",
      description: "Aprendizaje continuo autodidacta y desarrollo de software moderno con Python en Visual Studio Code. Desarrollo y mantenimiento de soluciones de software para el sector comercial y administrativo.",
      highlights: [
        "Desarrollo con Python y SQL del módulo de Operación MultiMoneda para el Sistema Administrativo SAINT V 9.035, en operación activa en 'Mini Market Don Andres CA'.",
        "Implementación de consultas y sincronización transaccional con SQL Server.",
        "Exploración y uso de frameworks e interfaces modernas como Django y Reflex."
      ]
    },
    {
      period: "2013 - 2018",
      role: "Jefe de División Soporte Técnico",
      company: "CVG ALCASA (Gerencia de Sistemas)",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Dirección general de las áreas operativas de soporte técnico corporativo para la empresa estatal productora de aluminio primario.",
      highlights: [
        "Coordinación integral de las operaciones de todas las áreas que conforman la División de Soporte Técnico.",
        "Gestión y toma de decisiones en la compra de software y equipamiento tecnológico necesario para la Gerencia de Sistemas.",
        "Establecimiento de relaciones técnicas y operativas con proveedores y empresas hermanas del conglomerado CVG para el desarrollo de proyectos comunes."
      ]
    },
    {
      period: "2000 - 2012",
      role: "Jefe de División Centro de Apoyo al Usuario",
      company: "CVG ALCASA (Gerencia de Sistemas y Organización)",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Liderazgo de la mesa de ayuda y centro de atención tecnológica para usuarios de todas las áreas organizacionales.",
      highlights: [
        "Recepción, control, resolución y seguimiento integral a solicitudes de servicio de TI de la empresa.",
        "Administración, compras y actualización de software y parque de microcomputadores corporativos.",
        "Supervisión y gestión del personal técnico asignado a la atención de usuarios."
      ]
    },
    {
      period: "1990 - 1995",
      role: "Analista Superior de Información",
      company: "CVG ALCASA",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Análisis, modelado de sistemas de información estratégicos y formulación presupuestaria para la toma de decisiones gerenciales.",
      highlights: [
        "Desarrollo e implementación del 'Sistema para Emisión de Tarjetas de Identidad de ALCASA' en tecnología Natural-Dbase.",
        "Desarrollo, implementación y operación del 'Sistema Simulación de Contrato Colectivo ALCASA 1.990' con software de simulación IFPS.",
        "Desarrollo y puesta en marcha del 'Sistema de Formulación del Presupuesto 1.992'."
      ]
    },
    {
      period: "1985 - 1989",
      role: "Analista Programador II",
      company: "CVG ALCASA",
      location: "Puerto Ordaz, Bolívar, Venezuela",
      description: "Mantenimiento, optimización y programación de los sistemas administrativos críticos de la empresa.",
      highlights: [
        "Mantenimiento continuo de los sistemas de Cuentas por Pagar, Cuentas por Cobrar, Nóminas, Emisión de Cheques, Sistema de Personal, Presupuesto, Costos y Contabilidad General.",
        "Coordinación y programación del nuevo Sistema de Nómina corporativo en Adabas/Natural."
      ]
    }
  ],

  educationAndCerts: {
    education: [
      {
        title: "Analista de Sistemas (1° en su Promoción)",
        institution: "Universidad Centroccidental Lisandro Alvarado (UCLA)",
        location: "Barquisimeto, Lara, Venezuela",
        year: "1979 - 1982",
        distinction: "Índice Académico 3.55 / 4.00 — Primer Lugar de la Promoción"
      }
    ],
    certifications: [
      {
        name: "Desarrollo Web (HTML, CSS, JavaScript)",
        issuer: "Proyectos Prácticos & Soluciones Digitales",
        badge: "Aplicaciones Activas",
        year: "Actualidad"
      },
      {
        name: "Minería de Criptomonedas (BTC / ETH) & Finanzas P2P",
        issuer: "Operación de Rigs de GPU / ASICs & Plataformas",
        badge: "+5 Años de Experiencia",
        year: "2018 - 2023, Actual"
      },
      {
        name: "Programación en Python & SQL Server",
        issuer: "Formación Continua Autodidacta / Proyectos Prácticos",
        badge: "Activo / En Producción",
        year: "2017 - Presente"
      },
      {
        name: "Liderazgo en Soporte Técnico & Help Desk",
        issuer: "CVG ALCASA - Gerencia de Sistemas",
        badge: "Trayectoria Comprobada",
        year: "2000 - 2018"
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
