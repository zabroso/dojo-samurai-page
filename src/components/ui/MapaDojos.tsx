import { useState, useEffect, useRef } from 'react'

interface DojoData {
  id: string
  name: string
  instructor: string
  dan: string
  address?: string
  phone?: string
  instagram?: string
  regionId: string
  svgX: number
  svgY: number
}

interface RegionData {
  id: string
  name: string
  points: string
  dojos: DojoData[]
}

const DOJOS: DojoData[] = [
  // Región de Valparaíso
  { id: 'honbu',          name: 'Samurai Honbu Dojo',           instructor: 'Raúl Puchi Zarecht', dan: '6to Dan JKA', address: 'Los Baños #55, sector Recreo, Viña del Mar', phone: '+56 9 8261 0309',  regionId: 'valparaiso', svgX: 10, svgY: 335 },
  { id: 'renaca',         name: 'Dojo Samurai Reñaca',           instructor: 'Carlos Jiménez',     dan: '5to Dan JKA', regionId: 'valparaiso', svgX: 9,  svgY: 330 },
  { id: 'concon',         name: 'Dojo Samurai Reñaca / Concón',  instructor: 'Daniel Fuentes',     dan: '3er Dan JKA', address: 'Av. Gastón Hamel Nieto #260, LC09, Viña del Mar', phone: '+56 9 4526 2334', instagram: '@karate_do_jka_concon', regionId: 'valparaiso', svgX: 8,  svgY: 325 },
  { id: 'quilpue',        name: 'Dojo Samurai Quilpué',          instructor: 'Solange Sandoval',   dan: '2do Dan',     regionId: 'valparaiso', svgX: 28, svgY: 338 },
  { id: 'renaca-alto',    name: 'Dojo Samurai Reñaca Alto',      instructor: 'Marcos González',    dan: '2do Dan',     regionId: 'valparaiso', svgX: 20, svgY: 332 },
  { id: 'quillota',       name: 'Dojo Samurai Quillota',         instructor: 'José González',      dan: '4to Dan JKA', regionId: 'valparaiso', svgX: 38, svgY: 322 },
  { id: 'nueva-aurora',   name: 'Dojo Samurai Nueva Aurora',     instructor: 'Leonel Sánchez',     dan: '—',           regionId: 'valparaiso', svgX: 16, svgY: 340 },
  { id: 'olmue',          name: 'Dojo Samurai Olmué',            instructor: 'Yuri Pivet Baeza',   dan: '2do Dan',     regionId: 'valparaiso', svgX: 42, svgY: 335 },
  { id: 'penablanca',     name: 'Dojo Samurai Peñablanca',       instructor: 'Andrés Castro',      dan: '2do Dan',     regionId: 'valparaiso', svgX: 32, svgY: 342 },
  { id: 'calera',         name: 'Centro de Estudios La Calera',  instructor: 'Juan Carvajal',      dan: '4to Dan JKA', regionId: 'valparaiso', svgX: 36, svgY: 318 },
  // Los Lagos
  { id: 'senshi',         name: 'Dojo Samurai Senshi No Te',     instructor: 'Jorge Barría',       dan: '2do Dan',     regionId: 'los-lagos',  svgX: 10, svgY: 558 },
  // Magallanes
  { id: 'punta-arenas',   name: 'Dojo Samurai Punta Arenas',     instructor: 'Ignacio Maquián',    dan: '4to Dan',     regionId: 'magallanes', svgX: 22, svgY: 700 },
  { id: 'puerto-natales', name: 'Dojo Samurai Puerto Natales',   instructor: 'Miguel Ángel Díaz',  dan: '2do Dan',     regionId: 'magallanes', svgX: 20, svgY: 682 },
]

