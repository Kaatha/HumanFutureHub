import { useState } from 'react'

const ENQUIRY_TYPES = [
  { id: 'general', label: 'General' },
  { id: 'expert', label: 'Expert advisor application' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'press', label: 'Press' },
]

const WHAT_TO_EXPECT = {
  general: ["We read everything. Response within 5 working days.", "If your question would make a good newsletter topic, we might ask if we can use it."],
  expert: ["Tell us your field, affiliation, and why HFH is relevant to your work.", "We'll schedule a short call to understand the fit.", "No formal vetting process — peer relationships, not hierarchy."],
  partnership: ["Describe the organisation and what you're looking to build together.", "We respond within 3 working days for partnership enquiries.", "Currently registering as gUG — funding arrangements post-registration."],
  press: ["We're happy to speak. Tell us the outlet, topic, and deadline.", "Our founder Kata Molnár handles press directly.", "Response within 48 hours for press enquiries."],
}

export default function Contact() {
  const [type, setType] = useState('general')
  const [form, setForm] = useState({ name: '', email: '', organisation: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <header className="pagehead">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">Contact</div>
            <h1 className="pagehead__title">Get in <em>touch.</em></h1>
          </div>
          <p className="pagehead__lede">
            We read everything. Whether you're a school looking to partner, a researcher
            who wants to contribute, or someone who just has a question — send it.
          </p>
        </div>
      </header>

      <section className="contact-section">
        <div className="contact-layout">
          <div>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 12 }}>
                What's this about?
              </p>
              <div className="enquiry-types">
                {ENQUIRY_TYPES.map(t => (
                  <button
                    key={t.id}
                    className={'enquiry-btn' + (type === t.id ? ' is-active' : '')}
                    onClick={() => setType(t.id)}
                    type="button"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {sent ? (
              <div style={{
                background: 'var(--hfh-teal-50)', border: '1.5px solid var(--hfh-teal)',
                borderRadius: 'var(--radius-lg)', padding: 40,
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--hfh-teal-700)', marginBottom: 12 }}>
                  Sent.
                </h3>
                <p style={{ fontSize: 16, color: 'var(--fg-2)' }}>
                  We'll be in touch. If it's press, within 48 hours. Everything else, within 5 working days.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-field">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" required placeholder="Your name" value={form.name} onChange={update('name')} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" required placeholder="you@work.com" value={form.email} onChange={update('email')} />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Organisation <span style={{ opacity: 0.6 }}>(optional)</span></label>
                  <input className="form-input" type="text" placeholder="School, company, university..." value={form.organisation} onChange={update('organisation')} />
                </div>
                <div className="form-field">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea" required
                    placeholder={
                      type === 'expert' ? 'Tell us your field, affiliation, and why HFH is relevant to your work...' :
                      type === 'partnership' ? 'Describe the organisation and what you\'re looking to build together...' :
                      type === 'press' ? 'Outlet, topic, and deadline...' :
                      'What\'s on your mind?'
                    }
                    value={form.message} onChange={update('message')}
                  />
                </div>
                <button className="btn btn--primary btn--lg" type="submit" style={{ alignSelf: 'flex-start' }}>
                  Send message →
                </button>
              </form>
            )}
          </div>

          <div className="contact-sidebar">
            <div className="contact-sidebar__what">
              <h4 className="contact-sidebar__what-title">What to expect</h4>
              <ul className="contact-sidebar__what-list">
                {(WHAT_TO_EXPECT[type] || WHAT_TO_EXPECT.general).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="contact-sidebar__social-title">Find us elsewhere</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <span className="social-link__icon">in</span>
                  LinkedIn group — 2,800+ members
                </a>
                <a href="#" className="social-link">
                  <span className="social-link__icon">✉</span>
                  Substack newsletter
                </a>
                <a href="#" className="social-link">
                  <span className="social-link__icon">◎</span>
                  Luma — event RSVPs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
