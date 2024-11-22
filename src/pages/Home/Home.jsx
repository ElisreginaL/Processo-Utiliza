import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import './Home.scss';  // Importa os estilos da página Home

function Home() {
      // Definindo as imagens do carrossel específicas para este setor
  const imagensAtualizacoes = [
    'setores/assistencia24h.jpg', 
    'setores/assistencia24h.jpg', 
    'setores/assistencia24h.jpg'
  ];

  // Definindo as notícias específicas para este setor
  const noticias = [
    { id: 1, titulo: "Notícia 1 - Assistência 24h", descricao: "Detalhes sobre a notícia de assistência 24h..." },
    { id: 2, titulo: "Notícia 2 - Assistência 24h", descricao: "Informações sobre o serviço de assistência 24h..." },
    { id: 3, titulo: "Notícia 3 - Assistência 24h", descricao: "Notícias de atualizações de processos..." }
  ];

  
  return (
    <section>
      <Header />
      <Main imagensAtualizacoes={imagensAtualizacoes} noticias={noticias} />
      {/* Seção de Regulamentos */}
      <section className="regulamentos">
        <h2>Regulamentos</h2>
        <ul>
          <li>
            <a href="/arquivos/relatorio.pdf" download="relatorio.pdf">
              Baixar Relatório PDF
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Home;
