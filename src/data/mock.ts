// Datos mockeados para los carruseles.
// Cuando la API esté lista, reemplazar estas constantes por fetch() en el componente
// que use ApiResponse<T> como tipo de retorno — las props de los islands no cambian.

import type { ApiResponse, NewsItem, School } from '../types/index'

export const mockNewsResponse: ApiResponse<NewsItem> = {
  data: [
    {
      id: '1',
      title: 'Examen de grado marzo 2026',
      description: 'Alumnos de todos los niveles rindieron sus exámenes de Kyu en el Honbu Dojo bajo la supervisión de Sensei Puchi.',
      date: '2026-03-15',
      imageUrl: '/images/placeholder-exam.jpg',
      category: 'Exámenes',
    },
    {
      id: '2',
      title: 'Seminario con instructor internacional',
      description: 'Recibimos la visita de un instructor de nivel internacional en nuestro Honbu Dojo. Una jornada histórica para la escuela.',
      date: '2026-02-20',
      imageUrl: '/images/placeholder-seminar.jpg',
      category: 'Seminarios',
    },
    {
      id: '3',
      title: 'Nuevo curso juvenil introductorio',
      description: 'Abrimos inscripciones para el nuevo grupo juvenil desde cero. Jóvenes entre 13 y 17 años, Martes y Jueves 18:00 hrs.',
      date: '2026-02-01',
      imageUrl: '/images/placeholder-youth.jpg',
      category: 'Cursos',
    },
    {
      id: '4',
      title: 'Karate inclusivo en Colegio Renacer',
      description: 'Expandimos nuestro programa de karate inclusivo al Colegio Renacer bajo la coordinación de Ivette Mancilla.',
      date: '2026-01-10',
      imageUrl: '/images/placeholder-inclusive.jpg',
      category: 'Inclusión',
    },
  ],
  total: 4,
  page: 1,
}

export const mockSchoolsResponse: ApiResponse<School> = {
  data: [
    { id: '1', name: 'Colegio Saint Dominic', logoUrl: '/images/schools/saint-dominic.png', city: 'Viña del Mar' },
    { id: '2', name: 'Scuola Italiana Valparaíso', logoUrl: '/images/schools/scuola-italiana-vpo.png', city: 'Valparaíso' },
    { id: '3', name: 'Scuola Italiana Viña del Mar', logoUrl: '/images/schools/scuola-italiana-vdm.png', city: 'Viña del Mar' },
    { id: '4', name: 'Colegio Blanca Vergara', logoUrl: '/images/schools/blanca-vergara.png', city: 'Viña del Mar' },
    { id: '5', name: 'Colegio San Ignacio', logoUrl: '/images/schools/san-ignacio.png', city: 'Viña del Mar' },
    { id: '6', name: 'Escuela Villa Independencia', logoUrl: '/images/schools/villa-independencia.png', city: 'Viña del Mar' },
    { id: '7', name: 'Colegio Renacer', logoUrl: '/images/schools/renacer.png', city: 'Viña del Mar' },
  ],
  total: 7,
  page: 1,
}
