// src/components/Hero.jsx

import '../assets/css/components.css';

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <h1 className="hero-title">Instituto Santo Animal</h1>
        <p className="hero-subtitle">Transformando vidas através do amor e cuidado aos animais</p>        
        <a href="#sobre" className="btn">Saiba mais</a>
      </div>
    </header>
  );
}

export default Hero;