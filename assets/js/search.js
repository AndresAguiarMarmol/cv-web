/**
 * assets/js/search.js
 * Funciones puras de normalización, coincidencia, resaltado y filtrado
 * para el portfolio de Andres Aguiar (CV Web).
 * Compatible con Node.js (CommonJS) y navegador (objeto global).
 */

(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else {
    root.SearchModule = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  /**
   * Normaliza una cadena eliminando acentos/diacríticos, convirtiendo a minúsculas y recortando espacios.
   * @param {string} texto
   * @returns {string}
   */
  function normalizarTexto(texto) {
    if (!texto || typeof texto !== 'string') return '';
    return texto
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Escapa caracteres especiales de expresiones regulares para evitar inyecciones o errores.
   * @param {string} texto
   * @returns {string}
   */
  function escaparRegex(texto) {
    if (!texto || typeof texto !== 'string') return '';
    return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Construye un patrón regex que tolera acentos en vocales comunes del español.
   * @param {string} busqueda
   * @returns {string}
   */
  function construirPatronAcentos(busqueda) {
    const mapa = {
      'a': '[aáàäâAÁÀÄÂ]',
      'e': '[eéèëêEÉÈËÊ]',
      'i': '[iíìïîIÍÌÏÎ]',
      'o': '[oóòöôOÓÒÖÔ]',
      'u': '[uúùüûUÚÙÜÛ]'
    };
    const escapada = escaparRegex(busqueda);
    let patron = '';
    for (let i = 0; i < escapada.length; i++) {
      const char = escapada[i];
      const lower = char.toLowerCase();
      if (mapa[lower]) {
        patron += mapa[lower];
      } else {
        patron += char;
      }
    }
    return patron;
  }

  /**
   * Determina si el texto de origen contiene el término de búsqueda de forma tolerante.
   * @param {string} fuente
   * @param {string} busqueda
   * @returns {boolean}
   */
  function coincideTexto(fuente, busqueda) {
    if (!fuente || !busqueda) return false;
    const fuenteNorm = normalizarTexto(fuente);
    const busquedaNorm = normalizarTexto(busqueda);
    if (!busquedaNorm) return false;
    return fuenteNorm.includes(busquedaNorm);
  }

  /**
   * Envuelve las coincidencias con <mark class="search-highlight"> preservando el casing original.
   * @param {string} textoOriginal
   * @param {string} busqueda
   * @returns {string}
   */
  function resaltarCoincidencias(textoOriginal, busqueda) {
    if (!textoOriginal || typeof textoOriginal !== 'string') return '';
    const busquedaLimpia = normalizarTexto(busqueda);
    if (!busquedaLimpia) return textoOriginal;

    try {
      const patron = construirPatronAcentos(busqueda.trim());
      const regex = new RegExp(patron, 'gi');
      return textoOriginal.replace(regex, '<mark class="search-highlight">$&</mark>');
    } catch (e) {
      return textoOriginal;
    }
  }

  /**
   * Filtra las habilidades técnicas agrupadas por categorías.
   * @param {Object} technicalSkills
   * @param {string} busqueda
   * @returns {Object} Categorías con habilidades filtradas y resaltadas
   */
  function filtrarHabilidades(technicalSkills, busqueda) {
    if (!technicalSkills || typeof technicalSkills !== 'object') return {};
    const terminoLimpio = normalizarTexto(busqueda);
    if (!terminoLimpio) return technicalSkills;

    const resultado = {};
    for (const [categoria, skills] of Object.entries(technicalSkills)) {
      if (!Array.isArray(skills)) continue;
      const skillsCoincidentes = [];
      for (const skill of skills) {
        if (coincideTexto(skill, terminoLimpio)) {
          skillsCoincidentes.push(resaltarCoincidencias(skill, busqueda));
        }
      }
      if (skillsCoincidentes.length > 0) {
        resultado[categoria] = skillsCoincidentes;
      }
    }
    return resultado;
  }

  /**
   * Filtra los proyectos aplicando filtro cruzado de categoría y búsqueda textual.
   * @param {Array} projects
   * @param {string} categoria ('all' o ID de categoría)
   * @param {string} busqueda
   * @returns {Array} Proyectos filtrados con campos coincidentes resaltados
   */
  function filtrarProyectos(projects, categoria, busqueda) {
    if (!Array.isArray(projects)) return [];
    const catLimpia = (categoria || 'all').toLowerCase();
    const terminoLimpio = normalizarTexto(busqueda);

    return projects.filter(proyecto => {
      // 1. Filtro de categoría (compatible con category y filterCategory)
      const coincideCategoria = catLimpia === 'all' ||
        (proyecto.filterCategory && proyecto.filterCategory.toLowerCase() === catLimpia) ||
        (catLimpia === 'dev' && (proyecto.filterCategory === 'dev' || proyecto.filterCategory === 'erp')) ||
        (proyecto.category && proyecto.category.toLowerCase() === catLimpia);
      if (!coincideCategoria) return false;

      // 2. Si no hay búsqueda de texto, pasa el filtro de categoría
      if (!terminoLimpio) return true;

      // 3. Evaluar campos del proyecto
      const enTitulo = coincideTexto(proyecto.title, terminoLimpio);
      const enDescripcion = coincideTexto(proyecto.description, terminoLimpio);
      const enBadge = coincideTexto(proyecto.badge, terminoLimpio);
      const enTag = coincideTexto(proyecto.tag, terminoLimpio);
      const enImpact = coincideTexto(proyecto.impact, terminoLimpio);
      const enVisualBadge = coincideTexto(proyecto.visualBadge, terminoLimpio);
      const enResumen = coincideTexto(proyecto.summary, terminoLimpio);
      const enTags = Array.isArray(proyecto.tags) && proyecto.tags.some(t => coincideTexto(t, terminoLimpio));
      const enTechStack = Array.isArray(proyecto.techStack) && proyecto.techStack.some(t => coincideTexto(t, terminoLimpio));
      const enChallenge = coincideTexto(proyecto.challenge, terminoLimpio);
      const enSolution = coincideTexto(proyecto.solution, terminoLimpio);
      const enResults = coincideTexto(proyecto.results, terminoLimpio);
      const enStar = proyecto.star && (
        coincideTexto(proyecto.star.situation, terminoLimpio) ||
        coincideTexto(proyecto.star.task, terminoLimpio) ||
        coincideTexto(proyecto.star.action, terminoLimpio) ||
        coincideTexto(proyecto.star.result, terminoLimpio)
      );

      return enTitulo || enDescripcion || enBadge || enTag || enImpact || enVisualBadge || enResumen || enTags || enTechStack || enChallenge || enSolution || enResults || enStar;
    }).map(proyecto => {
      if (!terminoLimpio) return proyecto;
      // Clonar y resaltar
      return {
        ...proyecto,
        title: resaltarCoincidencias(proyecto.title, busqueda),
        description: resaltarCoincidencias(proyecto.description, busqueda),
        summary: resaltarCoincidencias(proyecto.summary, busqueda),
        impact: resaltarCoincidencias(proyecto.impact, busqueda),
        badge: resaltarCoincidencias(proyecto.badge, busqueda),
        tag: resaltarCoincidencias(proyecto.tag, busqueda),
        tags: Array.isArray(proyecto.tags) ? proyecto.tags.map(t => resaltarCoincidencias(t, busqueda)) : [],
        techStack: Array.isArray(proyecto.techStack) ? proyecto.techStack.map(t => resaltarCoincidencias(t, busqueda)) : []
      };
    });
  }

  /**
   * Filtra las experiencias laborales evaluando rol, empresa, descripción y logros.
   * @param {Array} experience
   * @param {string} busqueda
   * @returns {Array} Experiencias filtradas y resaltadas
   */
  function filtrarExperiencia(experience, busqueda) {
    if (!Array.isArray(experience)) return [];
    const terminoLimpio = normalizarTexto(busqueda);
    if (!terminoLimpio) return experience;

    return experience.filter(exp => {
      const enEmpresa = coincideTexto(exp.company, terminoLimpio);
      const enRol = coincideTexto(exp.role, terminoLimpio);
      const enDescripcion = coincideTexto(exp.description, terminoLimpio);
      const enLogros = Array.isArray(exp.highlights) && exp.highlights.some(h => coincideTexto(h, terminoLimpio));
      return enEmpresa || enRol || enDescripcion || enLogros;
    }).map(exp => {
      return {
        ...exp,
        company: resaltarCoincidencias(exp.company, busqueda),
        role: resaltarCoincidencias(exp.role, busqueda),
        description: resaltarCoincidencias(exp.description, busqueda),
        highlights: Array.isArray(exp.highlights) ? exp.highlights.map(h => resaltarCoincidencias(h, busqueda)) : []
      };
    });
  }

  /**
   * Suma el total de elementos coincidentes encontrados en las tres áreas.
   * @param {Object} habilidades
   * @param {Array} proyectos
   * @param {Array} experiencias
   * @returns {number}
   */
  function calcularTotalCoincidencias(habilidades, proyectos, experiencias) {
    let total = 0;
    if (habilidades && typeof habilidades === 'object') {
      for (const list of Object.values(habilidades)) {
        if (Array.isArray(list)) total += list.length;
      }
    }
    if (Array.isArray(proyectos)) total += proyectos.length;
    if (Array.isArray(experiencias)) total += experiencias.length;
    return total;
  }

  return {
    normalizarTexto,
    escaparRegex,
    coincideTexto,
    resaltarCoincidencias,
    filtrarHabilidades,
    filtrarProyectos,
    filtrarExperiencia,
    calcularTotalCoincidencias
  };
});
