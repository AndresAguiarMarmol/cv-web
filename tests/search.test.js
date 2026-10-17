const test = require('node:test');
const assert = require('node:assert/strict');
const {
  normalizarTexto,
  escaparRegex,
  coincideTexto,
  resaltarCoincidencias,
  filtrarHabilidades,
  filtrarProyectos,
  filtrarExperiencia,
  calcularTotalCoincidencias
} = require('../assets/js/search.js');

test('normalizarTexto: elimina tildes, convierte a minúsculas y recorta espacios', () => {
  assert.equal(normalizarTexto('  Gestión Ágil  '), 'gestion agil');
  assert.equal(normalizarTexto('INTELIGENCIA ARTIFICIAL'), 'inteligencia artificial');
  assert.equal(normalizarTexto('C++ y C#'), 'c++ y c#');
  assert.equal(normalizarTexto(''), '');
  assert.equal(normalizarTexto(null), '');
});

test('escaparRegex: escapa caracteres especiales para evitar inyecciones o errores', () => {
  assert.equal(escaparRegex('c++'), 'c\\+\\+');
  assert.equal(escaparRegex('saint.*'), 'saint\\.\\*');
  assert.equal(escaparRegex('normal'), 'normal');
});

test('coincideTexto: evalúa presencia de término independientemente de mayúsculas y acentos', () => {
  assert.equal(coincideTexto('Desarrollo en Python y SQL Server', 'python'), true);
  assert.equal(coincideTexto('Liderazgo y Gestión de Operaciones', 'gestion'), true);
  assert.equal(coincideTexto('Optimización de base de datos', 'OPTIMIZACION'), true);
  assert.equal(coincideTexto('Saint ERP', 'SAP'), false);
  assert.equal(coincideTexto('', 'algo'), false);
});

test('resaltarCoincidencias: envuelve coincidencias con <mark> respetando el casing original', () => {
  const fuente = 'Experto en Python y desarrollo en PYTHON moderno';
  const resaltado = resaltarCoincidencias(fuente, 'python');
  assert.match(resaltado, /<mark[^>]*>Python<\/mark>/);
  assert.match(resaltado, /<mark[^>]*>PYTHON<\/mark>/);
  // Si no hay coincidencia, devuelve el texto original
  assert.equal(resaltarCoincidencias('Sin cambios', 'inexistente'), 'Sin cambios');
  // Si la búsqueda es vacía o muy corta
  assert.equal(resaltarCoincidencias('Texto', ''), 'Texto');
});

test('filtrarHabilidades: filtra categorías y devuelve solo las habilidades coincidentes', () => {
  const skills = {
    'Lenguajes': ['Python 3.x', 'SQL', 'Bash', 'JavaScript'],
    'Gestión': ['Scrum Master', 'ITIL v4', 'Gestión de Equipos']
  };

  const resultadoPython = filtrarHabilidades(skills, 'python');
  assert.deepEqual(resultadoPython, {
    'Lenguajes': ['<mark class="search-highlight">Python</mark> 3.x']
  });

  const resultadoGestion = filtrarHabilidades(skills, 'gestion');
  assert.deepEqual(resultadoGestion, {
    'Gestión': ['<mark class="search-highlight">Gestión</mark> de Equipos']
  });

  const resultadoNada = filtrarHabilidades(skills, 'noexiste');
  assert.deepEqual(resultadoNada, {});
});

test('filtrarProyectos: aplica filtro cruzado de categoría y búsqueda textual', () => {
  const projects = [
    {
      id: 'p1',
      title: 'Módulo Multimoneda SAINT ERP',
      category: 'python',
      description: 'Automatización financiera con Python y SQL Server',
      tags: ['Python', 'SQL Server', 'ERP']
    },
    {
      id: 'p2',
      title: 'Halterofilia Pro',
      category: 'ai',
      description: 'Plataforma con Inteligencia Artificial para levantamiento olímpico',
      tags: ['IA', 'Computer Vision', 'Python']
    },
    {
      id: 'p3',
      title: 'Soporte TI ALCASA',
      category: 'core',
      description: 'Gestión de soporte industrial en CVG ALCASA',
      tags: ['Soporte', 'Help Desk']
    }
  ];

  // Búsqueda "python" en categoría "all"
  const res1 = filtrarProyectos(projects, 'all', 'python');
  assert.equal(res1.length, 2);
  assert.equal(res1[0].id, 'p1');
  assert.equal(res1[1].id, 'p2');

  // Búsqueda "python" en categoría "ai" (filtro cruzado)
  const res2 = filtrarProyectos(projects, 'ai', 'python');
  assert.equal(res2.length, 1);
  assert.equal(res2[0].id, 'p2');

  // Búsqueda "alcasa" en categoría "all"
  const res3 = filtrarProyectos(projects, 'all', 'alcasa');
  assert.equal(res3.length, 1);
  assert.equal(res3[0].id, 'p3');

  // Búsqueda sin coincidencias
  const res4 = filtrarProyectos(projects, 'all', 'inexistente');
  assert.equal(res4.length, 0);
});

test('filtrarExperiencia: filtra experiencias laborales evaluando rol, empresa, descripción y logros', () => {
  const experiences = [
    {
      company: 'CVG ALCASA',
      role: 'Jefe de División Soporte Técnico',
      description: 'Liderazgo de operaciones de infraestructura y help desk',
      highlights: ['Implementación de mesa de ayuda', 'Reducción de incidentes en 40%']
    },
    {
      company: 'Mini Market Don Andrés C.A.',
      role: 'Vicepresidente de Operaciones',
      description: 'Gestión tecnológica y financiera del negocio',
      highlights: ['Integración del sistema Saint ERP', 'Operación de hardware']
    }
  ];

  const res1 = filtrarExperiencia(experiences, 'alcasa');
  assert.equal(res1.length, 1);
  assert.equal(res1[0].company, 'CVG <mark class="search-highlight">ALCASA</mark>');

  const res2 = filtrarExperiencia(experiences, 'saint');
  assert.equal(res2.length, 1);
  assert.equal(res2[0].company, 'Mini Market Don Andrés C.A.');

  const res3 = filtrarExperiencia(experiences, 'nada');
  assert.equal(res3.length, 0);
});

test('calcularTotalCoincidencias: suma exactamente habilidades, proyectos y experiencias', () => {
  const habilidades = { 'Lenguajes': ['Python'], 'Datos': ['SQL', 'PostgreSQL'] }; // 3
  const proyectos = [{ id: 'p1' }, { id: 'p2' }]; // 2
  const experiencias = [{ company: 'Empresa 1' }]; // 1

  const total = calcularTotalCoincidencias(habilidades, proyectos, experiencias);
  assert.equal(total, 6);
});
