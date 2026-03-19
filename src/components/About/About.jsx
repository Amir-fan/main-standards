import useIntersection from '../../hooks/useIntersection'
import './About.css'

export default function About() {
  useIntersection('.about .reveal')

  return (
    <section className="about section-pad" id="about">
      <div className="container about__grid">
        
        {/* Left Side — Image Gallery */}
        <div className="about__images reveal">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="مشروع مكين" className="about__img-main" />
          <div className="about__img-float">
            <span className="about__img-badge">٨+</span>
            <span className="about__img-label">مشاريع منجزة</span>
          </div>
        </div>

        {/* Right Side — Text block with bullet points instead of walls of text */}
        <div className="about__text reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="accent-bar" />
          <p className="label">من نحن</p>
          <h2 className="section-title">
            جذور محلية راسخة،<br />
            بمعايير بناء عالمية.
          </h2>
          
          <p className="about__body">
            شركة المقاييس الرئيسية للمقاولات انطلقت برؤية طموحة لتكون من الشركات الموثوقة في البناء والتشييد في المملكة العربية السعودية.
          </p>

          <ul className="about__list">
            <li>
              <div className="about__list-icon">✓</div>
              <div>
                <strong>جودة استثنائية</strong>
                <p>تنفيذ المشاريع وفق أعلى المعايير والمواصفات الفنية.</p>
              </div>
            </li>
            <li>
              <div className="about__list-icon">✓</div>
              <div>
                <strong>تسليم في الموعد</strong>
                <p>التزام صارم بالجداول الزمنية من وضع الأساسات حتى التسليم.</p>
              </div>
            </li>
            <li>
              <div className="about__list-icon">✓</div>
              <div>
                <strong>سلامة متكاملة</strong>
                <p>بيئة عمل آمنة وصحية وتطبيق أعلى المعايير البيئية.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
