// src/components/Footer.jsx

import '../assets/css/components.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <p className="pagefooter">&copy; {currentYear} Instituto Santo Animal. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;