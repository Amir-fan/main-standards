import useIntersection from '../../hooks/useIntersection'
import './WhyUs.css'

export default function WhyUs() {
  useIntersection('.whyus .reveal')

  return (
    <section className="whyus section-pad" id="whyus">
      <div className="container whyus__grid">
        
        {/* Left — Visual */}
        <div className="whyus__visual reveal">
          <div className="whyus__visual-card dark">
            <h3 className="whyus__vc-num">٢٨١+</h3>
            <p className="whyus__vc-label">مهندس وعامل وفني</p>
          </div>
          <div className="whyus__visual-img-wrap">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="الخبرة" className="whyus__img" />
          </div>
          <div className="whyus__visual-card yellow">
            <h3 className="whyus__vc-num">٩+</h3>
            <p className="whyus__vc-label">مشاريع منفذة</p>
          </div>
        </div>

        {/* Right — Content Blocks */}
        <div className="whyus__content reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="accent-bar" />
          <p className="label">لماذا المقاييس الرئيسية</p>
          <h2 className="section-title">خبرة تُحدث الفارق الحقيقي</h2>

          <div className="whyus__blocks">
            <div className="whyus__block">
              <h4 className="whyus__block-title">الخبرة</h4>
              <p className="whyus__block-text">
                خبرتنا تنبع من المشاريع المنفذة والمشاريع الحالية وأيضاً خبرات مهندسينا من المشاريع في الشركات السابقة. قدرتنا على تنفيذ المشاريع مهما بلغ حجمها وبجودة عالية عززت مكانتنا كأحد الركائز المهمة والأساسية لقطاع المقاولات العامة في المملكة العربية السعودية.
              </p>
            </div>

            <div className="whyus__block">
              <h4 className="whyus__block-title">التطوير والتدريب</h4>
              <p className="whyus__block-text">
                إن الاستثمار في العنصر البشري هو أنجح مجالات الاستثمار على الإطلاق. نحرص على صقل مهاراتهم وتوفير بيئة عمل مناسبة لتحفيزهم، وبالتالي الحصول على أقصى إنتاجية نوعاً وكماً.
              </p>
            </div>

            <div className="whyus__block">
              <h4 className="whyus__block-title">فريق العمل</h4>
              <p className="whyus__block-text">
                منذ البداية أدركنا أن موظفينا هم أغلى ما نملك ومن خلال تفانيهم وحرصهم على تحقيق مبدأ الجودة العالية في أدق التفاصيل، كان لهم الفضل فيما وصلنا إليه من مراكز ريادية في المملكة العربية السعودية.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary whyus__cta">ابدأ مشروعك معنا</a>
        </div>

      </div>
    </section>
  )
}
