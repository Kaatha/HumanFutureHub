import { useState } from 'react'

const ISSUES = [
  {
    date: '02 Apr 2026',
    title: 'A springboard, not a crisis',
    excerpt: 'What 40 teachers told us this month — and what it changes about how we\'re designing the spring cohort.',
    tag: 'Field notes',
  },
  {
    date: '18 Mar 2026',
    title: 'The loud narrative, and the quieter one',
    excerpt: 'The Silicon Valley framing is loud and well-funded. Here\'s what happens when you let the room be quieter.',
    tag: 'Essay',
  },
  {
    date: '01 Mar 2026',
    title: 'Why we don\'t start with the tools',
    excerpt: 'Teachers in Germany have no structured AI support. Opening with a product demo solves the wrong problem.',
    tag: 'Essay',
  },
  {
    date: '14 Feb 2026',
    title: 'On AI agency, acceleration, governance',
    excerpt: 'Notes from a conversation with researchers who are done with the word "alignment".',
    tag: 'Conversation',
  },
  {
    date: '28 Jan 2026',
    title: 'The parent dimension',
    excerpt: 'Kids are using AI more than their parents. We have almost no structured support for the adults at home.',
    tag: 'Field notes',
  },
  {
    date: '10 Jan 2026',
    title: 'What we learned running the pilot',
    excerpt: 'Six weeks, fourteen teachers, one cohort. Here\'s the honest retrospective — including what didn\'t work.',
    tag: 'Retrospective',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="news-hero">
        <div className="news-hero__inner">
          <div>
            <div className="eyebrow">Newsletter · Monthly · Free</div>
            <h1 className="news-hero__title">Thinking out <em>loud.</em></h1>
            <p className="news-hero__lede">
              Essays, field notes, and the occasional long answer — on the human
              experience of AI disruption. Written by the people doing the work,
              not a content team. Hosted on Substack.
            </p>
            <div style={{ display: 'flex', gap: 24, fontSize: 14, color: 'var(--fg-3)', flexWrap: 'wrap' }}>
              <div><strong style={{ color: 'var(--hfh-blue)' }}>~2,400</strong> subscribers</div>
              <div><strong style={{ color: 'var(--hfh-blue)' }}>Monthly</strong> cadence</div>
              <div><strong style={{ color: 'var(--hfh-blue)' }}>No ads</strong>, no sponsors</div>
            </div>
          </div>

          <form className="news-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <p className="news-form__label">Get the monthly edition.</p>
            <p className="news-form__help">One email a month. You can leave whenever. No guilt, no drip campaigns.</p>
            <div className="news-form__row">
              <input
                className="news-form__input" type="email" required placeholder="you@work.com"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="news-form__row">
              <button className="btn btn--accent btn--lg" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                {sent ? 'Check your inbox ✓' : 'Subscribe via Substack'}
              </button>
            </div>
            <div className="news-form__meta">
              <span><strong>EU hosted.</strong></span>
              <span>No tracking beyond opens.</span>
              <span>GDPR-friendly.</span>
            </div>
          </form>
        </div>
      </section>

      <section className="news-why">
        <div className="news-why__grid">
          <div className="news-why__item">
            <div className="news-why__num">01</div>
            <h3 className="news-why__title">The depth layer.</h3>
            <p className="news-why__text">
              Essays that actually take a position. Not "here's what happened this week
              in AI" — here's what we think is worth your attention, and why.
            </p>
          </div>
          <div className="news-why__item">
            <div className="news-why__num">02</div>
            <h3 className="news-why__title">Field notes from the work.</h3>
            <p className="news-why__text">
              What we're learning running Educate the Educator, Future of Work sessions,
              and the conversations that don't make it to the public channels.
            </p>
          </div>
          <div className="news-why__item">
            <div className="news-why__num">03</div>
            <h3 className="news-why__title">No hype, no panic.</h3>
            <p className="news-why__text">
              Realistic optimism over evangelism. Systemic observation over reactive
              commentary. Monthly, because good thinking isn't weekly.
            </p>
          </div>
        </div>
      </section>

      <section className="archive">
        <div className="archive__inner">
          <div className="archive__head">
            <div>
              <div className="eyebrow">Archive</div>
              <h2 className="section__title">Recent issues.</h2>
            </div>
            <p className="section__sub">Everything we've published. Skim, skip, or read the whole thing.</p>
          </div>
          <div className="archive__list">
            {ISSUES.map((i) => (
              <div className="issue" key={i.title}>
                <div className="issue__date">{i.date}</div>
                <div>
                  <h3 className="issue__title">{i.title}</h3>
                  <p className="issue__excerpt">{i.excerpt}</p>
                </div>
                <span className="issue__tag">{i.tag}</span>
                <span className="issue__arrow">→</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <button className="btn btn--outline btn--lg">Read the full archive on Substack →</button>
          </div>
        </div>
      </section>
    </>
  )
}
