// src/pages/Setores/Assistencia24h/Solidy.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';  // Importando o Link para navegação


const Solidy = () => {
  return (
    <div>
      <header>
        <h1>SOLIDY</h1>
        {/* Aqui pode ir o link para o site da Solidy */}
        <p>
          <a href="https://www.solidy.com.br" target="_blank" rel="noopener noreferrer">
            Visite o site da Solidy
          </a>
        </p>
      </header>

      <main>
        {/* Aqui vão os botões que direcionam para as páginas internas */}
        <nav>
          <ul>
            <li>
              <Link to="acionamento">
                <button>Acionamento</button>
              </Link>
            </li>
            <li>
              <Link to="atendimento-inicial">
                <button>Atendimento Inicial</button>
              </Link>
            </li>
            <li>
              <Link to="colisao">
                <button>Colisão</button>
              </Link>
            </li>
            {/* Adicione outros links conforme necessário */}
          </ul>
        </nav>

        {/* O Outlet renderiza as páginas internas, como Acionamento, Atendimento Inicial, etc. */}
        <Outlet />
      </main>
    </div>
  );
};

export default Solidy;
