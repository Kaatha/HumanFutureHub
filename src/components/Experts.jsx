import { useState } from 'react'

const EXPERTS = [
  {
    name: 'Dr. Petra Hoffmann',
    field: 'Educational Psychology',
    affiliation: 'Humboldt University Berlin',
    tags: ['education', 'psychology'],
  },
  {
    name: 'Prof. Marcus Schulz',
    field: 'Future of Work & Organisation',
    affiliation: 'LMU Munich, Department of Sociology',
    tags: ['work', 'policy'],
  },
  {
    name: 'Dr. Yuki Nakamura',
    field: 'Human-Computer Interaction',
    affiliation: 'TU Berlin',
    tags: ['tech', 'psychology'],
  },
  {
    name: 'Claudia Ferreira',
    field: 'Talent & Workforce Strategy',
    affiliation: 'Independent — former SAP People & Culture',
    tags: ['work'],
  },
  {
    name: 'Dr. Jonas Brandt',
    field: 'Digital Ethics & AI Policy',
    affiliation: 'Stiftung Neue Verantwortung, Berlin',
    tags: ['policy', 'tech'],
  },
  {
    name: 'Aisha Osei-Bonsu',
    field: 'Adult Learning & Continuing Education',
    affiliation: 'Volkshochschule Berlin-Mitte',
    tags: ['education'],
  },
  {
    name: 'Dr. Rasmus Eriksen',
    field: 'Clinical Psychology & Technology Anxiety',
    affiliation: 'University of Copenhagen',
    tags: ['psychology'],
  },
  {
    name: 'Sophia Weiss',
    field: 'AI in K-12 Education',
    affiliation: 'Bildungswerk Berlin (independent)',
    tags: ['education', 'tech'],
  },
  {
    name: 'Prof. Ahmed Al-Rashid',
    field: 'Labour Economics & AI Displacement',
    affiliation: 'DIW Berlin',
    tags: ['work', 'policy'],
  },
]

const TAG_LABELS = {
  education: 'Education',
  psychology: 'Psychology',
  work: 'Work',
  tech: 'Tech',
  policy: 'Policy',
}

const FILTERS = ['all', 'education', 'psychology', 'work', 'tech', 'policy']

export default function Experts({ onNav }) {
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? EXPERTS : EXPERTS.filter(e => e.tags.includes(filter))

  return (
    <>
      <header className="pagehead">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">About · Advisory</div>
            <h1 className="pagehead__title">Our network <em>includes.</em></h1>
          </div>
          <p className="pagehead__lede">
            Peers we think alongside. Researchers, clinicians, HR leaders, policy people —
            not a letterhead, a network. Domain expertise that informs what we teach
            and how we teach it.
          </p>
        </div>
      </header>

      <section className="experts-section">
        <div className="experts-inner">
          <div className="section__head">
            <div>
              <div className="eyebrow">Expert contributors</div>
              <h2 className="section__title">The people behind the thinking.</h2>
            </div>
            <p className="section__sub">
              HFH works with practitioners and researchers across education, psychology,
              sociology, and technology policy. These are not advisors by title — they
              contribute to how we work.
            </p>
          </div>

          <div className="domain-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={'domain-filter-btn' + (filter === f ? ' is-active' : '')}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All domains' : TAG_LABELS[f]}
              </button>
            ))}
          </div>

          <div className="experts-grid">
            {visible.map((ex) => (
              <div className="expert-card" key={ex.name}>
                <h3 className="expert-card__name">{ex.name}</h3>
                <p className="expert-card__field">{ex.field}</p>
                <p className="expert-card__affiliation">{ex.affiliation}</p>
                <div className="expert-card__tags">
                  {ex.tags.map(t => (
                    <span key={t} className={'domain-tag domain-tag--' + t}>
                      {TAG_LABELS[t]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <div className="eyebrow eyebrow--plain" style={{ color: 'var(--hfh-orange)', justifyContent: 'center', display: 'flex' }}>
            Become an expert advisor
          </div>
          <h2 className="cta-band__title">Work in education, psychology, or a related field? <em>We'd like to hear from you.</em></h2>
          <p className="cta-band__sub">
            We're especially looking for professionals in educational psychology, sociology,
            HR and organisational change, and recruiting. Our network is built on peer
            relationships, not hierarchy.
          </p>
          <div className="cta-band__ctas">
            <button className="btn btn--accent btn--lg" onClick={() => onNav('contact')}>
              Expert advisor application →
            </button>
            <button className="btn btn--outline-white btn--lg" onClick={() => onNav('team')}>
              Meet the core team
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
