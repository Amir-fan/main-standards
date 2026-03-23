import './Footer.css'

const quickLinks = [
  { label: 'من نحن', href: '#about' },
  { label: 'رؤيتنا ورسالتنا', href: '#vision' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#projects' },
  { label: 'شهاداتنا', href: '#certifications' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={import.meta.env.BASE_URL + 'images/ms-logo.png'} alt="المقاييس الرئيسية" className="footer__logo-img" />
            </div>
            <p className="footer__tagline">
              نُقدّم مشاريع إنشائية متكاملة بأعلى معايير الجودة والسلامة في المملكة العربية السعودية.
            </p>
            <div className="footer__iso">
              <span>ISO 9001</span>
              <span>ISO 45001</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">روابط سريعة</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">تواصل معنا</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-label">الهاتف</span>
              <a href="tel:+966506459689" dir="ltr">+966 50 645 9689</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">البريد</span>
              <a href="mailto:info@mainstandards.net">info@mainstandards.net</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">الموقع</span>
              <a href="https://www.mainstandards.net" target="_blank" rel="noreferrer">www.mainstandards.net</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">العنوان</span>
              <span>الرياض – الروابي – مخرج ١٥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} شركة المقاييس الرئيسية للمقاولات. جميع الحقوق محفوظة.</span>
          <span className="footer__bottom-en">Main Standards Contracting Co. — Riyadh, KSA</span>
        </div>
      </div>
    </footer>
  )
}
