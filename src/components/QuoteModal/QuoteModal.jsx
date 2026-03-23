import { useState, useEffect, useRef } from 'react'
import './QuoteModal.css'

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef(null)

  useEffect(() => {
    if (isOpen && nameRef.current) {
      setTimeout(() => nameRef.current.focus(), 200)
    }
    if (!isOpen) setSubmitted(false)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2500)
  }

  if (!isOpen) return null

  return (
    <div className="quote-modal__backdrop" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal__close" onClick={onClose}>✕</button>
        
        {submitted ? (
          <div className="quote-modal__success">
            <div className="quote-modal__check">✓</div>
            <h3>تم الإرسال بنجاح</h3>
            <p>سنتواصل معك خلال ٢٤ ساعة</p>
          </div>
        ) : (
          <>
            <h3 className="quote-modal__title">اطلب عرض سعر مجاني</h3>
            <p className="quote-modal__sub">أخبرنا عن مشروعك وسنتواصل معك بأسرع وقت</p>
            <form className="quote-modal__form" onSubmit={handleSubmit}>
              <div className="quote-modal__field">
                <label htmlFor="qm-name">الاسم الكامل</label>
                <input type="text" id="qm-name" ref={nameRef} required placeholder="أدخل اسمك" />
              </div>
              <div className="quote-modal__field">
                <label htmlFor="qm-phone">رقم الجوال</label>
                <input type="tel" id="qm-phone" required placeholder="05xxxxxxxx" dir="ltr" />
              </div>
              <div className="quote-modal__field">
                <label htmlFor="qm-type">نوع المشروع</label>
                <select id="qm-type" required>
                  <option value="">اختر نوع المشروع</option>
                  <option value="سكني">سكني</option>
                  <option value="تجاري">تجاري</option>
                  <option value="صناعي">صناعي</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary quote-modal__submit">
                أرسل الطلب
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
