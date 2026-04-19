import { useState } from 'react'

const EVENTS = [
  {
    day: '12', month: 'Nov',
    chapter: 'berlin',
    type: 'Workshop',
    title: "The realist's guide to classroom AI",
    meta: 'Kulturbrauerei, Berlin · 18:30–21:00 · Free',
  },
  {
    day: '19', month: 'Nov',
    chapter: 'online',
    type: 'Roundtable',
    title: 'AI governance: what HR leaders are actually doing',
    meta: 'Online (Zoom) · 17:00–18:30 · Free',
  },
  {
    day: '27', month: 'Nov',
    chapter: 'munich',
    type: 'Evening event',
    title: 'The parent problem — AI at home, at school, everywhere',
    meta: 'Werksviertel, Munich · 19:00–21:30 · Free',
  },
  {
    day: '04', month: 'Dec',
    chapter: 'berlin',
    type: 'Book club',
    title: 'Book Club: The Alignment Problem — session 3',
    meta: 'Mitte, Berlin · 18:30–20:30 · Members only',
  },
  {
    day: '10', month: 'Dec',
    chapter: 'online',
    type: 'Workshop',
    title: 'Writing AI policy for your school: a working session',
    meta: 'Online (Zoom) · 16:00–18:00 · Free',
  },
  {
    day: '17', month: 'Dec',
    chapter: 'munich',
    type: 'Evening event',
    title: "End of year: what changed, what didn't, what's next",
    meta: 'Munich TBC · 19:00–22:00 · Free',
  },
]

const TAG_CLASSES = {
  berlin: 'event-item__tag--berlin',
  munich: 'event-item__tag--munich',
  online: 'event-item__tag--online',
}

export default function Community({ onNav }) {
  const [chapter, setChapter] = useState('all')

  const visible = chapter === 'all' ? EVENTS : EVENTS.filter(e => e.chapter === chapter)

  return (
    <>
      <header className="pagehead">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">Community · Events</div>
            <h1 className="pagehead__title">Small rooms.<br /><em>Real questions.</em></h1>
          </div>
          <p className="pagehead__lede">
            Workshops, roundtables, a book club, and evenings worth attending. In Berlin,
            Munich, and online. No keynote theatre — practitioners talking to practitioners.
          </p>
        </div>
      </header>

      <section className="events-section">
        <div className="events-inner">
          <div className="section__head">
            <div>
              <div className="eyebrow">Upcoming events</div>
              <h2 className="section__title">What's on.</h2>
            </div>
            <p className="section__sub">
              All events are free unless noted. RSVP via Luma. We keep rooms small so
              conversations stay honest.
            </p>
          </div>

          <div className="chapter-filter">
            {['all', 'berlin', 'munich', 'online'].map(c => (
              <button
                key={c}
                className={'chapter-btn' + (chapter === c ? ' is-active' : '')}
                onClick={() => setChapter(c)}
              >
                {c === 'all' ? 'All chapters' : c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>

          <div className="events-list">
            {visible.map((ev) => (
              <div className="event-item" key={ev.title}>
                <div className="event-item__date">
                  <div className="event-item__day">{ev.day}</div>
                  <div className="event-item__month">{ev.month}</div>
                </div>
                <div className="event-item__body">
                  <span className={'event-item__tag ' + (TAG_CLASSES[ev.chapter] || '')}>
                    {ev.type} · {ev.chapter.charAt(0).toUpperCase() + ev.chapter.slice(1)}
                  </span>
                  <h3 className="event-item__title">{ev.title}</h3>
                  <p className="event-item__meta">{ev.meta}</p>
                </div>
                <span className="event-item__cta">RSVP on Luma <span>→</span></span>
              </div>
            ))}
            {visible.length === 0 && (
              <p style={{ padding: '40px 0', color: 'var(--fg-3)' }}>No upcoming events for this chapter — check back soon.</p>
            )}
          </div>
        </div>
      </section>

      <section className="bookclub">
        <div className="bookclub__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow" style={{ color: 'var(--hfh-teal-700)' }}>Book Club · Berlin</div>
              <h2 className="section__title">Reading that earns its place.</h2>
            </div>
            <p className="section__sub">
              Monthly in Berlin. One book, one evening, the kind of conversation that
              doesn't fit in a LinkedIn post.
            </p>
          </div>
          <div className="bookclub__grid">
            <div>
              <p className="bookclub__body">
                The HFH Book Club started in early 2024 as a handful of people reading
                the same book and arguing about it in a Kreuzberg bar. It's still that,
                more or less.
              </p>
              <p className="bookclub__body" style={{ marginTop: 16 }}>
                We pick books that sit at the intersection of AI, psychology, society,
                and what it means to be human right now. No tech manifestos. No self-help.
                Books that take a position and earn it.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <button className="btn btn--primary" style={{ background: 'var(--hfh-teal-700)' }}>
                  Join the book club
                </button>
                <button className="btn btn--ghost" style={{ color: 'var(--hfh-teal-700)' }}>
                  Past reads →
                </button>
              </div>
            </div>
            <div className="bookclub__current">
              <div className="bookclub__current-label">Currently reading</div>
              <h3 className="bookclub__current-title">The Alignment Problem</h3>
              <p className="bookclub__current-author">Brian Christian · 2020</p>
              <p className="bookclub__current-desc">
                A serious, reported look at what it means to build AI systems that do
                what we actually want — and why it's harder than it sounds. Session 3
                meets 4 December in Berlin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="linkedin-cta">
        <div className="linkedin-cta__inner">
          <div className="eyebrow eyebrow--plain" style={{ color: 'var(--hfh-orange)', justifyContent: 'center', display: 'flex', marginBottom: 20 }}>
            LinkedIn group
          </div>
          <h2 className="linkedin-cta__title">The conversation that <em>doesn't stop</em> between events.</h2>
          <p className="linkedin-cta__sub">
            2,800+ members across Europe. AI's human impact — in education, work, and
            life. Systemic, not reactive. No product announcements, no political
            commentary.
          </p>
          <button className="btn btn--accent btn--lg">Join the LinkedIn group →</button>
        </div>
      </section>
    </>
  )
}
