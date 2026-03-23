import useIntersection from '../../hooks/useIntersection'
import './VisionMission.css'

export default function VisionMission() {
  useIntersection('.vm .reveal')

  return (
    <section className="vm section-pad" id="vision">
      <div className="container">
        
        <div className="vm__grid">
          
          {/* Vision */}
          <div className="vm__card reveal">
            <div className="vm__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="vm__title">رؤيتنا</h3>
            <p className="vm__text">
              أن تكون شركة المقاييس الرئيسية للمقاولات من الشركات الرائدة والمميزة في مجال المقاولات العامة والانشاءات في المملكة العربية السعودية, والتفوق في جميع جوانب اعمالنا وأن نصبح شريكاً موثوقاً به لعملاءنا وشركائنا
            </p>
          </div>

          {/* Mission */}
          <div className="vm__card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="vm__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 className="vm__title">رسالتنا</h3>
            <p className="vm__text">
              نسعى إلى تقديم حلول إنشائية متكاملة ترتكز على الجودة العالية، والالتزام بالمواصفات، والدقة في التنفيذ، مع الالتزام الكامل بمواعيد التسليم ومعايير السلامة المهنية. و نهدف من خلال أعمالنا إلى الإسهام في تطوير البنية التحتية والعمرانية عبر تنفيذ مشاريع تواكب متطلبات التنمية الحديثة، وتلبي احتياجات عملائنا بأعلى مستويات الاحترافية والكفاءة.
            </p>
          </div>

        </div>
        
      </div>
    </section>
  )
}
