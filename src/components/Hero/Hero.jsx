import useIntersection from '../../hooks/useIntersection'
import './Hero.css'

export default function Hero() {
  useIntersection('.hero .reveal')

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        
        <div className="hero__card reveal">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80" 
            alt="مشروع قيد الإنشاء" 
            className="hero__img" 
          />
          <div className="hero__overlay"></div>

          <div className="hero__content">
            <h1 className="hero__headline reveal" style={{ transitionDelay: '0.2s' }}>
              نبني مشروعك القادم
            </h1>
            
            <p className="hero__sub reveal" style={{ transitionDelay: '0.3s' }}>
              مقاولات عامة · تشطيبات · هيكل إنشائي — الرياض
            </p>
            
            <div className="hero__actions reveal" style={{ transitionDelay: '0.4s' }}>
              <a href="#contact" className="btn btn-primary hero__cta-primary">
                اطلب عرض سعر مجاني
              </a>
              <a href="#projects" className="btn btn-ghost">
                شاهد أعمالنا
              </a>
            </div>

            {/* Stats Strip */}
            <div className="hero__stats reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="hero__stat">
                <span className="hero__stat-num">٢٨١+</span>
                <span className="hero__stat-label">كادر هندسي وفني</span>
              </div>
              <div className="hero__stat-sep" />
              <div className="hero__stat">
                <span className="hero__stat-num">٩+</span>
                <span className="hero__stat-label">مشاريع منفذة</span>
              </div>
              <div className="hero__stat-sep" />
              <div className="hero__stat">
                <span className="hero__stat-num">ISO</span>
                <span className="hero__stat-label">9001 · 45001</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
