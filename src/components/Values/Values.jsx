import useIntersection from '../../hooks/useIntersection'
import './Values.css'

const values = [
  { img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80', title: 'الجودة والاحترافية', text: 'نحرص على تنفيذ جميع أعمالنا بمعايير مهنية عالية ومواصفات دقيقة تضمن متانة وجودة المشاريع.' },
  { img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&q=80', title: 'الالتزام والشفافية', text: 'دقة لا تتنازل في المواعيد، ووضوح تام في التعامل، لنبني ثقة تدوم مع عملائنا.' },
  { img: 'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?w=600&q=80', title: 'السلامة والاستدامة', text: 'بيئة عمل آمنة، واستخدام مسؤول للموارد لتنفيذ مشاريع تراعي البيئة والمجتمع.' },
]

export default function Values() {
  useIntersection('.values .reveal')

  return (
    <section className="values section-pad" id="values">
      <div className="container">
        
        <div className="values__header reveal">
          <span className="accent-bar" />
          <p className="label">قيمنا</p>
          <h2 className="section-title">
            المبادئ التي تحكم كل قرار
          </h2>
          <p className="section-subtitle">
            نجاحنا ليس وليد الصدفة، بل هو نتيجة التزامنا الراسخ بمجموعة من القيم الجوهرية التي توجه مسارنا وتحدد هويتنا.
          </p>
        </div>

        <div className="values__grid">
          {values.map((v, i) => (
            <div
              className="values__card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="values__img-wrap">
                <img src={v.img} alt={v.title} className="values__img" loading="lazy" />
              </div>
              <div className="values__content">
                <h3 className="values__title">{v.title}</h3>
                <p className="values__text">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
