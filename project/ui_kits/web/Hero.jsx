/* global React */

function Hero({ onCTA }) {
  return (
    <section className="hfh-hero">
      <div className="hfh-hero__inner">
        <div className="hfh-hero__eyebrow">AI literacy · Berlin · Est. 2024</div>
        <h1 className="hfh-hero__title">
          AI realists,<br />
          not evangelists.
        </h1>
        <p className="hfh-hero__lede">
          We help people and organisations understand what AI can and can't do — so
          nobody is left behind. We're thinking alongside you, not at you.
        </p>
        <div className="hfh-hero__ctas">
          <button className="hfh-btn hfh-btn--primary" onClick={() => onCTA('programmes')}>
            See our programmes
          </button>
          <button className="hfh-btn hfh-btn--ghost" onClick={() => onCTA('write')}>
            Read our thinking →
          </button>
        </div>
      </div>
      <div className="hfh-hero__petal" aria-hidden="true">
        <img src="../../assets/flower-mark.png" alt="" />
      </div>
    </section>
  );
}

window.Hero = Hero;
