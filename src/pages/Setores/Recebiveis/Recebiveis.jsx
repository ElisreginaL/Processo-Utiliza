// src/pages/Setores/Recebiveis/Recebiveis.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Recebiveis = () => {
  return (
    <div>
      <header>
        <h1>Recebiveis</h1>
        {/* Aqui pode ir o menu lateral ou a navegação */}
      </header>

      <main>
        {/* O Outlet renderiza as páginas internas, como a Home */}
        <Outlet />
      </main>
    </div>
  );
};

export default Recebiveis;
