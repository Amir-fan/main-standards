import useIntersection from '../../hooks/useIntersection'
import './About.css'

export default function About() {
  useIntersection('.about .reveal')

  return (
    <section className="about section-pad" id="about">
      <div className="container about__grid">
        
        {/* Left — Image */}
        <div className="about__images reveal">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="مشروع إنشائي" className="about__img-main" />
          <div className="about__img-float">
            <span className="about__img-badge">٩+</span>
            <span className="about__img-label">مشاريع منجزة</span>
          </div>
        </div>

        {/* Right — Text */}
        <div className="about__text reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="accent-bar" />
          <p className="label">من نحن</p>
          <h2 className="section-title">شركة المقاييس الرئيسية للمقاولات</h2>
          
          <p className="about__body">
            شركة المقاييس الرئيسية للمقاولات هي شركة متخصصة في أعمال المقاولات العامة، انطلقت برؤية طموحة تهدف إلى أن تكون من الشركات الموثوقة في مجال البناء والتشييد. تسعى الشركة إلى تنفيذ المشاريع الإنشائية وفق أعلى معايير الجودة والسلامة، مع الالتزام الكامل بالمواصفات الفنية والمواعيد الزمنية المحددة.
          </p>

          <p className="about__body">
            تقدم المقاييس الرئيسية للمقاولات خدمات متكاملة تشمل أعمال الإنشاءات الخرسانية، أعمال التشطيب، وأعمال البناء العام بمختلف أنواعه، بدءًا من وضع الأساسات وحتى تسليم المشروع في صورته النهائية.
          </p>

          {/* Stat Cards */}
          <div className="about__cards">
            <div className="about__card">
              <span className="about__card-icon">🏗️</span>
              <span className="about__card-text">من الأساسات للتسليم</span>
            </div>
            <div className="about__card">
              <span className="about__card-icon">✅</span>
              <span className="about__card-text">شهادات ISO معتمدة</span>
            </div>
            <div className="about__card">
              <span className="about__card-icon">👷</span>
              <span className="about__card-text">٢٨١+ مهندس وفني</span>
            </div>
          </div>

          <a href="#services" className="btn btn-outline about__cta">تعرف على خدماتنا</a>
        </div>

      </div>
    </section>
  )
}
