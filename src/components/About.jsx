export default function About({ onNav }) {
  return (
    <>
      <header className="pagehead pagehead--colored">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">About</div>
            <h1 className="pagehead__title">Thinking alongside <em>people.</em><br />Not at them.</h1>
          </div>
          <p className="pagehead__lede">
            Human Future Hub is a Berlin-based social enterprise building AI literacy
            where it's most needed and least served. A group of people who chose to
            build this.
          </p>
        </div>
      </header>

      <section className="about-origin">
        <div className="about-origin__inner">
          <div>
            <div className="eyebrow">Origin</div>
            <h2 className="section__title">How HFH started.</h2>
          </div>
          <div className="about-origin__text">
            <p>
              In early 2024, a small group of educators, researchers, and practitioners
              in Berlin kept having the same conversation: AI was reshaping classrooms
              and workplaces, and the people living through it had nowhere to turn that
              wasn't a product demo or a panic piece.
            </p>
            <p>
              So we started one. HFH runs workshops, a monthly newsletter, a Substack,
              and — as of 2026 — a flagship programme for teachers and parents. We're
              registering as a gUG (a German non-profit entity) and building partnerships
              with schools, ministries, and employers.
            </p>
            <p>
              We're volunteer-run, peer-to-peer, and deliberately small. Funding goes
              into programmes, not marketing. Decisions get made in rooms, not decks.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <div className="section__head" style={{ marginBottom: 0 }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--hfh-orange)' }}>Positioning guardrails</div>
              <h2 className="section__title" style={{ color: '#fff' }}>The four things we hold.</h2>
            </div>
            <p className="section__sub" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Everything we publish, run, and sign our name to passes through these.
              They're in the brand book, but they also live in every conversation.
            </p>
          </div>
          <div className="about-principles__grid">
            <div className="principle">
              <div className="principle__num">01</div>
              <h3 className="principle__title">Systemic, not reactive.</h3>
              <p className="principle__text">
                We talk about AI's human impact on work, society, education, values — not
                individual product launches or model score updates.
              </p>
            </div>
            <div className="principle">
              <div className="principle__num">02</div>
              <h3 className="principle__title">Realist, not evangelist.</h3>
              <p className="principle__text">
                No hype. No uncritical celebration. The emotional and psychological
                dimensions of AI disruption are our edge.
              </p>
            </div>
            <div className="principle">
              <div className="principle__num">03</div>
              <h3 className="principle__title">Human first.</h3>
              <p className="principle__text">
                Technology is the context. The human experience is the subject. If a
                conversation drifts into the tech itself, we pull it back.
              </p>
            </div>
            <div className="principle">
              <div className="principle__num">04</div>
              <h3 className="principle__title">No political commentary.</h3>
              <p className="principle__text">
                Systemic discussion only. We don't react to current political events,
                even when the bait is plentiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-subpages">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="eyebrow">The network</div>
              <h2 className="section__title">Who's behind this.</h2>
            </div>
            <p className="section__sub">
              A core team in Berlin, Munich, and online — and a growing network of
              expert advisors we work with across education, psychology, and policy.
            </p>
          </div>
          <div className="about-subpages__grid">
            <a className="subpage subpage--team" onClick={() => onNav('team')}>
              <div className="subpage__eyebrow">Core team</div>
              <h3 className="subpage__title">Team</h3>
              <p className="subpage__desc">
                Ten people who chose to build this — educators, researchers, product
                people, writers. Names, roles, cities.
              </p>
              <span className="subpage__cta">Meet the team <span>→</span></span>
            </a>
            <a className="subpage subpage--experts" onClick={() => onNav('experts')}>
              <div className="subpage__eyebrow">Advisory</div>
              <h3 className="subpage__title">Expert contributors</h3>
              <p className="subpage__desc">
                Peers we think alongside. Researchers, clinicians, HR leaders, policy
                people — not a letterhead, a network.
              </p>
              <span className="subpage__cta">See contributors <span>→</span></span>
            </a>
          </div>
        </div>
      </section>

      <div className="legal-note">
        <div className="legal-note__inner">
          <strong style={{ color: 'var(--hfh-blue)' }}>Legal note.</strong> Human Future Hub
          is in the process of registering as a gUG (gemeinnützige Unternehmergesellschaft) —
          a German non-profit entity. Partnership, funding, and donation arrangements
          will be finalised post-registration. For current enquiries,{' '}
          <a onClick={() => onNav('contact')} style={{ cursor: 'pointer' }}>get in touch</a>.
        </div>
      </div>
    </>
  )
}
