// src/components/Quem.jsx

import { FaHeart } from 'react-icons/fa';
import '../assets/css/components.css';

function Quem() {
  return (
    <section id="quem" className="quem section">
      <div className="container">
        <h2><FaHeart style={{ marginRight: 8, color: '#b850d5' }} />QUEM SOMOS</h2>

        <div className="quem-content">
          <p>
            O Instituto Socioambiental, Cultural, Educativo e de Saúde Santo Animal (ISA) é uma pessoa jurídica de direito privado, constituída como uma associação civil sem fins lucrativos e com prazo de duração indeterminado. Fundado em 9 de abril de 2025, nossa atuação abrange todo o território nacional e internacional.
          </p>
          <p>
            Nascemos de uma visão holística e integrativa do mundo, em que se reconhece a interdependência entre todos os seres vivos e o meio ambiente. Nosso propósito é atuar em múltiplas esferas para promover as mudanças necessárias que assegurem um futuro mais justo, sustentável e harmonioso para todos.
          </p>

          <h3>Nossa Filosofia</h3>
          <p>
            Acreditamos que o bem-estar humano, animal e ambiental estão profundamente conectados. Entendemos que pessoas equilibradas e felizes são fundamentais para cuidar dos seus animais e do planeta, criando uma convivência baseada no respeito e na empatia.
          </p>
          <p>
            Reconhecemos os animais como seres sencientes, que têm a capacidade de sentir e perceber o mundo ao seu redor, com sensações e sentimentos e, portanto, são merecedores de respeito e proteção. Nosso compromisso é com a promoção dessa harmonia interespécies, estabelecendo uma convivência que enriqueça a vida de todos e contribua para a preservação do meio ambiente.
          </p>

          <h3>Nossas Frentes de Atuação</h3>
          <p>
            Para alcançar nossos objetivos, atuamos, por ações próprias ou em parceria, em diversas áreas:
          </p>
          <ul>
            <li><strong>Defesa Animal:</strong> Promovemos a proteção e a defesa dos direitos dos animais, garantindo-lhes o direito à vida, à saúde e à dignidade.</li>
            <li><strong>Educação e Cultura:</strong> Fomentamos e divulgamos conceitos de saúde pública e bem-estar animal para toda a sociedade através de programas educativos, atividades culturais, seminários, cursos e palestras.</li>
            <li><strong>Saúde Integrativa:</strong> Promovemos a saúde humana e animal por meio de atividades como Terapia Assistida por Animais (T.A.A.), sessões de meditação com animais e jornadas de terapias integrativas.</li>
            <li><strong>Resgate e Cuidado:</strong> Auxiliamos, amparamos e zelamos pela saúde e segurança de animais encontrados em situação de risco, como abandonados, extraviados ou submetidos a maus-tratos.</li>
            <li><strong>Adoção Responsável:</strong> Colaboramos na introdução de animais em lares seguros sob o regime de adoção responsável, formalizada por um termo de responsabilidade e com acompanhamento do período de adaptação.</li>
            <li><strong>Preservação Ambiental:</strong> Atuamos na defesa do meio ambiente e na preservação da biodiversidade, combatendo o tráfico e a exploração de animais silvestres.</li>
            <li><strong>Ações Judiciais:</strong> Ingressamos com ações judiciais na defesa dos animais e do meio ambiente equilibrado, quando necessário.</li>
          </ul>

          <p className="ethos-paragraph">
            Em todas as nossas atividades, observamos rigorosamente os princípios constitucionais da Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência, sendo vedada nossa participação em campanhas de interesse político-partidário ou eleitorais.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quem;