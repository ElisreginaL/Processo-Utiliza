import React, { useState } from 'react';
import './DropDownMenu.scss';

function DropdownMenu({ menuItems, onSelect, menuTitle }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsVisible(!isVisible);

  const handleItemClick = (label) => {
    onSelect(label); // Chama a função para atualizar o título do menu
    setIsVisible(false); // Fecha o menu após selecionar um item
  };

  return (
    <div className="dropdown-menu">
      <div className="toggle-container" onClick={toggleMenu}>
        <span className="toggle-text">{menuTitle}</span>
        <div className={`arrow ${isVisible ? 'rotate' : ''}`}><img src="/arrow.svg" alt="Seta" /></div>
      </div>
      <div className={`nav-box ${isVisible ? 'show' : ''}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="#" onClick={() => handleItemClick(item.label)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
