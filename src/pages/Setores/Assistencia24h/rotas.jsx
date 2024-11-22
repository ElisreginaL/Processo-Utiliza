// src/pages/Setores/Assistencia24h/rotas.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aprovel from './Aprovel/Aprovel';  // Página de Acionamento
import MotoClub from './MotoClub/Motoclub'; // Página de Colisão
import NovaProtecao from './NovaProtecao/NovaProtecao'; // Página de Colisão
import Solidy from './Solidy/Solidy'; // Página de Colisão
import Assistencia24h from './Assistencia24h'; // Página Principal do Setor Assistência 24h

const RotasAssistencia24h = () => {
  return (
    <Routes>
      {/* Rota para o setor Assistência 24h */}
      <Route path="/assistencia24h" element={<Assistencia24h />} />

      {/* Rota para as outras subpáginas */}
      <Route path="/assistencia24h/aprovel" element={<Aprovel />} />
      <Route path="/assistencia24h/moto-club" element={<MotoClub />} />
      <Route path="/assistencia24h/nova-protecao" element={<NovaProtecao />} />
      <Route path="/assistencia24h/solidy" element={<Solidy />} />

      {/* Outras rotas podem ser adicionadas aqui */}
    </Routes>
  );
};

export default RotasAssistencia24h;
