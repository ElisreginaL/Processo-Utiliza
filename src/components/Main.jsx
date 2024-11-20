import React from 'react';
import './Main.scss';  // Importa o arquivo SCSS corretamente

function Main({ title }) {
  return (
    <main className="main-content">
      <section className='search-box'>
        <div className='first-menu'>
          <h1>Menu <img src="/arrow.svg" alt="Seta" /></h1>
        </div>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Pesquise aqui..." />
          <button className="search-button">
            <span className="search-icon"></span> {/* ícone de lupa */}
          </button>
        </div>
        </section>
        <section className='content-section'>
          <div className='main-content-icons'>
            <ul>
              <li><a href="/atendimento-inicial"><b>0001 - Atendimento inicial</b></a></li>
              <li><a href="/acionamento"><b>0002 - Acionamento</b></a></li>
              <li><a href="/colisao"><b>0003 - Colisão</b></a></li>
              <li><a href="/finalizacao"><b>0004 - Finalização do atendimento</b></a></li>
              <li><a href="/telefones-uties"><b>0005 - Telefones úteis</b></a></li>
              <li><a href="/links-uties"><b>0006 - Links úteis</b></a></li>
              <li><a href="/passo-a-passo"><b>0007 - Passo a Passo</b></a></li>
            </ul>
          </div>

          <div className='main-content-fastclick'>
            <h2>FAST CLICK</h2>
            <ul>
              <li><a href="/mascara-padrao">Máscara padrão</a></li>
            </ul>
          </div>
        </section>


    </main>
  );
}

export default Main;
