export default function Work({ onNav }) {
  return (
    <>
      <header className="pagehead">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">Pillar 02 · For organisations</div>
            <h1 className="pagehead__title">The human side of <em>AI at work.</em></h1>
          </div>
          <p className="pagehead__lede">
            Most companies are implementing AI without governance and without preparing
            their people. We help with both — sessions, advisory, and community access
            for teams navigating it honestly.
          </p>
        </div>
      </header>

      <section className="work-problem">
        <div className="work-problem__inner">
          <h2 className="work-problem__label">The problem<span>we address</span></h2>
          <p className="work-problem__body">
            AI is being deployed inside organisations faster than <em>governance and
            people-readiness</em> can keep up. The anxiety it creates is real, and
            almost nobody is addressing it directly.
          </p>
        </div>
      </section>

      <section className="offers">
        <div className="offers__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow">What we offer</div>
              <h2 className="section__title">Concrete. Short. Honest about what it can do.</h2>
            </div>
            <p className="section__sub">
              No retreats, no transformation decks. Specific interventions that address
              what's actually happening in your organisation.
            </p>
          </div>
          <div className="offers__grid">
            <div className="offer">
              <div className="offer__icon">◎</div>
              <h3 className="offer__title">Expert sessions</h3>
              <p className="offer__desc">
                Half-day or full-day sessions for teams and departments. We cover the
                human impact of AI adoption, practical literacy, and the questions your
                people aren't yet sure how to ask.
              </p>
              <p className="offer__detail">In-person (Berlin / Munich) or remote · German or English</p>
            </div>
            <div className="offer">
              <div className="offer__icon">⬡</div>
              <h3 className="offer__title">Advisory</h3>
              <p className="offer__desc">
                Ongoing advisory for HR leaders and leadership teams working through AI
                implementation, policy, or the cultural dimensions of a fast-changing
                workplace. We bring the research; you bring the context.
              </p>
              <p className="offer__detail">Retainer or project basis · Scoped per engagement</p>
            </div>
            <div className="offer">
              <div className="offer__icon">◈</div>
              <h3 className="offer__title">Community access</h3>
              <p className="offer__desc">
                Corporate members get access to HFH's practitioner network — our events,
                our expert contributor pool, and the monthly newsletter. Stay connected
                to what's actually happening in the field.
              </p>
              <p className="offer__detail">Annual membership · LinkedIn group + events</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-audiences">
        <div className="work-audiences__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow">Who it's for</div>
              <h2 className="section__title">Decision-makers and the people they're deciding for.</h2>
            </div>
            <p className="section__sub">
              Different concerns, same room. Whether you're setting policy or living with
              it, we address both without losing the human tone.
            </p>
          </div>
          <div className="work-audiences__grid">
            <div className="work-audience">
              <div className="work-audience__label">For organisations &amp; HR</div>
              <h3 className="work-audience__title">Governance you can actually use.</h3>
              <p className="work-audience__desc">
                You're being asked to build AI policy while the technology moves faster
                than your processes. We help you think clearly about what matters and
                what doesn't — without the vendor pitch.
              </p>
              <ul className="work-audience__list">
                <li>HR leaders and people teams navigating AI implementation</li>
                <li>Leadership teams setting AI strategy or policy</li>
                <li>Organisations with 50–500 employees in active AI rollout</li>
                <li>L&amp;D teams building internal capability</li>
              </ul>
            </div>
            <div className="work-audience work-audience--individual">
              <div className="work-audience__label">For teams &amp; individuals</div>
              <h3 className="work-audience__title">Clarity, not cheerleading.</h3>
              <p className="work-audience__desc">
                You work somewhere that's implementing AI and you haven't been given
                the space to ask honest questions. We create that space — and bring
                the frameworks to make it useful.
              </p>
              <ul className="work-audience__list">
                <li>Employees in roles directly affected by AI tools</li>
                <li>Managers trying to support teams through the change</li>
                <li>Workers dealing with displacement anxiety or uncertainty</li>
                <li>Anyone who wants the honest version of what's coming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <div className="eyebrow eyebrow--plain" style={{ color: 'var(--hfh-orange)', justifyContent: 'center', display: 'flex' }}>
            Book a session
          </div>
          <h2 className="cta-band__title">Running a team that's navigating AI without a map? <em>We can help with that.</em></h2>
          <p className="cta-band__sub">
            Get in touch to discuss what your organisation needs. We'll scope it honestly
            and tell you if we're not the right fit.
          </p>
          <div className="cta-band__ctas">
            <button className="btn btn--accent btn--lg" onClick={() => onNav('contact')}>Organisation enquiry</button>
            <button className="btn btn--outline-white btn--lg" onClick={() => onNav('experts')}>See our expert network</button>
          </div>
        </div>
      </section>
    </>
  )
}
