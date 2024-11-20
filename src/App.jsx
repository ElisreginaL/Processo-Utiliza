// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';  // Importando o componente Main
import Footer from './components/Footer';
import './App.scss';

// Adicione seus componentes que irão exibir as informações detalhadas
import AtendimentoInicial from './components/process-details/AtendimentoInicial'; 
import Acionamento from './components/process-details/Acionamento'; 
import Colisao from './components/process-details/Colisao'; 
import Finalizacao from './components/process-details/Finalizacao'; 
import TelefonesUteis from './components/process-details/TelefonesUteis'; 
import LinksUteis from './components/process-details/LinksUteis'; 
import PassoAPasso from './components/process-details/PassoAPasso'; 
import MascaraPadrao from './components/process-details/MascaraPadrao'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Definição das rotas para os detalhes do processo */}
        <Route path="/atendimento-inicial" element={<AtendimentoInicial />} />
        <Route path="/acionamento" element={<Acionamento />} />
        <Route path="/colisao" element={<Colisao />} />
        <Route path="/finalizacao" element={<Finalizacao />} />
        <Route path="/telefones-uties" element={<TelefonesUteis />} />
        <Route path="/links-uties" element={<LinksUteis />} />
        <Route path="/passo-a-passo" element={<PassoAPasso />} />
        <Route path="/mascara-padrao" element={<MascaraPadrao />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
