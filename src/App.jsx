// src/App.jsx

import { FaUsers, FaInfoCircle, FaDonate, FaEnvelope } from 'react-icons/fa';
import './assets/css/App.css';

import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Section from './components/Section';
import Valores from './components/Valores';
import Footer from './components/Footer';
import Quem from './components/Quem';
import Como from './components/Como';

function App() {
  return (
    <> 
      <Navbar />        
      
        <main>        
          <Hero />        
        
          <Quem />
          
          <Valores />        
        
          <Como />

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