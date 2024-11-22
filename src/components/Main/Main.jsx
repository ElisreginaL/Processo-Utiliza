import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';  // Para validação de tipos
import './Main.scss'; // Estilos específicos para o Main

// O componente agora vai aceitar imagens de carrossel e notícias como props.
function Main({ imagensAtualizacoes, noticias }) {
  // Validação das props
  if (!Array.isArray(imagensAtualizacoes) || !Array.isArray(noticias)) {
    return <p>Erro: As props imagensAtualizacoes ou noticias não são arrays válidos.</p>;
  }

  return (
    <main>
      {/* Atualizações (Carrossel) */}
      <section className="atualizacoes">
        <h2>Atualizações</h2>
        <div className="carrossel">
          {imagensAtualizacoes.map((img, index) => (
            <div key={index} className="slide">
              <img
                src={require(`../../assets/images/${img}`)}  // Corrigido para caminho fixo
                alt={`Atualização ${index + 1}`}
                className="carrossel-imagem"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Notícias da Semana */}
      <section className="noticias">
        <h3>Notícias da Semana</h3>
        <ul>
          {noticias.map(noticia => (
            <li key={noticia.id}>
              <h2>{noticia.titulo}</h2>
              <div className="noticia-conteudo">
              <p>{noticia.descricao}...</p>
                <Link to={`/noticia/${noticia.id}`} className="btn-leia-mais">
                  Leia mais
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

// Validação das props usando PropTypes
Main.propTypes = {
  imagensAtualizacoes: PropTypes.array.isRequired,  // Espera um array de strings (nomes de imagens)
  noticias: PropTypes.array.isRequired,  // Espera um array de objetos com as notícias
};

export default Main;
