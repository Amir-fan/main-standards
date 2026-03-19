import useIntersection from '../../hooks/useIntersection'
import './WhyUs.css'

export default function WhyUs() {
  useIntersection('.whyus .reveal')

  return (
    <section className="whyus section-pad" id="whyus">
      <div className="container whyus__grid">
        
        {/* Left visually pleasing composition */}
        <div className="whyus__visual reveal">
          <div className="whyus__visual-card dark">
            <h3 className="whyus__vc-num">٢٨١+</h3>
            <p className="whyus__vc-label">مهندس وعامل وفني</p>
          </div>
          <div className="whyus__visual-img-wrap">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="الخبرة" className="whyus__img" />
          </div>
          <div className="whyus__visual-card yellow">
            <h3 className="whyus__vc-num">١٥+</h3>
            <p className="whyus__vc-label">سنة في مجال البناء</p>
          </div>
        </div>

        {/* Right content / feature blocks */}
        <div className="whyus__content reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="accent-bar" />
          <p className="label">لماذا المقاييس الرئيسية</p>
          <h2 className="section-title">
            خبرة تُحدث<br />
            الفارق الحقيقي
          </h2>

          <div className="whyus__features">
            <div className="whyus__feature">
              <div className="whyus__f-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div className="whyus__f-text">
                <h4>قدرة تنافسية وجودة عالية</h4>
                <p>مشاريعنا تتحدث عن تفوقنا في قطاع مليء بالتحديات، لا نرضى إلا بالصدارة.</p>
              </div>
            </div>

            <div className="whyus__feature">
              <div className="whyus__f-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div className="whyus__f-text">
                <h4>استثمار في الكفاءات</h4>
                <p>ننتقي الأفضل وندربهم، التطور الوظيفي حق لفريقنا وحافز للإبداع.</p>
              </div>
            </div>

            <div className="whyus__feature">
              <div className="whyus__f-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="whyus__f-text">
                <h4>تنفيذ متكامل ورؤية شاملة</h4>
                <p>من المخططات وحتى آخر لمسة، ندير كل خطوة بمهنية وخبرة طويلة.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
