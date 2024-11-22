import React from 'react';
import MainNavbar from '../Navbar/MainNavbar';  // Caminho relativo para o componente MainNavbar
import SecondaryNavbar from '../Navbar/SecondaryNavbar';

function Header() {
  return (
    <header>
      <MainNavbar /> {/* Componente de Barra de Navegação */}
      <SecondaryNavbar />
    </header>
  );
}

export default Header;