const REGIONS: RegionData[] = [
  { id: 'norte-grande', name: 'Norte Grande',         points: '10,0 100,0 102,163 10,163',         dojos: [] },
  { id: 'norte-chico',  name: 'Norte Chico',          points: '10,163 102,163 90,279 10,279',       dojos: [] },
  { id: 'valparaiso',   name: 'Región de Valparaíso', points: '8,279 90,279 75,385 8,385',          dojos: DOJOS.filter(d => d.regionId === 'valparaiso') },
  { id: 'centro',       name: 'Zona Central y Sur',   points: '5,385 75,385 58,530 2,530',          dojos: [] },
  { id: 'los-lagos',    name: 'Los Lagos',             points: '0,530 58,530 48,600 0,600',          dojos: DOJOS.filter(d => d.regionId === 'los-lagos') },
  { id: 'aysen',        name: 'Aysén',                 points: '0,600 48,600 42,660 0,660',          dojos: [] },
  { id: 'magallanes',   name: 'Magallanes',            points: '0,660 42,660 35,720 15,735 0,740',   dojos: DOJOS.filter(d => d.regionId === 'magallanes') },
]


const REGIONS_DETAIL: RegionData[] = [
  {
    id: 'arica-y-parinacota',
    name: 'Región de Arica y Parinacota',
    points: `
      92,8 88,14 86,21 83,28 80,34 78,42 76,51 73,59
      71,68 69,75 70,84 74,92 79,99 84,108 88,118
      92,128 98,138 105,145 114,149 121,144 124,135
      126,124 127,111 126,98 124,86 121,73 116,59
      111,47 104,36 98,25
    `,
    dojos: DOJOS.filter(d => d.regionId === 'arica-y-parinacota')
  },

  {
    id: 'tarapaca',
    name: 'Región de Tarapacá',
    points: `
      74,145 69,154 65,164 61,176 58,188 56,201 55,214
      57,226 60,239 65,251 70,262 76,274 83,286 91,295
      101,301 112,305 120,300 125,291 128,279 129,265
      129,251 128,237 126,224 122,211 118,198 112,186
      105,173 97,161 87,151
    `,
    dojos: DOJOS.filter(d => d.regionId === 'tarapaca')
  },

  {
    id: 'antofagasta',
    name: 'Región de Antofagasta',
    points: `
      60,305 55,319 51,333 48,348 45,365 43,382 42,399
      43,417 46,435 51,452 57,468 64,483 72,497 81,510
      91,520 102,527 113,532 124,533 131,524 134,511
      136,496 137,480 136,463 134,445 131,427 126,410
      120,392 113,375 104,359 95,344 85,330 73,317
    `,
    dojos: DOJOS.filter(d => d.regionId === 'antofagasta')
  },

  {
    id: 'atacama',
    name: 'Región de Atacama',
    points: `
      52,533 48,547 45,561 42,576 40,592 39,608 40,624
      43,639 47,654 53,668 60,682 68,694 77,706 87,716
      98,723 110,729 120,731 128,723 132,711 135,697
      136,682 135,666 132,649 128,633 122,617 115,601
      107,586 98,571 88,557 77,545 65,536
    `,
    dojos: DOJOS.filter(d => d.regionId === 'atacama')
  },

  {
    id: 'coquimbo',
    name: 'Región de Coquimbo',
    points: `
      47,731 43,745 39,760 36,776 34,793 34,809 36,825
      40,841 45,856 51,870 58,884 66,896 75,907 85,916
      96,923 108,928 118,930 126,921 131,908 134,893
      136,877 136,860 134,843 130,826 125,810 118,794
      110,779 100,764 89,750 77,739 64,732
    `,
    dojos: DOJOS.filter(d => d.regionId === 'coquimbo')
  },

  {
    id: 'valparaiso',
    name: 'Región de Valparaíso',
    points: `
      40,930 36,943 33,956 31,970 30,985 31,1000 34,1014
      39,1027 45,1039 52,1051 60,1061 69,1070 79,1078
      90,1084 101,1089 111,1092 118,1085 122,1074 124,1061
      125,1047 124,1032 121,1017 117,1002 111,987 104,973
      95,959 85,947 74,937 62,931
    `,
    dojos: DOJOS.filter(d => d.regionId === 'valparaiso')
  },

  {
    id: 'metropolitana',
    name: 'Región Metropolitana de Santiago',
    points: `
      128,1008 135,1016 142,1025 148,1035 153,1047 156,1059
      157,1072 155,1084 151,1096 145,1107 138,1116 129,1123
      119,1126 111,1121 105,1112 101,1101 99,1089 99,1076
      101,1063 105,1051 111,1039 118,1028
    `,
    dojos: DOJOS.filter(d => d.regionId === 'metropolitana')
  },

  {
    id: 'ohiggins',
    name: "Región del Libertador General Bernardo O'Higgins",
    points: `
      48,1095 44,1109 41,1124 39,1140 39,1156 41,1172
      45,1187 51,1201 58,1214 66,1226 75,1236 85,1244
      96,1251 107,1256 117,1258 125,1251 129,1240 131,1227
      131,1213 129,1198 126,1183 121,1168 115,1153 108,1139
      99,1125 89,1113 78,1103 66,1097
    `,
    dojos: DOJOS.filter(d => d.regionId === 'ohiggins')
  },

  {
    id: 'maule',
    name: 'Región del Maule',
    points: `
      45,1258 41,1272 38,1288 36,1305 35,1322 36,1339
      40,1355 45,1371 51,1386 59,1400 68,1413 78,1425
      89,1435 101,1443 113,1449 124,1452 132,1443 136,1430
      138,1414 138,1397 136,1380 132,1362 127,1345 120,1328
      112,1312 102,1296 91,1281 79,1269 66,1260
    `,
    dojos: DOJOS.filter(d => d.regionId === 'maule')
  },

  {
    id: 'nuble',
    name: 'Región de Ñuble',
    points: `
      43,1453 39,1466 36,1480 34,1495 34,1510 36,1525
      40,1539 46,1552 53,1564 61,1575 70,1585 80,1593
      91,1599 102,1603 112,1605 119,1598 123,1588 125,1576
      125,1563 123,1549 120,1535 115,1521 109,1508 101,1495
      92,1483 82,1473 71,1464 58,1457
    `,
    dojos: DOJOS.filter(d => d.regionId === 'nuble')
  },

  {
    id: 'biobio',
    name: 'Región del Biobío',
    points: `
      40,1606 36,1620 33,1635 31,1651 31,1668 34,1685
      39,1701 45,1717 53,1732 62,1745 72,1757 83,1767
      95,1776 107,1783 119,1788 129,1787 136,1778 140,1764
      142,1748 142,1731 140,1713 136,1695 130,1678 123,1661
      114,1645 104,1630 92,1617 79,1607 65,1601
    `,
    dojos: DOJOS.filter(d => d.regionId === 'biobio')
  },

  {
    id: 'araucania',
    name: 'Región de La Araucanía',
    points: `
      45,1788 41,1803 38,1819 36,1836 36,1853 39,1870
      44,1887 51,1902 59,1917 68,1930 79,1942 90,1952
      102,1961 114,1967 126,1971 136,1968 143,1957 147,1942
      149,1925 149,1907 146,1888 141,1869 134,1851 126,1834
      116,1818 105,1804 93,1793 80,1785 66,1781
    `,
    dojos: DOJOS.filter(d => d.regionId === 'araucania')
  },

  {
    id: 'los-rios',
    name: 'Región de Los Ríos',
    points: `
      49,1970 45,1984 42,1999 40,2015 40,2031 43,2046
      48,2061 55,2074 63,2086 72,2097 82,2106 93,2114
      104,2120 115,2124 124,2124 131,2116 135,2105 137,2092
      137,2078 135,2063 131,2048 126,2033 119,2019 111,2005
      101,1992 90,1981 78,1973 64,1969
    `,
    dojos: DOJOS.filter(d => d.regionId === 'los-rios')
  },

  {
    id: 'los-lagos',
    name: 'Región de Los Lagos',
    points: `
      52,2125 48,2140 45,2156 43,2173 43,2191 46,2209
      52,2226 60,2242 69,2257 80,2270 92,2281 105,2290
      118,2296 130,2298 139,2290 145,2277 148,2261 149,2243
      147,2224 143,2205 137,2186 129,2168 119,2151 108,2136
      96,2124 83,2117 69,2114
    `,
    dojos: DOJOS.filter(d => d.regionId === 'los-lagos')
  },

  {
    id: 'aysen',
    name: 'Región de Aysén del General Carlos Ibáñez del Campo',
    points: `
      58,2301 53,2317 49,2334 46,2352 45,2371 47,2390
      52,2409 60,2427 70,2444 82,2459 95,2472 109,2483
      123,2491 136,2496 147,2494 155,2482 160,2465 162,2446
      161,2426 157,2405 151,2384 143,2364 133,2345 121,2328
      107,2313 92,2303 76,2298
    `,
    dojos: DOJOS.filter(d => d.regionId === 'aysen')
  },

  {
    id: 'magallanes',
    name: 'Región de Magallanes y de la Antártica Chilena',
    points: `
      70,2505 63,2522 57,2540 52,2559 49,2579 49,2599
      53,2619 60,2638 70,2656 82,2672 96,2686 111,2697
      126,2706 141,2711 154,2710 164,2698 171,2680 175,2660
      176,2639 173,2617 168,2595 160,2574 150,2554 138,2535
      124,2519 109,2508 92,2502
    `,
    dojos: DOJOS.filter(d => d.regionId === 'magallanes')
  }
]
const FULL_CHILE: [number, number, number, number] = [0, 0, 115, 740]

