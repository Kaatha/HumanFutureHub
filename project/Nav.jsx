/* global React */

// ===================================================================
// NAV
// ===================================================================
function Nav({ route, onNav }) {
  const [workOpen, setWorkOpen] = React.useState(false);
  const workRef = React.useRef(null);

  React.useEffect(() => {
    const onDoc = (e) => {
      if (workRef.current && !workRef.current.contains(e.target)) setWorkOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const isWork = route === 'education' || route === 'work';
  const isAbout = route === 'about' || route === 'team' || route === 'experts';

  return (
    <nav className="nav">
      <a className="nav__brand" href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}>
        <img src="assets/flower-mark.png" alt="" className="nav__mark" />
        <div className="nav__wordmark">
          Human Future Hub
          <small>Berlin · AI literacy</small>
        </div>
      </a>

      <div className="nav__links">
        <button className={'nav__link ' + (route === 'home' ? 'is-active' : '')}
                onClick={() => onNav('home')}>Home</button>

        <div className={'nav__dropdown ' + (workOpen ? 'is-open' : '')} ref={workRef}>
          <button className={'nav__link ' + (isWork ? 'is-active' : '')}
                  onClick={(e) => { e.stopPropagation(); setWorkOpen(v => !v); }}>
            Our Work <span className="nav__chev">▼</span>
          </button>
          <div className="nav__menu">
            <a className="nav__menu-item" onClick={() => { setWorkOpen(false); onNav('education'); }}>
              <h4>Future of Education</h4>
              <p>Educate the Educator — teachers, parents, and the ground beneath them.</p>
            </a>
            <a className="nav__menu-item" onClick={() => { setWorkOpen(false); onNav('work'); }}>
              <h4>Future of Work</h4>
              <p>AI inside organisations — sessions, advisory, community access.</p>
            </a>
          </div>
        </div>

        <button className={'nav__link ' + (route === 'community' ? 'is-active' : '')}
                onClick={() => onNav('community')}>Community</button>

        <button className={'nav__link ' + (isAbout ? 'is-active' : '')}
                onClick={() => onNav('about')}>About</button>

        <button className={'nav__link ' + (route === 'newsletter' ? 'is-active' : '')}
                onClick={() => onNav('newsletter')}>Newsletter</button>

        <button className={'nav__link ' + (route === 'contact' ? 'is-active' : '')}
                onClick={() => onNav('contact')}>Contact</button>
      </div>

      <button className="btn btn--accent btn--sm" onClick={() => onNav('newsletter')}>
        Subscribe
      </button>
    </nav>
  );
}

// ===================================================================
// FOOTER
// ===================================================================
function Footer({ onNav }) {
  const link = (to, label) => (
    <a onClick={() => onNav(to)}>{label}</a>
  );
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            <img src="assets/flower-mark.png" alt="" />
            <div className="footer__wordmark">Human Future Hub</div>
          </div>
          <p className="footer__tagline">Nobody is <em>left behind.</em></p>
          <p className="footer__legal-line">
            Berlin-based AI literacy social enterprise. Registering as gUG in 2026.
          </p>
        </div>
        <div className="footer__col">
          <div className="footer__h">Our Work</div>
          {link('education', 'Future of Education')}
          {link('work', 'Future of Work')}
          {link('community', 'Events')}
        </div>
        <div className="footer__col">
          <div className="footer__h">About</div>
          {link('about', 'Mission')}
          {link('team', 'Team')}
          {link('experts', 'Expert contributors')}
          {link('contact', 'Contact')}
        </div>
        <div className="footer__col">
          <div className="footer__h">Stay in touch</div>
          {link('newsletter', 'Substack')}
          <a href="#">LinkedIn group</a>
          <a href="#">Luma events</a>
        </div>
      </div>
      <div className="footer__sub">
        <span>© 2026 Human Future Hub · Berlin</span>
        <span>
          <a href="#">Impressum</a> · <a href="#">Datenschutz</a> · <a href="#">Cookies</a> · <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  );
}

window.Nav = Nav;
window.Footer = Footer;
