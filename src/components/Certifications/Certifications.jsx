import { useState } from 'react'
import useIntersection from '../../hooks/useIntersection'
import './Certifications.css'

const certs = [
  { id: 1, name: 'شهادة جودة الإنجاز', img: '/images/certs/cert-1.jpg' },
  { id: 2, name: 'ISO 45001:2018 — السلامة والصحة المهنية', img: '/images/certs/cert-2.jpg' },
  { id: 3, name: 'ISO 9001:2015 — نظام إدارة الجودة', img: '/images/certs/cert-3.jpg' },
  { id: 4, name: 'السجل التجاري', img: '/images/certs/cert-4.jpg' },
  { id: 5, name: 'شهادة الغرفة التجارية', img: '/images/certs/cert-5.jpg' },
  { id: 6, name: 'شهادة تسجيل الاستثمار', img: '/images/certs/cert-6.jpg' },
  { id: 7, name: 'شهادة تعريف بالآيبان', img: '/images/certs/cert-7.jpg' },
  { id: 8, name: 'العنوان الوطني', img: '/images/certs/cert-8.jpg' },
  { id: 9, name: 'شهادة ضريبة القيمة المضافة', img: '/images/certs/cert-9.jpg' },
  { id: 10, name: 'شهادة تسجيل مالية', img: '/images/certs/cert-10.jpg' },
  { id: 11, name: 'خطاب اعتماد', img: '/images/certs/cert-11.jpg' },
  { id: 12, name: 'شهادة اعتماد', img: '/images/certs/cert-12.jpg' },
  { id: 13, name: 'شهادة تعميد', img: '/images/certs/cert-13.jpg' },
  { id: 14, name: 'شهادة إنجاز', img: '/images/certs/cert-14.jpg' },
]

const PLACEHOLDER = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=70'

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
              style={{ transitionDelay: `${(i % 5) * 0.07}s` }}
              onClick={() => open(c)}
            >
              <div className="certifications__card-img-wrap">
                <img
                  src={PLACEHOLDER}
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
          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
            <img src={PLACEHOLDER} alt={lightbox.name} />
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
