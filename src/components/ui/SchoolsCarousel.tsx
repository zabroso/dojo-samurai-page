import { useRef } from 'react'
import type { ApiResponse, School } from '../../types/index'

interface Props {
  initialData: ApiResponse<School>
}

export default function SchoolsCarousel({ initialData }: Props) {
  const schools = initialData.data
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = 200
    trackRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex items-center gap-12 overflow-x-auto scrollbar-hide py-4 px-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {schools.map((school) => (
          <div
            key={school.id}
            className="flex-shrink-0 flex flex-col items-center gap-3 group"
            title={school.name}
          >
            <div className="h-12 w-32 flex items-center justify-center opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
              <img
                src={school.logoUrl}
                alt={school.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                onError={(e) => {
                  // Fallback si el logo no existe aún
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              {/* Placeholder mientras no hay logo real */}
              <div
                className="hidden w-full h-full items-center justify-center bg-surface rounded border border-border"
                aria-hidden="true"
              >
                <span className="text-[10px] text-muted font-bold text-center px-2 leading-tight">
                  {school.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        aria-label="Anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:border-jka-red hover:text-jka-red transition-colors"
      >
        <span className="material-symbols-outlined text-base">chevron_left</span>
      </button>
      <button
        onClick={() => scroll('right')}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:border-jka-red hover:text-jka-red transition-colors"
      >
        <span className="material-symbols-outlined text-base">chevron_right</span>
      </button>
    </div>
  )
}
