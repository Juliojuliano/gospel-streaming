import React from 'react';
function Home({ artistas, playlists, navegarParaArtista, tocarMusica, setPlaylistAtual, playingPlaylistId }) {
  const getPlaylistArtists = (playlist) => {
    const artistasDaPlaylist = artistas.filter(artista =>
      artista.musicas.some(musica => playlist.musicas.includes(musica.id))
    );
    return artistasDaPlaylist.slice(0, 4);
  };

  return (
    <div>
      <h1 className="section-title">🎶 Adoração em Streaming</h1>
      <p className="section-subtitle">O melhor da música gospel em um só lugar</p>

      <h2 style={{ margin: '32px 0 16px', fontSize: '20px' }}>
        🔥 Artistas Populares
      </h2>
      <div className="artistas-grid">
        {artistas.map(artista => (
          <div 
            key={artista.id} 
            className="card"
            onClick={() => navegarParaArtista(artista)}
          >
            <div className="card-image">
              <img src={artista.imagem} alt={artista.nome} />
            </div>
            <div className="card-title">{artista.nome}</div>
            <div className="card-subtitle">{artista.genero} • {artista.seguidores.toLocaleString()} seguidores</div>
            <div className="card-songs">
              {artista.musicas.slice(0,2).map((m) => (
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
            <button 
              className="play-button"
              onClick={(e) => {
                e.stopPropagation();
                tocarMusica(artista.musicas[0], artista);
              }}
            >
              ▶
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ margin: '32px 0 16px', fontSize: '20px' }}>
        📋 Playlists em Destaque
      </h2>
      <div className="playlists-grid">
        {playlists.map(playlist => (
          <div key={playlist.id} className="card" onClick={() => {
            setPlaylistAtual && setPlaylistAtual(playlist);
            const queueIds = playlist.musicas;
            const firstTrackId = queueIds[0];
            const firstTrack = artistas.flatMap(a => a.musicas.map(m => ({ ...m, artista: a.nome, artistaImagem: a.imagem }))).find(t => t.id === firstTrackId);
            if (firstTrack) {
              tocarMusica(firstTrack, null, queueIds, playlist.id);
            }
          }}>
            <div className="card-image playlist-image-grid">
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
            <div className="card-title">{playlist.nome}</div>
            <div className="card-subtitle">{playlist.descricao}</div>
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
    </div>
  );
}

export default Home;