const REGION_ZOOM: Record<string, [number, number, number, number]> = {
  'valparaiso': [0, 270, 115, 130],
  'los-lagos':  [0, 500, 115, 130],
  'magallanes': [0, 640, 115, 110],
}

type MapState =
  | { type: 'idle' }
  | { type: 'allDojos' }
  | { type: 'region'; regionId: string }
  | { type: 'dojo'; dojoId: string; regionId: string }

const EMPTY_REGION_CENTROIDS: Record<string, [number, number]> = {
  'norte-grande': [55, 81],
  'norte-chico':  [53, 221],
  'centro':       [35, 457],
  'aysen':        [22, 630],
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function LockIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`} pointerEvents="none">
      <path d="M -2 0 L -2 -2.5 A 2 2 0 0 1 2 -2.5 L 2 0" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="-3" y="0" width="6" height="4" rx="0.6" fill="white" fillOpacity="0.35" />
      <circle cx="0" cy="2.2" r="0.8" fill="white" fillOpacity="0.55" />
    </g>
  )
}

// Pin clásico: círculo en la cabeza + aguja delgada apuntando al punto del mapa.
// El tip (punta de la aguja) queda en el origen (cx, cy).
function PinMarker({ cx, cy, isSelected }: { cx: number; cy: number; isSelected: boolean }) {
  const scale = isSelected ? 1.5 : 1
  const fill = isSelected ? '#FFD700' : 'white'
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`} style={{ transition: 'transform 0.3s ease' }}>
      {/* Sombra desplazada para contraste sobre el mapa rojo */}
      <circle cx={0.7} cy={-8.3} r={4.5} fill="rgba(0,0,0,0.35)" />
      <polygon points="0.7,0.8 -0.8,-4.3 2.2,-4.3" fill="rgba(0,0,0,0.35)" />
      {/* Cabeza circular */}
      <circle
        cx={0} cy={-9} r={4.5}
        fill={fill}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="0.4"
        style={{ transition: 'fill 0.3s ease' }}
      />
      {/* Aguja */}
      <polygon
        points="0,0 -1.5,-5 1.5,-5"
        fill={fill}
        style={{ transition: 'fill 0.3s ease' }}
      />
    </g>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-xs text-muted hover:text-jka-red jka-transition mb-8"
    >
      <span className="material-symbols-outlined text-sm leading-none">arrow_back</span>
      Volver
    </button>
  )
}

