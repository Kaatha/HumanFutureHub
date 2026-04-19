import { useState, useRef, useEffect } from 'react'

export default function Nav({ route, onNav }) {
  const [workOpen, setWorkOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const workRef = useRef(null)

  useEffect(() => {
    const onDoc = (e) => {
      if (workRef.current && !workRef.current.contains(e.target)) setWorkOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [route])

  const isWork = route === 'education' || route === 'work'
  const isAbout = route === 'about' || route === 'team' || route === 'experts'

  const go = (page) => { onNav(page); setWorkOpen(false); setMobileOpen(false) }

  return (
    <nav className="nav">
      <a className="nav__brand" href="#" onClick={(e) => { e.preventDefault(); go('home') }}>
        <img src="/assets/flower-mark.png" alt="" className="nav__mark" />
        <div className="nav__wordmark">
          Human Future Hub
          <small>Berlin · AI literacy</small>
        </div>
      </a>

      <div className={'nav__links' + (mobileOpen ? ' nav__links--open' : '')}>
        <button className={'nav__link' + (route === 'home' ? ' is-active' : '')} onClick={() => go('home')}>
          Home
        </button>

        <div className={'nav__dropdown' + (workOpen ? ' is-open' : '')} ref={workRef}>
          <button className={'nav__link' + (isWork ? ' is-active' : '')}
                  onClick={(e) => { e.stopPropagation(); setWorkOpen(v => !v) }}>
            Our Work <span className="nav__chev">▼</span>
          </button>
          <div className="nav__menu">
            <a className="nav__menu-item" onClick={() => go('education')}>
              <h4>Future of Education</h4>
              <p>Educate the Educator — teachers, parents, and the ground beneath them.</p>
            </a>
            <a className="nav__menu-item" onClick={() => go('work')}>
              <h4>Future of Work</h4>
              <p>AI inside organisations — sessions, advisory, community access.</p>
            </a>
          </div>
        </div>

        <button className={'nav__link' + (route === 'community' ? ' is-active' : '')} onClick={() => go('community')}>
          Community
        </button>
        <button className={'nav__link' + (isAbout ? ' is-active' : '')} onClick={() => go('about')}>
          About
        </button>
        <button className={'nav__link' + (route === 'newsletter' ? ' is-active' : '')} onClick={() => go('newsletter')}>
          Newsletter
        </button>
        <button className={'nav__link' + (route === 'contact' ? ' is-active' : '')} onClick={() => go('contact')}>
          Contact
        </button>
      </div>

      <button className="btn btn--accent btn--sm nav__subscribe" onClick={() => go('newsletter')}>
        Subscribe
      </button>

      <button
        className="nav__hamburger"
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
