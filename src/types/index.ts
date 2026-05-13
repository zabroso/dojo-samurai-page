// Wrapper genérico para cuando los carruseles consuman una API real.
// Cambiar mock data por fetch() sin tocar los componentes.
export interface ApiResponse<T> {
  data: T[]
  total: number
  page: number
}

export interface NewsItem {
  id: string
  title: string
  description: string
  date: string
  imageUrl: string
  category: string
}

export interface School {
  id: string
  name: string
  logoUrl: string
  city?: string
}

export interface Benefit {
  id: string
  icon: string
  title: string
  description: string
}

export interface Program {
  id: string
  ageRange: string
  label: string
  name: string
  features: string[]
  imageUrl: string
  whatsappMessage: string
  featured?: boolean
}

export interface ScheduleBlock {
  hora: string
  slots: Array<string | null>
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatarUrl: string
}

export interface InstitutionalTestimonial {
  id: string
  quote: string
  author: string
  role: string
  icon: string
}
