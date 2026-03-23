import useIntersection from '../../hooks/useIntersection'
import './Values.css'

const values = [
  { title: 'الجودة', text: 'نحرص على تنفيذ جميع أعمالنا وفق أعلى المعايير والمواصفات الفنية لضمان متانة وجودة المشاريع.' },
  { title: 'الالتزام', text: 'نلتزم بدقة المواعيد وتنفيذ الأعمال كما هو متفق عليه دون تأخير أو تقصير.' },
  { title: 'الشفافية', text: 'نبني علاقاتنا على الثقة والوضوح في التعامل مع عملائنا وشركائنا.' },
  { title: 'السلامة', text: 'نطبق أنظمة السلامة المهنية في مواقع العمل لضمان بيئة آمنة للعاملين والمعدات.' },
  { title: 'الابتكار', text: 'نسعى باستمرار إلى تطوير أساليب العمل وتبني أحدث التقنيات في مجال الإنشاءات.' },
  { title: 'الاحترافية', text: 'نعمل بمعايير مهنية عالية تعكس صورة مشرفة لقطاع المقاولات.' },
  { title: 'الاستدامة', text: 'نلتزم بتنفيذ مشاريع تراعي البيئة والمجتمع، مع الحرص على استخدام الموارد بشكل مستدام ودعم التنمية المحلية.' },
]

export default function Values() {
  useIntersection('.values .reveal')

  return (
    <section className="values section-pad" id="values">
      <div className="container">
        
        <div className="values__header reveal">
          <span className="accent-bar" />
          <p className="label">قيمنا</p>
          <h2 className="section-title">المبادئ التي تحكم كل قرار</h2>
        </div>

        <div className="values__grid">
          {values.map((v, i) => (
            <div
              className="values__card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="values__accent" />
              <h3 className="values__title">{v.title}</h3>
              <p className="values__text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
