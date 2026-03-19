import useIntersection from '../../hooks/useIntersection'
import './Objectives.css'

const objectives = [
  { num: '01', title: 'تطوير مستمر', text: 'توفير خدمات متطورة في مجال البناء والإنشاءات على المستوى المحلي والعالمي.' },
  { num: '02', title: 'أحدث التقنيات', text: 'تقديم جميع الخدمات بأحدث التقنيات المبتكرة لضمان الاستدامة والجودة.' },
  { num: '03', title: 'بيئة آمنة', text: 'توفير بيئة عمل آمنة وصحية وتطبيق أعلى المعايير البيئية للمشاريع.' },
  { num: '04', title: 'رضا تام', text: 'كسب ثقة عملائنا وإرضائهم من خلال الاستجابة السريعة والدقيقة لمتطلباتهم.' },
]

export default function Objectives() {
  useIntersection('.objectives .reveal')

  return (
    <section className="objectives section-pad" id="objectives">
      <div className="container">
        <div className="objectives__header reveal">
          <span className="accent-bar" />
          <p className="label">أهدافنا</p>
          <h2 className="section-title">
            أهداف تدفعنا للأمام
          </h2>
          <p className="section-subtitle">
            نعمل بوضوح وتركيز لتحقيق أهدافنا الاستراتيجية التي تضمن لنا النمو المستدام وتقديم قيمة حقيقية لعملائنا ومجتمعنا.
          </p>
        </div>

        <div className="objectives__grid">
          {objectives.map((obj, i) => (
            <div
              className="objectives__card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="objectives__num">{obj.num}</div>
              <h3 className="objectives__title">{obj.title}</h3>
              <p className="objectives__text">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
