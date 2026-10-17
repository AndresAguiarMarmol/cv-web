const test = require('node:test');
const assert = require('node:assert/strict');
const {
  esIdiomaValido,
  resolverIdiomaInicial,
  obtenerTraduccion,
  obtenerDiccionario,
  CLAVE_IDIOMA,
  IDIOMAS_SOPORTADOS
} = require('../assets/js/i18n.js');

test('esIdiomaValido: valida únicamente "es" y "en"', () => {
  assert.equal(esIdiomaValido('es'), true);
  assert.equal(esIdiomaValido('en'), true);
  assert.equal(esIdiomaValido('fr'), false);
  assert.equal(esIdiomaValido(''), false);
  assert.equal(esIdiomaValido(null), false);
});

test('resolverIdiomaInicial: prioriza preferencia guardada válida', () => {
  assert.equal(resolverIdiomaInicial('en', 'es-ES'), 'en');
  assert.equal(resolverIdiomaInicial('es', 'en-US'), 'es');
});

test('resolverIdiomaInicial: si no hay guardado, detecta idioma inglés de navegador', () => {
  assert.equal(resolverIdiomaInicial(null, 'en-US'), 'en');
  assert.equal(resolverIdiomaInicial(null, 'en-GB'), 'en');
  assert.equal(resolverIdiomaInicial(null, 'en'), 'en');
});

test('resolverIdiomaInicial: recurre a español por defecto', () => {
  assert.equal(resolverIdiomaInicial(null, 'es-CL'), 'es');
  assert.equal(resolverIdiomaInicial(null, 'fr-FR'), 'es');
  assert.equal(resolverIdiomaInicial(null, ''), 'es');
  assert.equal(resolverIdiomaInicial('invalido', 'en-US'), 'en');
  assert.equal(resolverIdiomaInicial('invalido', 'es-ES'), 'es');
});

test('obtenerTraduccion: devuelve texto según clave e idioma, con fallback a español', () => {
  assert.equal(obtenerTraduccion('nav_projects', 'es'), 'Proyectos');
  assert.equal(obtenerTraduccion('nav_projects', 'en'), 'Projects');
  // Fallback si no existe traducción en inglés
  assert.equal(obtenerTraduccion('clave_inexistente', 'en'), '');
});

test('obtenerDiccionario: comprueba paridad entre catálogo español e inglés', () => {
  const dictEs = obtenerDiccionario('es');
  const dictEn = obtenerDiccionario('en');

  assert.ok(dictEs);
  assert.ok(dictEn);

  const clavesEs = Object.keys(dictEs);
  const clavesEn = Object.keys(dictEn);

  // Ambas listas deben tener las mismas claves
  assert.equal(clavesEs.length > 0, true);
  assert.deepEqual(clavesEs.sort(), clavesEn.sort());
});
