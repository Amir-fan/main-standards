import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects, filters } from '../../data/projects'
import './ProjectsPage.css'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('الكل')
  const [selected, setSelected] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filtered = filter === 'الكل' ? projects : projects.filter((p) => p.type === filter)

  return (
    <div className="pp">
      {/* Hero Banner — Premium Redesign */}
      {/* Using the first project's image as a subtle background for the hero */}
      <div className="pp__hero" style={{ backgroundImage: `url(${projects[0].images[0]})` }}>
        <div className="pp__hero-overlay"></div>
        <div className="container pp__hero-inner">
          <Link to="/" className="pp__back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            العودة للرئيسية
          </Link>
          <div className="pp__hero-content">
            <h1 className="pp__title">مشاريع تتحدث<br />عن نفسها</h1>
            <p className="pp__sub">منذ التأسيس وحتى التسليم، نبني معالم تضع معايير جديدة للجودة والابتكار في قطاع المقاولات.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container pp__content">
        
        {/* Floating Filters Dock */}
        <div className="pp__filters-wrapper">
          <div className="pp__filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`pp__filter ${filter === f ? 'active' : ''}`}
                onClick={() => { setFilter(f); setSelected(null) }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Expanded Project Detail */}
        {selected && (
          <div className="pp__detail" key={selected.id}>
            <button className="pp__detail-close" onClick={() => setSelected(null)}>
              ✕ العودة للمشاريع
            </button>

            {/* Gallery */}
            <div className={`pp__detail-gallery g${selected.images.length}`}>
              {selected.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selected.name} - ${i + 1}`}
                  className="pp__detail-img"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Info */}
            <div className="pp__detail-info">
              <span className="pp__card-type">{selected.type}</span>
              <h2>{selected.name}</h2>

              <div className="pp__detail-grid">
                <div className="pp__detail-item">
                  <span className="pp__detail-label">المالك / المطور</span>
                  <span className="pp__detail-val">{selected.owner}</span>
                </div>
                <div className="pp__detail-item">
                  <span className="pp__detail-label">المكان</span>
                  <span className="pp__detail-val">{selected.location}</span>
                </div>
                <div className="pp__detail-item">
                  <span className="pp__detail-label">مساحة المشروع</span>
                  <span className="pp__detail-val">{selected.area}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {!selected && (
          <div className="pp__grid">
            {filtered.map((p, i) => (
              <div
                className="pp__card"
                key={p.id}
                style={{ animation: `panelIn 0.4s ease ${i * 0.06}s both` }}
                onClick={() => setSelected(p)}
              >
                <img src={p.images[0]} alt={p.name} className="pp__card-img" loading="lazy" />
                <div className="pp__card-overlay">
                  <span className="pp__card-type">{p.type}</span>
                  <h3 className="pp__card-name">{p.name}</h3>
                  <div className="pp__card-details">
                    <div className="pp__card-detail">
                      <span className="pp__card-detail-label">المساحة</span>
                      <span className="pp__card-detail-val">{p.area}</span>
                    </div>
                    <div className="pp__card-detail">
                      <span className="pp__card-detail-label">الموقع</span>
                      <span className="pp__card-detail-val">{p.location}</span>
                    </div>
                  </div>
                  {p.images.length > 1 && (
                    <span className="pp__card-count">{p.images.length} صور</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {!selected && (
          <div className="pp__cta-block">
            <h2>مشروعك القادم يبدأ هنا</h2>
            <p>تواصل معنا اليوم واحصل على عرض سعر مجاني لمشروعك</p>
            <Link to="/#contact" className="btn btn-primary pp__cta-btn">تواصل معنا</Link>
          </div>
        )}
      </div>
    </div>
  )
}
