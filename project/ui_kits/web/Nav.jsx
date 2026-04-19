/* global React */
const { useState } = React;

function Nav({ route, onNav }) {
  const items = [
    ['home', 'Home'],
    ['programmes', 'Programmes'],
    ['events', 'Events'],
    ['write', 'Writing'],
  ];
  return (
    <nav className="hfh-nav">
      <a className="hfh-nav__brand" href="#" onClick={e => { e.preventDefault(); onNav('home'); }}>
        <img src="../../assets/flower-mark.png" alt="" className="hfh-nav__mark" />
        <span className="hfh-nav__wordmark">Human Future Hub</span>
      </a>
      <div className="hfh-nav__links">
        {items.map(([key, label]) => (
          <a key={key}
             href="#"
             onClick={e => { e.preventDefault(); onNav(key); }}
             className={'hfh-nav__link ' + (route === key ? 'is-active' : '')}>
            {label}
          </a>
        ))}
      </div>
      <button className="hfh-btn hfh-btn--primary hfh-btn--sm" onClick={() => onNav('join')}>
        Join the programme
      </button>
    </nav>
  );
}

window.Nav = Nav;
