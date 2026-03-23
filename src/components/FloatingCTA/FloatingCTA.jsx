import './FloatingCTA.css'

export default function FloatingCTA({ onClick }) {
  return (
    <div className="floating-cta">
      <button className="floating-cta__btn" onClick={onClick}>
        اطلب عرض سعر
      </button>
    </div>
  )
}
