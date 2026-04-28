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
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCucCf6ucpqk5kkNHPBPJ6c2BnKQaUojANqkCs2gR5Llfkffn80fddVdn4Sgv2ROjh-KPy87bJUUHK3jPkOhzOSHXwZcfnhKFtloKYzNNKD-j9RcCdDWwVkhNpvjEV2I-DpurIBnqI4ucta78SwAwCCB3ik77I8vbl7K2KfhNCZrm5RNvlCWqlwTczgos1SAxZTqFdXnQp6Obk4VBnQ5R6G4BxsAKMkwdHJVfOhy5Jl4p4r9wvSjCovdCzRpt3veXsWSzmCoglgZ7No',
      category: 'Exámenes',
    },
    {
      id: '2',
      title: 'Seminario con instructor internacional',
      description: 'Recibimos la visita de un instructor de nivel internacional en nuestro Honbu Dojo. Una jornada histórica para la escuela.',
      date: '2026-02-20',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP0qATlynqKkvC8fTYT2qxKmCGSs206UANLjDnR0OgFVqxuhbtXzMAFnoKLJRJvoH5teK_C1wEftvz6-2L8UcMryco_jNgQkXDwxGOzH-FIanvNOmO5IcCrRYsH1ZE3ja8rhtDef0ShYsfN0M0nNjY-Xa6OtgxIq4Q5q00Y4paFr6Sv5uZQI3H2xi2LU12T92L6xk698l9gSnP8EAUzV69BpeWIAuH39jYlsPEDKg-9lqLW__FVBPx2mcK3a7vqDCruDxWFAepOA3D',
      category: 'Seminarios',
    },
    {
      id: '3',
      title: 'Nuevo curso juvenil introductorio',
      description: 'Abrimos inscripciones para el nuevo grupo juvenil desde cero. Jóvenes entre 13 y 17 años, Martes y Jueves 18:00 hrs.',
      date: '2026-02-01',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH4LoDRm0v_CBwRif6pIxItGwKnszTyvEyPuSJaM6Tdcm208HQpqF7gAlCo9FTqcmKSmXGzpyEa2ZYwFEXEONLVy7NRoTD6fmI0LF75RjL_DFjLO4nAgpaW2TUutoCS3sMl8dazY0YbC4avBnFTFgDhwOJR0zPKWMgPExCZSRjGwHxcWJqn031hhE95Q6Jrt1UXg12a6G8O6UgZZov_l20QpGAWIs4JYkA35_K-iLo5KtEcV9_XGjzUcjfiVFvnw7RYj7HWsp9u5ED',
      category: 'Cursos',
    },
    {
      id: '4',
      title: 'Karate inclusivo en Colegio Renacer',
      description: 'Expandimos nuestro programa de karate inclusivo al Colegio Renacer bajo la coordinación de Ivette Mancilla.',
      date: '2026-01-10',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6iFpYEZMV5QhfTHmVSGEWZJNxXDCIGV-J4w2UnavwSQ3FhOBkaVHwXSFTNksRgW2UFK9y5oRgzFgW3XWslhDtaQWJIRJICxAU7OKuFIbaKPZn2st63pFsGAqu5hVAVSds0R1vB0oxyKVO0jTCAgItniZyDivH1Rdv-wLF9L1mEmt1PL6nQHLdvF7iufFHfCGwQg9OZ3qom06M5CwYU2e8pvIWKM6YQlSJar28tvXVBBSbDHWJcS3zALV7vVe-UA5ay_4wUk-bdvgW',
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
    { id: '3', name: 'Colegio Blanca Vergara', logoUrl: '/images/schools/blanca-vergara.png', city: 'Viña del Mar' },
    { id: '4', name: 'Colegio San Ignacio', logoUrl: '/images/schools/san-ignacio.png', city: 'Viña del Mar' },
    { id: '5', name: 'Escuela Villa Independencia', logoUrl: '/images/schools/villa-independencia.png', city: 'Viña del Mar' },
    { id: '6', name: 'Corporación Renacer', logoUrl: '/images/schools/renacer.png', city: 'Viña del Mar' },
  ],
  total: 6,
  page: 1,
}
