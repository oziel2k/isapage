// src/components/ValorCard.jsx

import '../assets/css/components.css';

function ValorCard({ title, description }) {
  return (
    <div className="valor">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ValorCard;