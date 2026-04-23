import { useState } from 'react'
import type { ApiResponse, NewsItem } from '../../types/index'

interface Props {
  // Acepta ApiResponse<NewsItem> para ser compatible con el fetch real cuando esté listo.
  // En mock, se pasa mockNewsResponse directamente.
  initialData: ApiResponse<NewsItem>
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsCarousel({ initialData }: Props) {
  const items = initialData.data
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === items.length - 1 ? 0 : i + 1))

  const active = items[activeIndex]

  return (
    <div className="relative">
      {/* Main card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden border border-border shadow-sm">
        <div className="h-64 md:h-auto overflow-hidden">
          <img
            src={active.imageUrl}
            alt={active.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-jka-red/10 text-jka-red px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full mb-4">
              {active.category}
            </span>
            <h3 className="font-h-display text-3xl text-ink mb-3">{active.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{active.description}</p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-[11px] text-muted font-bold uppercase tracking-widest">
              {formatDate(active.date)}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Noticia anterior"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-jka-red hover:text-jka-red transition-colors"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button
                onClick={next}
                aria-label="Siguiente noticia"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-jka-red hover:text-jka-red transition-colors"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Ir a noticia ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? 'bg-jka-red w-6' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
