import { useState } from 'react'
import useIntersection from '../../hooks/useIntersection'
import './Certifications.css'

const base = import.meta.env.BASE_URL + 'images/certificates/'

const certs = [
  { id: 1, name: 'شهادة نظام إدارة الجودة - ISO 9001', img: `${base}iso-9001.png` },
  { id: 2, name: 'شهادة نظام إدارة السلامة والصحة المهنية - ISO 45001', img: `${base}iso-45001.png` },
  { id: 3, name: 'شهادة اعتماد', img: `${base}shahada-etimad.png` },
  { id: 4, name: 'خطاب اعتماد', img: `${base}khatab-etimad.png` },
  { id: 5, name: 'شهادة تعميد', img: `${base}shahada-tamid.png` },
  { id: 6, name: 'شهادة إنجاز', img: `${base}shahada-injaz.png` },
]

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null)
  useIntersection('.certifications .reveal')

  const open = (c) => setLightbox(c)
  const close = () => setLightbox(null)
  const prev = () => {
    const idx = certs.findIndex((c) => c.id === lightbox.id)
    setLightbox(certs[(idx - 1 + certs.length) % certs.length])
  }
  const next = () => {
    const idx = certs.findIndex((c) => c.id === lightbox.id)
    setLightbox(certs[(idx + 1) % certs.length])
  }

  return (
    <section className="certifications section-pad" id="certifications">
      <div className="container">
        <div className="certifications__header reveal">
          <span className="accent-bar" />
          <p className="label">الاعتمادات</p>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
            شهاداتنا ووثائقنا الرسمية
          </h2>
        </div>

        {/* ISO Feature badges */}
        <div className="certifications__iso reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="certifications__iso-badge">
            <span className="certifications__iso-num">ISO</span>
            <div>
              <span className="certifications__iso-title">9001:2015</span>
              <span className="certifications__iso-sub">نظام إدارة الجودة · معتمد</span>
            </div>
          </div>
          <div className="certifications__iso-sep" />
          <div className="certifications__iso-badge">
            <span className="certifications__iso-num">ISO</span>
            <div>
              <span className="certifications__iso-title">45001:2018</span>
              <span className="certifications__iso-sub">السلامة والصحة المهنية · معتمد</span>
            </div>
          </div>
        </div>

        {/* Full gallery */}
        <div className="certifications__grid">
          {certs.map((c, i) => (
            <div
              className="certifications__card reveal"
              key={c.id}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              onClick={() => open(c)}
            >
              <div className="certifications__card-img-wrap">
                <img
                  src={c.img}
                  alt={c.name}
                  className="certifications__card-img"
                  loading="lazy"
                />
                <div className="certifications__card-hover">
                  <span>عرض الشهادة</span>
                </div>
              </div>
              <p className="certifications__card-name">{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={close}>
          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', maxWidth: '800px', width: '90%' }}>
            <img src={lightbox.img} alt={lightbox.name} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: 'var(--small)' }}>
              {lightbox.name}
            </p>
          </div>
          <button className="lightbox-close" onClick={close}>✕</button>
          <button className="lightbox-nav prev" onClick={prev}>›</button>
          <button className="lightbox-nav next" onClick={next}>‹</button>
        </div>
      )}
    </section>
  )
}
