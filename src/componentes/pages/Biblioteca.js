import React from 'react';

function Biblioteca({ artistas, playlists, favoritos, navegarParaArtista, setPlaylistAtual, playlistAtual, tocarMusica, playingPlaylistId }) {
  const musicasFavoritas = artistas.flatMap(artista => 
    artista.musicas
      .filter(m => favoritos.includes(m.id))
      .map(m => ({ ...m, artistaNome: artista.nome }))
  );
  const musicasDaPlaylist = playlistAtual
    ? artistas.flatMap(artista => artista.musicas
        .filter(m => playlistAtual.musicas.includes(m.id))
        .map(m => ({ ...m, artistaNome: artista.nome })) )
    : [];

  const getPlaylistArtists = (playlist) => {
    const artistasDaPlaylist = artistas.filter(artista =>
      artista.musicas.some(musica => playlist.musicas.includes(musica.id))
    );
    return artistasDaPlaylist.slice(0, 4);
  };

  const artistasDaPlaylistAtual = playlistAtual
    ? artistas.filter(artista =>
        artista.musicas.some(musica => playlistAtual.musicas.includes(musica.id))
      ).slice(0, 4)
    : [];

  return (
    <div>
      <h1 className="section-title">📚 Sua Biblioteca</h1>

      <h2 style={{ margin: '24px 0 16px', fontSize: '18px' }}>Playlists</h2>
      <div className="biblioteca-grid">
        {playlists.map(playlist => (
          <div 
            key={playlist.id} 
            className="biblioteca-card"
            onClick={() => {
              setPlaylistAtual(playlist);
              const queueIds = playlist.musicas;
              const firstTrackId = queueIds[0];
              const firstTrack = artistas.flatMap(a => a.musicas.map(m => ({ ...m, artista: a.nome, artistaImagem: a.imagem }))).find(t => t.id === firstTrackId);
              if (firstTrack) {
                tocarMusica(firstTrack, null, queueIds, playlist.id);
              }
            }}
          >
            <div className="biblioteca-image playlist-image-grid">
              {getPlaylistArtists(playlist).map((artista, index) => (
                <img
                  key={`${playlist.id}-${artista.id}-${index}`}
                  src={artista.imagem}
                  alt={artista.nome}
                />
              ))}
              {playingPlaylistId === playlist.id && (
                <div className="playing-badge">Tocando</div>
              )}
            </div>
            <div className="biblioteca-info">
              <h3>{playlist.nome}</h3>
              <p>{playlist.descricao}</p>
              <p style={{ color: '#727272', marginTop: '4px', fontSize: '12px' }}>
                {playlist.musicas.length} músicas
              </p>
            </div>
            <button
              className="play-button"
              onClick={(e) => {
                e.stopPropagation();
                const queueIds = playlist.musicas;
                const firstTrackId = queueIds[0];
                const firstTrack = artistas.flatMap(a => a.musicas.map(m => ({ ...m, artista: a.nome, artistaImagem: a.imagem }))).find(t => t.id === firstTrackId);
                if (firstTrack) {
                  tocarMusica(firstTrack, null, queueIds, playlist.id);
                }
              }}
            >▶</button>
          </div>
        ))}
      </div>

      {playlistAtual && (
        <>
          <h2 style={{ margin: '32px 0 16px', fontSize: '18px' }}>🎧 Playlist Selecionada</h2>
          <div className="playlist-detalhes">
            <div className="playlist-selected-artists playlist-image-grid" style={{ marginBottom: '20px' }}>
              {artistasDaPlaylistAtual.map((artista, index) => (
                <img
                  key={`${playlistAtual.id}-${artista.id}-${index}`}
                  src={artista.imagem}
                  alt={artista.nome}
                />
              ))}
            </div>
            <h3>{playlistAtual.nome}</h3>
            <p>{playlistAtual.descricao}</p>
            <div className="musicas-lista">
              {musicasDaPlaylist.map((musica, index) => (
                <div key={musica.id} className="musica-item">
                  <span className="musica-index">{index + 1}</span>
                  <div className="musica-info-flex">
                    <div className="musica-titulo">{musica.titulo}</div>
                    <div className="musica-plays">{musica.artistaNome}</div>
                  </div>
                  <div className="musica-duracao">{musica.duracao}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {favoritos.length > 0 && (
        <>
          <h2 style={{ margin: '32px 0 16px', fontSize: '18px' }}>⭐ Músicas Curtidas</h2>
          <div className="musicas-lista">
            {musicasFavoritas.map((musica, index) => (
              <div key={musica.id} className="musica-item">
                <span className="musica-index">{index + 1}</span>
                <div className="musica-info-flex">
                  <div className="musica-titulo">{musica.titulo}</div>
                  <div className="musica-plays">{musica.artistaNome}</div>
                </div>
                <div className="musica-duracao">{musica.duracao}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 style={{ margin: '32px 0 16px', fontSize: '18px' }}>Artistas Salvos</h2>
      <div className="artistas-grid">
        {artistas.slice(0, 4).map(artista => (
          <div 
            key={artista.id} 
            className="card"
            onClick={() => navegarParaArtista(artista)}
          >
            <div className="card-image">
              <img src={artista.imagem} alt={artista.nome} />
            </div>
            <div className="card-title">{artista.nome}</div>
            <div className="card-subtitle">{artista.genero}</div>
            <div className="card-songs">
              {artista.musicas.slice(0,2).map(m => (
                <button
                  key={m.id}
                  type="button"
                  className="card-song"
                  onClick={(e) => { e.stopPropagation(); tocarMusica(m, artista); }}
                >
                  {m.titulo}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biblioteca;
