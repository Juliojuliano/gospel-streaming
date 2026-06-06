import React from 'react';

function Artista({ artista, tocarMusica, musicaAtual, favoritos, alternarFavorito }) {
  if (!artista) return <p style={{ padding: '40px', color: '#b3b3b3' }}>Selecione um artista</p>;

  const tocarTodas = () => {
    tocarMusica(artista.musicas[0], artista);
  };

  return (
    <div>
      <div className="artista-header">
        <div className="artista-image-large">
          <img src={artista.imagem} alt={artista.nome} />
        </div>
        <div className="artista-info">
          <p style={{ color: '#b3b3b3', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Artista
          </p>
          <h1>{artista.nome}</h1>
          <p>
            {artista.genero} • {artista.seguidores.toLocaleString()} seguidores
          </p>
          <button className="play-all-btn" onClick={tocarTodas}>
            ▶ Tocar Todas
          </button>
        </div>
      </div>

      <h2 style={{ marginBottom: '16px' }}>Músicas Populares</h2>
      <div className="musicas-lista">
        {artista.musicas.map((musica, index) => (
          <div 
            key={musica.id} 
            className={`musica-item ${musicaAtual?.id === musica.id ? 'active' : ''}`}
            onClick={() => tocarMusica(musica, artista)}
          >
            <span className="musica-index">{index + 1}</span>
            <div className="musica-info-flex">
              <div className="musica-titulo">{musica.titulo}</div>
              <div className="musica-plays">{musica.plays.toLocaleString()} plays</div>
            </div>
            <div className="musica-duracao">
              <button 
                className={`musica-fav-btn ${favoritos.includes(musica.id) ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  alternarFavorito(musica.id);
                }}
              >
                {favoritos.includes(musica.id) ? '♥' : '♡'}
              </button>
              {musica.duracao}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artista;
