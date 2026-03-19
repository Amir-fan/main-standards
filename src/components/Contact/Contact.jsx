import { useState } from 'react'
import useIntersection from '../../hooks/useIntersection'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  useIntersection('.contact .reveal, .contact .reveal-left, .contact .reveal-right')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact__grid">
        {/* Info */}
        <div className="contact__info reveal-right">
          <span className="accent-bar" />
          <p className="label">تواصل معنا</p>
          <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '2.5rem' }}>
            لنبني معاً
          </h2>

          <div className="contact__detail">
            <div className="contact__detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <span className="contact__detail-label">الهاتف</span>
              <a href="tel:+966506459689" className="contact__detail-value" dir="ltr">+966 50 645 9689</a>
            </div>
          </div>

          <div className="contact__detail">
            <div className="contact__detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <span className="contact__detail-label">البريد الإلكتروني</span>
              <a href="mailto:info@mainstandards.net" className="contact__detail-value">info@mainstandards.net</a>
            </div>
          </div>

          <div className="contact__detail">
            <div className="contact__detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <span className="contact__detail-label">العنوان</span>
              <span className="contact__detail-value">الرياض – الروابي – مخرج ١٥</span>
            </div>
          </div>

          <div className="contact__detail">
            <div className="contact__detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </div>
            <div>
              <span className="contact__detail-label">الموقع الإلكتروني</span>
              <a href="https://www.mainstandards.net" target="_blank" rel="noreferrer" className="contact__detail-value">www.mainstandards.net</a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact__form-wrap reveal-left" style={{ transitionDelay: '0.15s' }}>
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h3>تم الإرسال بنجاح</h3>
              <p>سيتواصل معك فريقنا في أقرب وقت ممكن.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>الاسم الكامل</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="محمد العلي" />
                </div>
                <div className="contact__field">
                  <label>الشركة</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="اسم الشركة" />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>رقم الهاتف</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+966 5X XXX XXXX" dir="ltr" />
                </div>
                <div className="contact__field">
                  <label>البريد الإلكتروني</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="email@company.com" dir="ltr" />
                </div>
              </div>
              <div className="contact__field">
                <label>رسالتك</label>
                <textarea name="message" required value={form.message} onChange={handleChange} rows={5} placeholder="أخبرنا عن مشروعك..." />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                إرسال الرسالة ←
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="contact__map">
        <iframe
          title="موقع الشركة"
          src="https://maps.google.com/maps?q=Al+Rawabi+District+Riyadh+Saudi+Arabia&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  )
}
