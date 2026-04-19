const TEAM = [
  {
    name: 'Kata Molnár', role: 'Founder & director', city: 'Berlin', photo: 'a', initials: 'KM',
    bio: 'Started HFH after a decade in EdTech and a year of watching teachers in Berlin be handed AI with no map. Writes the newsletter, runs the programme.',
  },
  {
    name: 'Lukas Weber', role: 'Programme lead — Education', city: 'Berlin', photo: 'b', initials: 'LW',
    bio: 'Secondary school teacher turned teacher-trainer. Leads Educate the Educator. Has opinions about classroom policy, most of them load-bearing.',
  },
  {
    name: 'Ayşe Demir', role: 'Programme lead — Work', city: 'Munich', photo: 'c', initials: 'AD',
    bio: 'Organisational psychologist. Spent eight years inside German enterprises watching AI get deployed ahead of its governance. Opened the Munich chapter.',
  },
  {
    name: 'Samuel Okafor', role: 'Head of research', city: 'Online / Leipzig', photo: 'd', initials: 'SO',
    bio: 'Researcher working on the psychological dimensions of AI disruption. Turns field observations into the frameworks we actually teach from.',
  },
  {
    name: 'Emilia Costa', role: 'Community & events', city: 'Berlin', photo: 'e', initials: 'EC',
    bio: 'Runs everything you see in person. Books rooms, moderates panels, makes sure people who show up feel like they were expected.',
  },
  {
    name: 'Ben Tanaka', role: 'Editor, newsletter', city: 'Online / Lisbon', photo: 'b', initials: 'BT',
    bio: 'Journalist and essayist. Edits the Substack. Believes short sentences earn their place, and has killed several of ours that did not.',
  },
  {
    name: 'Marta Kowalska', role: 'Partnerships lead', city: 'Berlin', photo: 'c', initials: 'MK',
    bio: 'Talks to schools, ministries, and employers. Former policy advisor. Knows how public funding actually moves in Europe.',
  },
  {
    name: 'Henrik Lindqvist', role: 'Product & web', city: 'Online / Stockholm', photo: 'a', initials: 'HL',
    bio: 'Designer and front-end engineer. Maintains this site and the internal tools the programme runs on. Quiet force behind how things look.',
  },
  {
    name: 'Nadia Rahimi', role: 'Parents programme lead', city: 'Munich', photo: 'd', initials: 'NR',
    bio: 'Former primary school leader, now focused on the parent side of Educate the Educator. Runs the parent cohort groups.',
  },
  {
    name: 'Toni Brenner', role: 'Operations & community', city: 'Berlin', photo: 'e', initials: 'TB',
    bio: 'Holds the back-of-house together. Answers the emails, manages the memberships, keeps the coffee flowing at events.',
  },
]

export default function Team({ onNav }) {
  return (
    <>
      <header className="pagehead pagehead--teal">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">Team</div>
            <h1 className="pagehead__title">Ten people who <em>chose</em> to build this.</h1>
          </div>
          <p className="pagehead__lede">
            HFH is volunteer-run by design. A distributed, European-based team
            working across Berlin, Munich, and online. Names first, titles second.
          </p>
        </div>
      </header>

      <section className="team-grid-wrap">
        <div className="team-grid">
          {TEAM.map((m) => (
            <article className="teammate" key={m.name}>
              <div className={'teammate__photo teammate__photo--' + m.photo}>
                {m.initials}
              </div>
              <div>
                <h3 className="teammate__name">{m.name}</h3>
                <p className="teammate__role">{m.role}</p>
                <p className="teammate__city">{m.city}</p>
              </div>
              <p className="teammate__bio">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-join">
        <div className="team-join__inner">
          <div>
            <div className="eyebrow" style={{ color: 'var(--hfh-blue-900)' }}>Join us</div>
            <h2 className="team-join__title">Work you want to do? <em>There's room.</em></h2>
          </div>
          <div>
            <p className="team-join__body">
              We're a group of people who chose to build this. If you're an educator,
              researcher, writer, or organiser thinking about AI's human dimension — and
              you'd rather build than watch — we'd like to meet you.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="btn btn--primary btn--lg"
                onClick={() => onNav('contact')}
                style={{ background: 'var(--hfh-blue)' }}
              >
                Volunteer with us →
              </button>
              <button
                className="btn btn--outline btn--lg"
                onClick={() => onNav('experts')}
                style={{ borderColor: 'var(--hfh-blue)', color: 'var(--hfh-blue)' }}
              >
                See expert contributors
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
