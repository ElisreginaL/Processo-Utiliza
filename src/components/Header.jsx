import React from 'react';
import './Header.scss';
import DropdownMenu from './DropDownMenu'; // Importando o DropdownMenu
import { Link } from 'react-router-dom';


function Header() {
  const menuItems = [
    { label: "Assistência 24h", href: "#" },
    { label: "Comunicado", href: "#" },
    { label: "Recebíveis", href: "#" },
  ];

  const handleSelect = (label) => {
    console.log(`Item selecionado: ${label}`);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="navbar">
        <DropdownMenu 
          menuItems={menuItems} 
          onSelect={handleSelect} 
          menuTitle="Assistência 24h"
        />
      </div>
    </header>
  );
}

export default Header;
