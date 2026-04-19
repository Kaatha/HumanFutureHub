/* global React */

// ===================================================================
// FUTURE OF EDUCATION
// ===================================================================
function Education({ onNav }) {
  return (
    <>
      <header className="pagehead">
        <div className="pagehead__inner">
          <div>
            <div className="pagehead__eyebrow">Pillar 01 · Flagship programme</div>
            <h1 className="pagehead__title">Educate the <em>educator.</em></h1>
          </div>
          <p className="pagehead__lede">
            A structured AI literacy programme for teachers and parents. Practical
            guidance. Responsible use. No hype, no fear, and no frameworks invented
            in a boardroom.
          </p>
        </div>
      </header>

      <section className="gap-strip">
        <div className="gap-strip__inner">
          <h2 className="gap-strip__label">The gap<span>we fill</span></h2>
          <p className="gap-strip__body">
            No European player combines <em>teachers and parents</em> in the same AI
            literacy community. The parent dimension is universally underserved. That's
            the thing we think is worth building.
          </p>
        </div>
      </section>

      <section className="programme">
        <div className="programme__inner">
          <div className="programme__head">
            <div>
              <div className="eyebrow">The programme</div>
              <h2 className="section__title">Six weeks. Two sessions a week. One cohort.</h2>
            </div>
            <p className="section__sub">
              A structured track that leaves every participant with a concrete pilot for their
              own classroom or household — not a certificate, not a slide deck.
            </p>
          </div>
          <div className="weeks">
            <div className="week">
              <div className="week__num">Weeks 1–2</div>
              <h3 className="week__title">Mapping the territory</h3>
              <p className="week__desc">
                What's actually changing in classrooms and homes, what isn't, and what
                teachers and parents are already doing about it. Ground truth before tools.
              </p>
              <div className="week__meta">2 SESSIONS · LIVE + ASYNC</div>
            </div>
            <div className="week">
              <div className="week__num">Weeks 3–4</div>
              <h3 className="week__title">Tools in context</h3>
              <p className="week__desc">
                Honest reviews from practitioners. No vendor decks. What works, what leaks
                your students' data, and what to quietly avoid this year.
              </p>
              <div className="week__meta">2 SESSIONS · WORKSHOP</div>
            </div>
            <div className="week">
              <div className="week__num">Weeks 5–6</div>
              <h3 className="week__title">Building a pilot</h3>
              <p className="week__desc">
                Each participant leaves with a concrete, small-enough-to-ship pilot for
                their own classroom, school, or home. Peer reviewed, not graded.
              </p>
              <div className="week__meta">FINAL REVIEW · CERTIFICATE OF COMPLETION</div>
            </div>
          </div>
        </div>
      </section>

      <section className="audiences">
        <div className="audiences__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow">Who it's for</div>
              <h2 className="section__title">Two audiences. One room.</h2>
            </div>
            <p className="section__sub">
              Teachers and parents have different concerns. The programme acknowledges
              both, without splitting into two tracks.
            </p>
          </div>
          <div className="audiences__grid">
            <div className="audience">
              <div className="audience__label">For teachers</div>
              <h3 className="audience__title">Structured ground to stand on.</h3>
              <p className="audience__desc">
                You're being asked to teach with and about AI without training, policy,
                or time. We build the framing your school isn't giving you.
              </p>
              <ul className="audience__list">
                <li>Primary, secondary, and adult educators</li>
                <li>School leads writing AI policy this year</li>
                <li>Subject specialists — English, STEM, languages</li>
                <li>Teacher trainers and university faculty</li>
              </ul>
            </div>
            <div className="audience audience--parents">
              <div className="audience__label">For parents</div>
              <h3 className="audience__title">Guidance, not guilt.</h3>
              <p className="audience__desc">
                Your kid uses AI more than you do. We help you ask useful questions
                at home without pretending to have answers you don't.
              </p>
              <ul className="audience__list">
                <li>Parents of school-age children (primary → upper secondary)</li>
                <li>Carers and guardians navigating screen policy</li>
                <li>Parent-teacher association leads</li>
                <li>Anyone tired of the "kids and screens" discourse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="outcomes">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="eyebrow">What you leave with</div>
              <h2 className="section__title">Concrete outcomes, not vibes.</h2>
            </div>
            <p className="section__sub">
              We're allergic to "awareness" as a deliverable. Every participant walks
              out with something they can use on Monday morning.
            </p>
          </div>
          <div className="outcomes__grid">
            <div className="outcome">
              <div className="outcome__num">01</div>
              <p className="outcome__text">A written AI literacy framework for your context — classroom, school, or home.</p>
            </div>
            <div className="outcome">
              <div className="outcome__num">02</div>
              <p className="outcome__text">A shipped pilot. Small enough to run this term. Honest enough to learn from.</p>
            </div>
            <div className="outcome">
              <div className="outcome__num">03</div>
              <p className="outcome__text">A peer network across Germany of educators and parents doing the same work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <div className="eyebrow eyebrow--plain" style={{color: 'var(--hfh-orange)', justifyContent: 'center', display: 'flex'}}>Partner with us</div>
          <h2 className="cta-band__title">Running a school, a PTA, or a teacher training programme? <em>Let's build together.</em></h2>
          <p className="cta-band__sub">
            We partner with schools, ministries, and teacher training organisations to
            run Educate the Educator as a tailored cohort. Get in touch and we'll scope it.
          </p>
          <div className="cta-band__ctas">
            <button className="btn btn--accent btn--lg" onClick={() => onNav('contact')}>School / partner enquiry</button>
            <button className="btn btn--outline-white btn--lg" onClick={() => onNav('newsletter')}>Get cohort updates</button>
          </div>
        </div>
      </section>
    </>
  );
}

window.Education = Education;
