// src/components/Valores.jsx
import { FaHeart } from 'react-icons/fa';
import ValorCard from './ValorCard';
import '../assets/css/components.css';

function Valores() {
  const valoresData = [
    {
      title: 'Visão Holística',
      description: 'Partimos de uma visão integrativa do mundo, reconhecendo a interdependência entre todos os seres vivos e o meio ambiente. Acreditamos que o bem-estar humano, animal e ambiental estão profundamente conectados.',
    },
    {
      title: 'Respeito à Senciência Animal',
      description: 'Reconhecemos os animais como seres sencientes, que possuem a capacidade de sentir e perceber o mundo, tendo sensações e sentimentos. Por essa razão, são merecedores de total respeito e proteção em todas as nossas ações.',
    },
    {
      title: 'Defesa e Proteção Animal',
      description: 'Nosso escopo é promover a proteção e a defesa dos direitos dos animais, conforme a Declaração Universal dos Direitos dos Animais. Atuamos para garantir seu direito à vida, à saúde e à dignidade.',
    },
    {
      title: 'Educação e Conscientização',
      description: 'Temos como objetivo fomentar, ensinar e divulgar conceitos de saúde pública e bem-estar animal para toda a sociedade. Realizamos programas educativos, seminários, palestras e eventos para usar a conscientização como ferramenta de transformação.',
    },
    {
      title: 'Cuidado e Amparo Direto',
      description: 'Agimos diretamente para auxiliar, amparar e zelar pela saúde e segurança de animais em situação de risco, como os abandonados, extraviados ou que sofreram maus-tratos.',
    },
    {
      title: 'Adoção Responsável',
      description: 'Trabalhamos para introduzir animais em novos lares sob o regime de adoção responsável. Este processo é formalizado com a assinatura de um termo de responsabilidade, garantindo o acompanhamento durante a adaptação.',
    },
    {
      title: 'Saúde Integrativa',
      description: 'Promovemos a saúde de humanos e animais por meio de terapias integrativas. Nossas atividades incluem Terapia Assistida por Animais (T.A.A.), sessões de meditação e mindfulness com animais, e outras jornadas de bem-estar.',
    },
    {
      title: 'Preservação Ambiental',
      description: 'Atuamos ativamente na defesa do meio ambiente e na preservação da biodiversidade. Combatemos práticas como o tráfico e a exploração de animais silvestres, além da caça e pesca predatórias.',
    },
    {
      title: 'Legalidade e Ética',
      description: 'Nossas atividades observam rigorosamente os princípios constitucionais da Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Mantemos uma conduta ética e ilibada em todas as nossas operações.',
    },
    {
      title: 'Cooperação e Parcerias',
      description: 'Acreditamos na força da colaboração, atuando por ações próprias ou em parceria. Celebramos convênios e contratos com órgãos públicos e outras entidades para alcançar nossos objetivos sociais.',
    },
  ];

  return (
    <section id="valores" className="valores section">
      <div className="container">
        <h2><FaHeart style={{ marginRight: 8, color: '#b850d5' }} />NOSSOS VALORES</h2>
        <div className="valores-grid">
          {valoresData.map((valor) => (
            <ValorCard
              key={valor.title}
              title={valor.title}
              description={valor.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Valores;