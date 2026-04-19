import { useState } from 'react'

function NewsletterBand({ onNav }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  return (
    <section className="newsband">
      <div className="newsband__inner">
        <div>
          <div className="eyebrow" style={{ color: '#fff' }}>Newsletter</div>
          <h2 className="newsband__title">The depth layer. Monthly. Free.</h2>
          <p className="newsband__sub">
            Essays on AI agency, acceleration, and what it means to move through a
            world changing faster than most organisations can keep up with. Written
            by the people who write here, not a content team.
          </p>
          <form className="newsband__form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <input
              className="newsband__input" type="email" required
              placeholder="you@work.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn btn--primary btn--lg" type="submit"
              style={{ background: '#fff', color: 'var(--hfh-orange-700)' }}
            >
              {sent ? 'Check your inbox ✓' : 'Subscribe'}
            </button>
          </form>
          <p style={{ fontSize: 13, opacity: 0.9, marginTop: 14 }}>Hosted on Substack. Unsubscribe anytime.</p>
        </div>
        <div className="newsband__card">
          <h4>Recent issues</h4>
          <div className="newsband__issues">
            <div className="newsband__issue">
              <div className="newsband__issue-date">Apr 02</div>
              <div className="newsband__issue-title">A springboard, not a crisis — what teachers told us this month</div>
            </div>
            <div className="newsband__issue">
              <div className="newsband__issue-date">Mar 18</div>
              <div className="newsband__issue-title">The loud narrative, and why our quieter one matters</div>
            </div>
            <div className="newsband__issue">
              <div className="newsband__issue-date">Mar 01</div>
              <div className="newsband__issue-title">Why we don't start with the tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ onNav }) {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__top">
            <div>
              <div className="hero__eyebrow">AI literacy · Berlin · Est. 2024</div>
              <h1 className="hero__title">
                AI realists,<br />
                <span className="not">not</span> <span className="em">evangelists.</span>
              </h1>
              <p className="hero__lede">
                We're a Berlin-based social enterprise helping people and organisations think
                clearly about AI. Not the hype. The human experience underneath it — in classrooms,
                in workplaces, at kitchen tables.
              </p>
              <div className="hero__ctas">
                <button className="btn btn--primary btn--lg" onClick={() => onNav('education')}>
                  See our programmes →
                </button>
                <button className="btn btn--ghost btn--lg" onClick={() => onNav('about')}>
                  Why HFH exists
                </button>
              </div>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__tile hero__tile--blue">
                <div>
                  <div className="hero__tile-eyebrow">Positioning</div>
                  <h3 className="hero__tile-title">Technology is the context.<br />The human experience is the subject.</h3>
                </div>
                <img className="hero__tile-flower" src="/assets/flower-mark.png" alt="" />
              </div>
              <div className="hero__tile hero__tile--teal">
                <div className="hero__tile-eyebrow">Pillar 01</div>
                <div>
                  <div className="hero__tile-num">01</div>
                  <h3 className="hero__tile-title">Future of Education</h3>
                </div>
              </div>
              <div className="hero__tile hero__tile--orange">
                <div className="hero__tile-eyebrow">Pillar 02</div>
                <div>
                  <div className="hero__tile-num">02</div>
                  <h3 className="hero__tile-title">Future of Work</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paths">
        <div className="container" style={{ maxWidth: 'none', padding: 0 }}>
          <div className="paths__grid">
            <a className="path-card path-card--ed" onClick={() => onNav('education')}>
              <div className="path-card__swatch" />
              <div className="path-card__num">01 / For educators &amp; parents</div>
              <h3 className="path-card__title">Future of Education</h3>
              <p className="path-card__desc">
                Teachers in Germany have no structured AI support. We're building it —
                with parents in the room, not on the margins.
              </p>
              <span className="path-card__cta">Educate the Educator <span>→</span></span>
            </a>
            <a className="path-card path-card--work" onClick={() => onNav('work')}>
              <div className="path-card__swatch" />
              <div className="path-card__num">02 / For organisations</div>
              <h3 className="path-card__title">Future of Work</h3>
              <p className="path-card__desc">
                Most companies are implementing AI without governance and without
                preparing their people. We help with both.
              </p>
              <span className="path-card__cta">Sessions &amp; advisory <span>→</span></span>
            </a>
            <a className="path-card path-card--comm" onClick={() => onNav('community')}>
              <div className="path-card__swatch" />
              <div className="path-card__num">03 / For curious humans</div>
              <h3 className="path-card__title">Community</h3>
              <p className="path-card__desc">
                Evenings, workshops, a book club, a newsletter. Small rooms and
                specific questions — in Berlin, Munich, and online.
              </p>
              <span className="path-card__cta">Find a chapter <span>→</span></span>
            </a>
          </div>
        </div>
      </section>

      <section className="positioning">
        <div className="positioning__inner">
          <div>
            <div className="positioning__eyebrow">What we stand for</div>
            <p className="positioning__quote">
              The Silicon Valley narrative is loud and too well funded. Conversations like
              ours are how we make sure <em>it isn't the only one.</em>
            </p>
          </div>
          <div>
            <p className="positioning__body">
              We talk about AI honestly — what it can do, what it can't, and what it's
              doing to the humans in its path. Not product launches. Not political
              commentary. Systemic, specific, grounded.
            </p>
            <p className="positioning__body" style={{ marginTop: 16 }}>
              We lead with the emotional and psychological dimensions of AI disruption
              because that's where most conversations stop short. It's the part people
              feel and rarely get to name.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="eyebrow">Upcoming · Featured</div>
              <h2 className="section__title">A workshop, a roundtable, a room of real questions.</h2>
            </div>
            <p className="section__sub">We run small events in Berlin, Munich, and online. No keynote theatre. Practitioners talking to practitioners.</p>
          </div>

          <div className="featured-ev">
            <div className="featured-ev__art">
              <div className="featured-ev__art-text">12<br />NOV</div>
            </div>
            <div className="featured-ev__body">
              <span className="featured-ev__tag">Workshop · Berlin</span>
              <h3 className="featured-ev__title">The realist's guide to classroom AI</h3>
              <div className="featured-ev__meta">
                <div><strong>Kulturbrauerei</strong>Prenzlauer Berg, Berlin</div>
                <div><strong>18:30 – 21:00</strong>Doors at 18:00</div>
                <div><strong>38 seats</strong>Free, RSVP via Luma</div>
              </div>
              <p className="featured-ev__desc">
                An honest working session with teachers who've been in the weeds of
                classroom AI for a year. What's working, what's leaking, what to quietly
                avoid. Bring your questions.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn--primary">Reserve a seat</button>
                <button className="btn btn--ghost" onClick={() => onNav('community')}>See all events →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBand onNav={onNav} />
    </>
  )
}
