export default function Footer({ onNav }) {
  const link = (to, label) => (
    <a key={to} onClick={() => onNav(to)}>{label}</a>
  )
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            <img src="/assets/flower-mark.png" alt="" />
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
          {link('newsletter', 'Substack newsletter')}
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
  )
}
