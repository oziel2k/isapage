// src/components/Navbar.jsx

import '../assets/css/components.css';

function Navbar() {
  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#valores', label: 'Valores' },
    { href: '#como-ajudar', label: 'Como Ajudar' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}img/isa.jpg`} alt="Logo Santo Animal" />
        </a>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;