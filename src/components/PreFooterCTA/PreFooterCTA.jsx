import './PreFooterCTA.css'

export default function PreFooterCTA({ onClick }) {
  return (
    <section className="prefooter">
      <div className="container prefooter__inner">
        <h2 className="prefooter__title">جاهز لبدء مشروعك؟</h2>
        <p className="prefooter__sub">تواصل معنا اليوم واحصل على عرض سعر مجاني</p>
        <button className="btn btn-primary prefooter__btn" onClick={onClick}>
          اطلب عرض سعر مجاني
        </button>
      </div>
    </section>
  )
}
