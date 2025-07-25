function Navbar() {
  return (
    React.createElement('nav', { className: 'navbar' },
      React.createElement('h1', null, 'Mein Portfolio'),
      React.createElement('ul', null,
        React.createElement('li', null, React.createElement('a', { href: '#about' }, 'Über mich')),
        React.createElement('li', null, React.createElement('a', { href: '#projects' }, 'Projekte')),
        React.createElement('li', null, React.createElement('a', { href: '#contact' }, 'Kontakt'))
      )
    )
  );
}

function Hero() {
  return (
    React.createElement('header', { className: 'hero' },
      React.createElement('h1', null, 'Willkommen zu meinem Portfolio'),
      React.createElement('p', null, 'Hier findest du eine Auswahl meiner Arbeiten.')
    )
  );
}

function About() {
  return (
    React.createElement('section', { id: 'about', className: 'section' },
      React.createElement('h2', null, 'Über mich'),
      React.createElement('p', null, 'Ich bin ein Webentwickler mit Fokus auf moderne React-Anwendungen.')
    )
  );
}

function Projects() {
  return (
    React.createElement('section', { id: 'projects', className: 'section' },
      React.createElement('h2', null, 'Projekte'),
      React.createElement('ul', { className: 'project-list' },
        React.createElement('li', null, 'Projekt A - Beschreibung'),
        React.createElement('li', null, 'Projekt B - Beschreibung'),
        React.createElement('li', null, 'Projekt C - Beschreibung')
      )
    )
  );
}

function Contact() {
  return (
    React.createElement('section', { id: 'contact', className: 'section' },
      React.createElement('h2', null, 'Kontakt'),
      React.createElement('p', null, 'Sie erreichen mich unter ',
        React.createElement('a', { href: 'mailto:email@example.com' }, 'email@example.com'),
        '.'
      )
    )
  );
}

function App() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(Navbar, null),
      React.createElement(Hero, null),
      React.createElement('main', null,
        React.createElement(About, null),
        React.createElement(Projects, null),
        React.createElement(Contact, null)
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
