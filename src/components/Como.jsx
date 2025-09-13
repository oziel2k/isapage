// src/components/Como.jsx

import { FaHeart } from 'react-icons/fa';
import '../assets/css/components.css';

function Como() {
  return (
    <section id="como-ajudar" className="como section">
      <div className="container">
        <h2><FaHeart style={{ marginRight: 8, color: '#b850d5' }} />COMO AJUDAR</h2>

        <div className="como-content">
          <p>
            Acreditamos que a transformação para um futuro mais justo e harmonioso para todos os seres é um esforço coletivo. O seu apoio, em qualquer uma de suas formas, é fundamental para que o Instituto Santo Animal continue seu trabalho de proteção, cuidado e conscientização. Cada gesto, do menor ao maior, fortalece nossa causa e nos ajuda a dar voz a quem não pode pedir ajuda.
          </p>
          <p>
            Existem diversas maneiras de se engajar e fazer a diferença. Veja como você pode contribuir:
          </p>

          <h3>Apoio Financeiro: Seja um Doador</h3>
          <p>
            Suas contribuições financeiras são vitais para a manutenção de nossas atividades, desde resgates e cuidados veterinários até a realização de programas educativos. Você pode ajudar através de:
          </p>
          <ul>
            <li><strong>Doações Diretas:</strong> Contribuições e doações voluntárias de pessoas físicas ou jurídicas são uma das nossas principais fontes de renda.</li>
            <li><strong>Patrocínios e Parcerias:</strong> Sua empresa ou organização pode apoiar nossos projetos através de patrocínios, convênios ou termos de colaboração.</li>
            <li><strong>Associados Beneméritos:</strong> Pessoas físicas ou jurídicas que desejam contribuir financeiramente de maneira notável podem se tornar associados Beneméritos, apoiando o desenvolvimento da entidade.</li>
            <li><strong>Legados e Heranças:</strong> O instituto também pode ser beneficiado por meio de donativos, heranças e legados.</li>
          </ul>

          <h3>Engajamento Direto: Doe seu Tempo e Talento</h3>
          <p>
            Seu tempo e talento são recursos preciosos que podem transformar diretamente a vida dos animais e da nossa comunidade.
          </p>
          <ul>
            <li><strong>Voluntariado:</strong> Participe de nossos Programas de Voluntariado, atuando em diversas frentes de trabalho do instituto.</li>
            <li><strong>Adoção Responsável:</strong> A forma mais transformadora de ajuda é oferecer um lar seguro e amoroso. Colaboramos para a introdução de animais em lares sob o regime de adoção responsável.</li>
            <li><strong>Eventos:</strong> Auxilie na organização e realização de nossos eventos, como feiras de adoção, brechós, seminários e campanhas de conscientização.</li>
            <li><strong>Serviços Pro Bono:</strong> Pessoas que contribuem de maneira notável com a prestação de serviços inestimáveis podem ser homenageadas como associados Beneméritos.</li>
          </ul>

          <h3>Outras Formas de Apoio</h3>
          <ul>
            <li><strong>Adquira Nossos Produtos:</strong> A comercialização de produtos personalizados, como camisetas, canecas e artigos para pets, tem sua receita integralmente aplicada na realização de nossas finalidades sociais.</li>
            <li><strong>Divulgue a Causa:</strong> A maneira mais simples e uma das mais poderosas de ajudar é divulgando nosso trabalho. Ao compartilhar nossas publicações, campanhas e eventos, você nos ajuda a fomentar e ensinar conceitos de bem-estar animal para toda a sociedade, sendo uma ferramenta essencial de transformação.</li>
          </ul>
          
          <p className="ethos-paragraph">
            Cada uma dessas ações nos aproxima de uma convivência mais equilibrada e baseada no respeito e na empatia entre todos os seres. Junte-se a nós!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Como;