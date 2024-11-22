// src/pages/Setores/Solidy/rotas.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acionamento from './Acionamento/Acionamento';  // Página de Acionamento
import AtendimentoInicial from './AtendimentoInicial/AtendimentoInicial'; // Página Atendimento Inicial
import Colisao from './Colisao/Colisao'; // Página de Colisão
import FinalizacaoDoAtendimento from './FinalizacaoDoAtendimento/FinalizacaoDoAtendimento'; // Página de Colisão
import LinksUteis from './LinksUteis/LinksUteis'; // Página de Colisão
import MascaraPadrao from './MascaraPadrao/MascaraPadrao'; // Página de Colisão
import PassoaPasso from './PassoaPasso/PassoaPasso'; // Página de Colisão
import TelefonesUteis from './TelefonesUteis/TelefonesUteis'; // Página de Colisão
import Solidy from './Solidy';


const RotasSolidy = () => {
  return (
    <Routes>
      <Route path="solidy" element={<Solidy />}>
        <Route index element={<Solidy />} />
        <Route path="acionamento" element={<Acionamento />} />
        <Route path="atendimento-inicial" element={<AtendimentoInicial />} />
        <Route path="colisao" element={<Colisao />} />
        <Route path="finalizacao-do-atendimento" element={<FinalizacaoDoAtendimento />} />
        <Route path="links-uteis" element={<LinksUteis />} />
        <Route path="mascara-padrao" element={<MascaraPadrao />} />
        <Route path="passo-a-passo" element={<PassoaPasso />} />
        <Route path="telefones-uteis" element={<TelefonesUteis />} />
        {/* Adicione outras rotas conforme necessário */}
      </Route>
    </Routes>
  );
};

export default RotasSolidy;
