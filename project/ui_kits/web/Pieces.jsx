/* global React */

function ProgrammeCard({ eyebrow, title, description, meta, onClick }) {
  return (
    <article className="hfh-prog" onClick={onClick}>
      <div className="hfh-prog__eyebrow">{eyebrow}</div>
      <h3 className="hfh-prog__title">{title}</h3>
      <p className="hfh-prog__desc">{description}</p>
      <div className="hfh-prog__meta">
        {meta.map((m, i) => <span key={i}>{m}</span>)}
      </div>
      <div className="hfh-prog__cta">Read more <span aria-hidden="true">→</span></div>
    </article>
  );
}

function EventRow({ date, title, place, tag, seats }) {
  const [d, mon] = date.split(' ');
  return (
    <div className="hfh-ev">
      <div className="hfh-ev__date">
        <div className="hfh-ev__day">{d}</div>
        <div className="hfh-ev__mon">{mon}</div>
      </div>
      <div className="hfh-ev__body">
        <div className="hfh-ev__tag">{tag}</div>
        <div className="hfh-ev__title">{title}</div>
        <div className="hfh-ev__place">{place}</div>
      </div>
      <div className="hfh-ev__seats">
        <div className="hfh-ev__seats-n">{seats}</div>
        <div className="hfh-ev__seats-l">seats left</div>
      </div>
      <button className="hfh-btn hfh-btn--outline hfh-btn--sm">Book</button>
    </div>
  );
}

function PullQuote({ quote, emphasis, attrib }) {
  const parts = quote.split(emphasis);
  return (
    <section className="hfh-quote">
      <div className="hfh-quote__inner">
        <div className="hfh-quote__eyebrow">Positioning</div>
        <blockquote className="hfh-quote__text">
          {parts[0]}<em>{emphasis}</em>{parts[1]}
        </blockquote>
        <div className="hfh-quote__attrib">{attrib}</div>
      </div>
    </section>
  );
}

function CTABand({ onJoin }) {
  return (
    <section className="hfh-cta">
      <div className="hfh-cta__inner">
        <h2 className="hfh-cta__title">Teachers in Germany have no structured AI support.<br />We're building it.</h2>
        <button className="hfh-btn hfh-btn--accent hfh-btn--lg" onClick={onJoin}>
          Educate the Educator →
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hfh-footer">
      <div className="hfh-footer__inner">
        <div className="hfh-footer__brand">
          <img src="../../assets/flower-mark.png" alt="" />
          <div>
            <div className="hfh-footer__wordmark">Human Future Hub</div>
            <div className="hfh-footer__tagline">Nobody is left behind.</div>
          </div>
        </div>
        <div className="hfh-footer__cols">
          <div>
            <div className="hfh-footer__h">Programmes</div>
            <a>Educate the Educator</a>
            <a>Future of Work</a>
          </div>
          <div>
            <div className="hfh-footer__h">Community</div>
            <a>Events</a>
            <a>Substack</a>
            <a>LinkedIn</a>
          </div>
          <div>
            <div className="hfh-footer__h">About</div>
            <a>Positioning</a>
            <a>Guardrails</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
      <div className="hfh-footer__sub">
        Berlin · humanfuturehub.org · Systemic, not reactive.
      </div>
    </footer>
  );
}

Object.assign(window, { ProgrammeCard, EventRow, PullQuote, CTABand, Footer });
