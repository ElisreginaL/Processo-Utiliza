// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Assistencia24h from './pages/Setores/Assistencia24h/Assistencia24h'; // Página inicial do setor Assistência 24h
import Comunicado from './pages/Setores/Comunicado/Comunicado'; // Página do setor Comunicado
import Recebiveis from './pages/Setores/Recebiveis/Recebiveis'; // Página do setor Recebíveis
// import RotasSolidy from './pages/Setores/Assistencia24h/Solidy/rotas'; // Arquivo de rotas da Solidy
import Solidy from './pages/Setores/Assistencia24h/Solidy/Solidy';
import Acionamento from './pages/Setores/Assistencia24h/Solidy/Acionamento/Acionamento';

import Footer from './components/Footer/Footer'; // Importando o rodapé
import './App.scss';  // Importando os estilos globais

function App() {
  return (
    <div className="wrapper">
      <div className="main-content">
        <Routes>
          {/* Rota principal (página inicial do site) */}
          <Route path="/" element={<Home />} />

          {/* Rota para o setor Assistência 24h */}
          <Route path="assistencia24h" element={<Assistencia24h />} />
          <Route path="assistencia24h/solidy" element={<Solidy />} />
          <Route path="assistencia24h/solidy/acionamento" element={<Acionamento />} />
         
          

          {/* Rota para o setor Comunicado */}
          <Route path="comunicado/*" element={<Comunicado />} />

          {/* Rota para o setor Recebíveis */}
          <Route path="recebiveis/*" element={<Recebiveis />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
