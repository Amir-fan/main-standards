import { useState } from 'react'
import useIntersection from '../../hooks/useIntersection'
import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'مشروع مرسية',
    type: 'هيكل',
    area: '45,000 م²',
    owner: 'الشركة الوطنية للإسكان',
    location: 'الرياض',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    id: 2,
    name: 'مشروع مكين 71',
    type: 'هيكل',
    area: '19,000 م²',
    owner: 'شركة أساس مكين',
    location: 'حي الروابي – الرياض',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 3,
    name: 'مشروع دياري – حي العارض',
    type: 'تشطيبات',
    area: '30,000 م²',
    owner: 'شركة دياري للاستثمار العقاري',
    location: 'حي العارض',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    id: 4,
    name: 'برج سماسكو',
    type: 'إنشاء',
    area: '30,000 م²',
    owner: 'شركة سماسكو',
    location: 'الرياض',
    img: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?w=800&q=80',
  },
  {
    id: 5,
    name: 'مشروع دياري – إشبيلية',
    type: 'تشطيبات',
    area: '25,000 م²',
    owner: 'شركة دياري للاستثمار العقاري',
    location: 'حي إشبيلية',
    img: 'https://images.unsplash.com/photo-1590644365607-5bf8e3c93f3b?w=800&q=80',
  },
  {
    id: 6,
    name: 'مشروع مكين 65',
    type: 'هيكل',
    area: '3,779 م²',
    owner: 'شركة أساس مكين',
    location: 'حي النسيم الغربي – الرياض',
    img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
  },
  {
    id: 7,
    name: 'حي القادسية – 4 عمائر تجارية',
    type: 'إنشاء',
    area: '9,000 م²',
    owner: 'شركة قمم للتطوير العقاري',
    location: 'حي القادسية – الرياض',
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
  },
  {
    id: 8,
    name: 'فلل هامة 119 – الياسمين',
    type: 'تشطيبات',
    area: '10,000 م²',
    owner: 'شركة أسس للاستثمار العقاري',
    location: 'حي الياسمين',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  },
]

const filters = ['الكل', 'هيكل', 'تشطيبات', 'إنشاء']

export default function Projects() {
  const [filter, setFilter] = useState('الكل')
  const [lightbox, setLightbox] = useState(null)
  useIntersection('.projects .reveal')

  const filtered = filter === 'الكل' ? projects : projects.filter((p) => p.type === filter)

  const open = (p) => setLightbox(p)
  const close = () => setLightbox(null)
  const prev = () => {
    const idx = filtered.findIndex((p) => p.id === lightbox.id)
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
  }
  const next = () => {
    const idx = filtered.findIndex((p) => p.id === lightbox.id)
    setLightbox(filtered[(idx + 1) % filtered.length])
  }

  return (
    <section className="projects section-pad" id="projects">
      <div className="container">
        <div className="projects__header reveal">
          <span className="accent-bar" />
          <p className="label">مشاريعنا</p>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>مشاريع تتحدث عن نفسها</h2>
        </div>

        {/* Filters */}
        <div className="projects__filters reveal" style={{ transitionDelay: '0.1s' }}>
          {filters.map((f) => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p, i) => (
            <div
              className="projects__card"
              key={p.id}
              style={{ animation: `panelIn 0.4s ease ${i * 0.05}s both` }}
              onClick={() => open(p)}
            >
              <img src={p.img} alt={p.name} className="projects__card-img" loading="lazy" />
              <div className="projects__card-overlay">
                <span className="projects__card-type">{p.type}</span>
                <h3 className="projects__card-name">{p.name}</h3>
                <div className="projects__card-meta">
                  <span>{p.area}</span>
                  <span>·</span>
                  <span>{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={close}>
          <div className="projects__lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.name} />
            <div className="projects__lb-info">
              <span className="projects__card-type">{lightbox.type}</span>
              <h3>{lightbox.name}</h3>
              <p>{lightbox.owner}</p>
              <p>{lightbox.location} · {lightbox.area}</p>
            </div>
          </div>
          <button className="lightbox-close" onClick={close}>✕</button>
          <button className="lightbox-nav prev" onClick={prev}>›</button>
          <button className="lightbox-nav next" onClick={next}>‹</button>
        </div>
      )}
    </section>
  )
}