function IdlePanel({ onViewAll }: { onViewAll: () => void }) {
  return (
    <div className="flex flex-col justify-center h-full px-10 py-16">
      <span className="text-[10px] font-bold uppercase tracking-widest text-jka-red mb-8 block">
        Red de Dojos
      </span>
      <p className="font-h-display text-5xl text-ink uppercase tracking-tight leading-none mb-4">
        Explora nuestra red
      </p>
      <p className="text-muted text-sm leading-relaxed max-w-xs mb-12">
        Haz click en una región del mapa para ver los dojos disponibles, o explora el listado completo.
      </p>
      <button
        onClick={onViewAll}
        className="inline-flex items-center gap-2 text-jka-red font-bold text-sm uppercase tracking-widest jka-transition hover:gap-4 self-start"
      >
        Ver todos los dojos
        <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
      </button>
    </div>
  )
}

function AllDojosPanel({ onBack, onSelectDojo }: { onBack: () => void; onSelectDojo: (dojo: DojoData) => void }) {
  const regionsWithDojos = REGIONS.filter(r => r.dojos.length > 0)
  return (
    <div className="px-10 py-16">
      <BackButton onClick={onBack} />
      <p className="font-h-display text-4xl text-ink uppercase tracking-tight leading-none mb-10">
        Todos los dojos
      </p>
      {regionsWithDojos.map(region => (
        <div key={region.id} className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-jka-red mb-4 block">
            {region.name}
          </span>
          <div className="flex flex-col">
            {region.dojos.map(dojo => (
              <button
                key={dojo.id}
                onClick={() => onSelectDojo(dojo)}
                className="text-left font-bold text-ink text-sm hover:text-jka-red jka-transition py-3 border-b border-border last:border-0 flex items-center justify-between group"
              >
                {dojo.name}
                <span className="material-symbols-outlined text-base text-muted group-hover:text-jka-red jka-transition" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function RegionPanel({ region, onBack, onSelectDojo }: { region: RegionData; onBack: () => void; onSelectDojo: (dojo: DojoData) => void }) {
  return (
    <div className="px-10 py-16">
      <BackButton onClick={onBack} />
      <span className="text-[10px] font-bold uppercase tracking-widest text-jka-red mb-4 block">
        {region.name}
      </span>
      <p className="font-h-display text-4xl text-ink uppercase tracking-tight leading-none mb-10">
        {region.dojos.length} {region.dojos.length === 1 ? 'Dojo' : 'Dojos'}
      </p>
      <div className="flex flex-col">
        {region.dojos.map(dojo => (
          <button
            key={dojo.id}
            onClick={() => onSelectDojo(dojo)}
            className="text-left font-bold text-ink text-sm hover:text-jka-red jka-transition py-3 border-b border-border last:border-0 flex items-center justify-between group"
          >
            {dojo.name}
            <span className="material-symbols-outlined text-base text-muted group-hover:text-jka-red jka-transition" aria-hidden="true">
              arrow_forward
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function DojoDetailPanel({ dojo, onBack }: { dojo: DojoData; onBack: () => void }) {
  const [imgError, setImgError] = useState(false)
  const initials = dojo.instructor.split(' ').map(n => n[0]).slice(0, 2).join('')

  return (
    <div className="px-10 py-16">
      <BackButton onClick={onBack} />

      {!imgError ? (
        <img
          src={`/images/instructors/${dojo.id}.jpg`}
          alt={`${dojo.instructor}, instructor de ${dojo.name}`}
          className="w-full aspect-[4/5] object-cover rounded-lg mb-8"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-jka-red flex items-center justify-center mb-8">
          <span className="font-h-display text-4xl text-white leading-none">{initials}</span>
        </div>
      )}

      <h3 className="font-h-display text-4xl text-ink uppercase tracking-tight leading-tight mb-2">
        {dojo.name}
      </h3>
      <span className="inline-block bg-jka-red text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm mb-8">
        {dojo.dan}
      </span>

      <dl className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-muted text-lg mt-0.5" aria-hidden="true">person</span>
          <div>
            <dt className="text-[10px] text-muted uppercase tracking-widest font-bold">Instructor</dt>
            <dd className="font-bold text-ink text-sm mt-0.5">{dojo.instructor}</dd>
          </div>
        </div>

        {dojo.address && (
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-muted text-lg mt-0.5" aria-hidden="true">location_on</span>
            <div>
              <dt className="text-[10px] text-muted uppercase tracking-widest font-bold">Dirección</dt>
              <dd className="text-ink text-sm mt-0.5">{dojo.address}</dd>
            </div>
          </div>
        )}

        {dojo.phone && (
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-muted text-lg mt-0.5" aria-hidden="true">phone</span>
            <div>
              <dt className="text-[10px] text-muted uppercase tracking-widest font-bold">Contacto</dt>
              <dd className="mt-0.5">
                <a href={`tel:${dojo.phone.replace(/\s/g, '')}`} className="text-jka-red font-bold text-sm hover:underline">
                  {dojo.phone}
                </a>
              </dd>
            </div>
          </div>
        )}

        {dojo.instagram && (
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-muted text-lg mt-0.5" aria-hidden="true">photo_camera</span>
            <div>
              <dt className="text-[10px] text-muted uppercase tracking-widest font-bold">Instagram</dt>
              <dd className="text-ink text-sm mt-0.5">{dojo.instagram}</dd>
            </div>
          </div>
        )}
      </dl>
    </div>
  )
}

export default function MapaDojos() {
  const [state, setState] = useState<MapState>({ type: 'idle' })
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [vb, setVb] = useState<[number, number, number, number]>(FULL_CHILE)
  const vbRef = useRef<[number, number, number, number]>(FULL_CHILE)
  const rafRef = useRef<number | undefined>(undefined)

  function animateTo(target: [number, number, number, number], duration: number) {
    const start = performance.now()
    const from = [...vbRef.current] as [number, number, number, number]

    function step(now: number) {
      const t = Math.min((now - start) / duration, 1)
      const eased = easeOutCubic(t)
      const current = from.map((f, i) => f + (target[i] - f) * eased) as [number, number, number, number]
      vbRef.current = current
      setVb(current)
      if (t < 1) rafRef.current = requestAnimationFrame(step)
    }

    if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    return () => { if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current) }
  }, [])

  useEffect(() => {
    if (state.type === 'idle' || state.type === 'allDojos') {
      animateTo(FULL_CHILE, 600)
    } else {
      const target = REGION_ZOOM[state.regionId]
      if (target) animateTo(target, 700)
    }
  }, [state])

  const activeRegionId = (state.type === 'region' || state.type === 'dojo') ? state.regionId : null
  const selectedDojoId = state.type === 'dojo' ? state.dojoId : null

  const markersToShow = activeRegionId
    ? DOJOS.filter(d => d.regionId === activeRegionId)
    : DOJOS

  function handlePolygonClick(e: React.MouseEvent, regionId: string) {
    e.stopPropagation()
    const hasDojos = REGIONS.find(r => r.id === regionId)?.dojos.length ?? 0
    if (!hasDojos) return
    setState({ type: 'region', regionId })
  }

  function handleMarkerClick(e: React.MouseEvent, dojo: DojoData) {
    e.stopPropagation()
    setState({ type: 'dojo', dojoId: dojo.id, regionId: dojo.regionId })
  }

  function handleSvgBackgroundClick() {
    setState({ type: 'idle' })
  }

  function handleSelectDojo(dojo: DojoData) {
    setState({ type: 'dojo', dojoId: dojo.id, regionId: dojo.regionId })
  }

  const activeRegion = activeRegionId ? REGIONS.find(r => r.id === activeRegionId) : null
  const selectedDojo = selectedDojoId ? DOJOS.find(d => d.id === selectedDojoId) ?? null : null

  const viewBoxStr = vb.map(n => n.toFixed(2)).join(' ')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-border lg:h-[calc(100vh-5rem)]">

      {/* Columna izquierda — mapa */}
      <div
        className="flex flex-col items-center justify-center py-8 px-6 border-b lg:border-b-0 lg:border-r border-border overflow-hidden"
      >
        <svg
          viewBox={viewBoxStr}
          xmlns="http://www.w3.org/2000/svg"
          className="h-[60vh] lg:h-[80vh] w-auto max-w-full"
          onClick={handleSvgBackgroundClick}
          style={{ cursor: 'default' }}
          aria-label="Mapa aproximado de Chile mostrando la distribución de dojos Samurai JKA"
        >
          {REGIONS.map(region => {
            const hasDojos = region.dojos.length > 0
            const isActive = region.id === activeRegionId
            const isHovered = hoveredRegion === region.id

            let fillOpacity: number
            if (isActive) fillOpacity = 1
            else if (activeRegionId) fillOpacity = 0.2
            else if (hasDojos && isHovered) fillOpacity = 0.7
            else if (!hasDojos && isHovered) fillOpacity = 0.3
            else fillOpacity = 0.45

            return (
              <polygon
                key={region.id}
                points={region.points}
                fill="#C8102E"
                fillOpacity={fillOpacity}
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
                onClick={(e) => handlePolygonClick(e, region.id)}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                style={{
                  cursor: hasDojos ? 'pointer' : 'not-allowed',
                  transition: 'fill-opacity 0.25s ease',
                }}
              />
            )
          })}

          {/* Iconos de candado en regiones sin dojos (solo visibles en vista completa) */}
          {(state.type === 'idle' || state.type === 'allDojos') &&
            Object.entries(EMPTY_REGION_CENTROIDS).map(([id, [cx, cy]]) => (
              <LockIcon key={id} x={cx} y={cy} />
            ))
          }

          {markersToShow.map(dojo => (
            <g
              key={dojo.id}
              onClick={(e) => handleMarkerClick(e, dojo)}
              style={{ cursor: 'pointer' }}
            >
              <PinMarker cx={dojo.svgX} cy={dojo.svgY} isSelected={dojo.id === selectedDojoId} />
            </g>
          ))}
        </svg>

        {activeRegion && (
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-jka-red text-center">
            {activeRegion.name}
          </p>
        )}
      </div>

      {/* Columna derecha — panel */}
      <div className="overflow-y-auto">
        {state.type === 'idle' && (
          <IdlePanel onViewAll={() => setState({ type: 'allDojos' })} />
        )}
        {state.type === 'allDojos' && (
          <AllDojosPanel
            onBack={() => setState({ type: 'idle' })}
            onSelectDojo={handleSelectDojo}
          />
        )}
        {state.type === 'region' && activeRegion && (
          <RegionPanel
            region={activeRegion}
            onBack={() => setState({ type: 'idle' })}
            onSelectDojo={handleSelectDojo}
          />
        )}
        {state.type === 'dojo' && selectedDojo && (
          <DojoDetailPanel
            dojo={selectedDojo}
            onBack={() => setState({ type: 'region', regionId: (state as { type: 'dojo'; dojoId: string; regionId: string }).regionId })}
          />
        )}
      </div>

    </div>
  )
}
