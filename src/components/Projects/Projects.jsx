import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import useIntersection from '../../hooks/useIntersection'
import './Projects.css'

export default function Projects() {
  useIntersection('.projects .reveal')
  const featured = projects.slice(0, 2)

  return (
    <section className="projects section-pad" id="projects">
      <div className="container">
        <div className="projects__header reveal">
          <span className="accent-bar" />
          <p className="label">مشاريعنا</p>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>مشاريع تتحدث عن نفسها</h2>
        </div>

        {/* Featured 2 */}
        <div className="projects__featured">
          {featured.map((p, i) => (
            <div
              className="projects__card reveal"
              key={p.id}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <img src={p.images[0]} alt={p.name} className="projects__card-img" loading="lazy" />
              <div className="projects__card-overlay">
                <span className="projects__card-type">{p.type}</span>
                <h3 className="projects__card-name">{p.name}</h3>
                <div className="projects__card-meta">
                  <span>{p.area}</span>
                  <span>·</span>
                  <span>{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__more reveal" style={{ transitionDelay: '0.25s' }}>
          <Link to="/projects" className="btn btn-outline projects__more-btn">
            عرض جميع المشاريع
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
