import React from 'react';
import { useParams } from 'react-router-dom';

function Noticia() {
  const { id } = useParams();

  // Aqui você pode fazer uma chamada à API ou carregar o conteúdo da notícia com base no `id`
  return (
    <div>
      <h1>Notícia {id}</h1>
      <p>Detalhes da notícia {id}...</p>
      {/* Aqui você pode renderizar mais conteúdo específico da notícia */}
    </div>
  );
}

export default Noticia;
