import React from 'react';

function Sidebar({ pagina, setPagina, playlists, setPlaylistAtual }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">🎵</span>
        <span>GospelStream</span>
      </div>

      <div className="sidebar-menu">
        <button 
          className={`menu-item ${pagina === 'home' ? 'active' : ''}`}
          onClick={() => setPagina('home')}
        >
          <span className="menu-icon">🏠</span>
          <span>Início</span>
        </button>
        <button 
          className={`menu-item ${pagina === 'busca' ? 'active' : ''}`}
          onClick={() => setPagina('busca')}
        >
          <span className="menu-icon">🔍</span>
          <span>Buscar</span>
        </button>
        <button 
          className={`menu-item ${pagina === 'biblioteca' ? 'active' : ''}`}
          onClick={() => setPagina('biblioteca')}
        >
          <span className="menu-icon">📚</span>
          <span>Biblioteca</span>
        </button>
      </div>

      <div className="sidebar-section-title">Playlists</div>
      <div className="sidebar-playlists">
        {playlists.map(playlist => (
          <div 
            key={playlist.id} 
            className="playlist-item"
            onClick={() => {
              setPlaylistAtual(playlist);
              setPagina('biblioteca');
            }}
          >
            {playlist.nome}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
