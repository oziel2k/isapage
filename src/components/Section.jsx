// src/components/Section.jsx

import '../assets/css/components.css';

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        {children} {/* 'children' é uma prop especial que renderiza o conteúdo passado dentro do componente */}
      </div>
    </section>
  );
}

export default Section;