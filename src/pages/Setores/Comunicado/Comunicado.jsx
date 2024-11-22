// src/pages/Setores/Comunicado/Comunicado.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Comunicado = () => {
  return (
    <div>
      <header>
        <h1>Comunicado</h1>
        {/* Aqui pode ir o menu lateral ou a navegação */}
      </header>

      <main>
        {/* O Outlet renderiza as páginas internas, como a Home */}
        <Outlet />
      </main>
    </div>
  );
};

export default Comunicado;
