import React, { useState } from 'react';


import './Acionamento.scss';  // Importa o arquivo SCSS corretamente

function Acionamento() {
  // Usando useState para controlar o estado de abertura das caixas de diálogo
  const [isVistaOpen, setIsVistaOpen] = useState(false); // Controle de abertura da caixa "Acionamento à vista"
  const [isCredenciadoOpen, setIsCredenciadoOpen] = useState(false); // Controle de abertura da caixa "Acionamento credenciado"

  // Funções para alternar a visibilidade das caixas de diálogo
  const toggleVista = () => {
    setIsVistaOpen(!isVistaOpen); // Alterna a visibilidade da caixa de "Acionamento à vista"
  };

  const toggleCredenciado = () => {
    setIsCredenciadoOpen(!isCredenciadoOpen); // Alterna a visibilidade da caixa de "Acionamento credenciado"
  };

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

        <section className='main-content-wrapper'>
            {/* Seção FAST CLICK e ACIONAMENTO */}
            <div className='main-content-fastclick'>
                <h2>FAST CLICK</h2>
                <ul>
                    <li><a href="/mascara-padrao">Máscara padrão</a></li>
                    <li><a href="/colisao"><b>0003 - Colisão</b></a></li>
                </ul>
            </div>

            <div className='processo'>
                <div>
                    <h2>0002 - Acionamento</h2>
                    <p>Ato de entrar em contato com o prestador, confirmando a disponibilidade para reboque.<br /><br />
                    <li>Priorize o acionamento de prestadores credenciados</li>
                    </p>
                </div>

                {/* "Acionamento à vista" */}
                <div className="acionamento-view" onClick={toggleVista}>
                    <p>Acionamento à vista</p>
                </div>
                {isVistaOpen && (
                  <div className="additional-content">
                    <p>Como não há credenciado disponível, realize o acionamento à vista, seguindo os seguintes critérios de prioridade:

<p>Valor</p>
<p>Prévia</p>

<p><b>!No caso de prévia maior que 70 minutos para uma diferença de até R$ xx,xx dê a preferência pela prévia menor!</b></p></p>
                  </div>
                )}

                {/* "Acionamento credenciado" */}
                <div className="acionamento-credenciado" onClick={toggleCredenciado}>
                    <p>Acionamento credenciado</p>
                </div>
                {isCredenciadoOpen && (
                  <div className="additional-content">
                    <p>Informações adicionais sobre o "Aciona155611212122112111254mento credenciado"...</p>
                  </div>
                )}
            </div>
        </section>
    </main>
  );
}

export default Acionamento;
