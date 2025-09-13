// src/App.jsx

import { FaUsers, FaInfoCircle, FaDonate, FaEnvelope } from 'react-icons/fa';
import './assets/css/App.css';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Section from './components/Section';
import Valores from './components/Valores';
import Footer from './components/Footer';

function App() {
  return (
    <> 
      <Navbar />        
      
        <main>        
          <Hero />        
        
          <Section id="sobre" title={<><FaUsers style={{marginRight:8}} />QUEM SOMOS</>} >
            <p>
              Somos uma organização dedicada à proteção e ao bem-estar animal. Trabalhamos com resgates, cuidados veterinários, adoções e ações de conscientização. Nosso compromisso é dar voz a quem não pode pedir ajuda.
            </p>
          </Section>
          
          <Valores />        
        
          <Section id="como-ajudar" title={<><FaDonate style={{marginRight:8}} />COMO AJUDAR</>} >
            <p>
              Mesmo sem formulário ainda, você pode apoiar com doações, divulgando o nosso trabalho ou se voluntariando. Cada gesto conta!
            </p>
          </Section>  

          <Section id="contato" title={<><FaEnvelope style={{marginRight:8}} />CONTATO</>} >
            <p>
              Envie um e-mail para contato@santoanimal.org, siga-nos nas redes sociais @santoanimal, ou ligue para (48) 99999-9999.
            </p>
          </Section>            

        </main>

        <Footer />        
    </>
  );
}

export default App;