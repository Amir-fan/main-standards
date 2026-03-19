import useIntersection from '../../hooks/useIntersection'
import './Hero.css'

export default function Hero() {
  useIntersection('.hero .reveal')

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        
        {/* Massive rounded image container */}
        <div className="hero__card reveal">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=2000&q=80" 
            alt="مشروع قيد الإنشاء" 
            className="hero__img" 
          />
          <div className="hero__overlay"></div>

          {/* Content layered on top inside the card */}
          <div className="hero__content">
            <span className="hero__badge reveal" style={{ transitionDelay: '0.1s' }}>
              MAIN STANDARDS
            </span>
            
            <h1 className="hero__headline reveal" style={{ transitionDelay: '0.2s' }}>
              نبني الحاضر،<br />
              ونشيّد المستقبل.
            </h1>
            
            <p className="hero__sub reveal" style={{ transitionDelay: '0.3s' }}>
              شركة المقاييس الرئيسية للمقاولات العامة في المملكة العربية السعودية. ننفذ المشاريع الإنشائية بأعلى معايير الجودة والدقة، من الأساسات حتى التسليم.
            </p>
            
            <div className="hero__actions reveal" style={{ transitionDelay: '0.4s' }}>
              <a href="#services" className="btn btn-primary" style={{ background: 'var(--yellow)', color: 'var(--blue-900)', border: 'none' }}>
                اكتشف خدماتنا
              </a>
              <a href="#projects" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--white)' }}>
                تصفح مشاريعنا
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
