import useIntersection from '../../hooks/useIntersection'
import './Objectives.css'

const objectives = [
  { num: '٠١', text: 'توفير خدمات متطورة في مجال البناء والانشاءات على المستوى المحلي والعالمي.' },
  { num: '٠٢', text: 'تقديم جميع الخدمات بأحدث التقنيات المتطورة.' },
  { num: '٠٣', text: 'توفير بيئة عمل أمنة وصحية للعاملين في الشركة وتطبيق أعلى المعايير البيئية والإجتماعية.' },
  { num: '٠٤', text: 'كسب ثقة عملائنا وإرضائهم من خلال الإستجابة السريعة لمتطلباتهم.' },
  { num: '٠٥', text: 'تعزيز التعاون وتوسيع نطاق الشراكات على مستوى المملكة وخارجها.' },
]

export default function Objectives() {
  useIntersection('.objectives .reveal')

  return (
    <section className="objectives section-pad" id="objectives">
      <div className="container">
        <div className="objectives__header reveal">
          <span className="accent-bar" />
          <p className="label">أهدافنا</p>
          <h2 className="section-title">أهداف تدفعنا للأمام</h2>
        </div>

        <div className="objectives__grid">
          {objectives.map((obj, i) => (
            <div
              className="objectives__card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="objectives__num">{obj.num}</div>
              <p className="objectives__text">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
