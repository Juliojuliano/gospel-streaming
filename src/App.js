import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header';
import Sidebar from './componentes/sidebar';
import Player from './componentes/player';
import Home from './componentes/pages/home';
import Artista from './componentes/pages/Artitsta';
import Biblioteca from './componentes/pages/Biblioteca';
import Busca from './componentes/Busca';
import { artistas, playlists } from './data/artistas';

function App() {
  const [pagina, setPagina] = useState('home');
  const [artistaSelecionado, setArtistaSelecionado] = useState(null);
  const [musicaAtual, setMusicaAtual] = useState(null);
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [playingPlaylistId, setPlayingPlaylistId] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [playlistsUsuario] = useState(playlists);
  const [playlistAtual, setPlaylistAtual] = useState(null);

  const tocarMusica = (musica, artista, incomingQueue = null, playlistId = null) => {
    let builtQueue = [];
    if (incomingQueue && incomingQueue.length > 0) {
      // incomingQueue may be array of track objects or array of ids
      if (typeof incomingQueue[0] === 'object' && incomingQueue[0].titulo) {
        builtQueue = incomingQueue.map(m => ({
          ...m,
          // ensure artista fields exist when provided by caller
          artista: m.artista || m.artista || (artista ? artista.nome : ''),
          artistaImagem: m.artistaImagem || (artista ? artista.imagem : m.artistaImagem)
        }));
      } else {
        // assume array of ids — resolve using artistas data
        builtQueue = artistas.flatMap(a =>
          a.musicas
            .filter(m => incomingQueue.includes(m.id))
            .map(m => ({ ...m, artista: a.nome, artistaImagem: a.imagem }))
        );
      }
    } else if (artista) {
      builtQueue = artista.musicas.map(m => ({ ...m, artista: artista.nome, artistaImagem: artista.imagem }));
    }

    setQueue(builtQueue);
    const idx = builtQueue.findIndex(m => m.id === musica.id);
    const newIndex = idx >= 0 ? idx : 0;
    setCurrentIndex(newIndex);
    setMusicaAtual({ ...builtQueue[newIndex] });
    // mark playing playlist if provided
    setPlayingPlaylistId(playlistId || null);
  };

  const playNext = () => {
    if (!queue || queue.length === 0) return;
    const next = (currentIndex + 1) % queue.length;
    setCurrentIndex(next);
    setMusicaAtual({ ...queue[next] });
  };

  const playPrev = () => {
    if (!queue || queue.length === 0) return;
    const prev = (currentIndex - 1 + queue.length) % queue.length;
    setCurrentIndex(prev);
    setMusicaAtual({ ...queue[prev] });
  };

  const alternarFavorito = (musicaId) => {
    if (favoritos.includes(musicaId)) {
      setFavoritos(favoritos.filter(id => id !== musicaId));
    } else {
      setFavoritos([...favoritos, musicaId]);
    }
  };

  const navegarParaArtista = (artista) => {
    setArtistaSelecionado(artista);
    setPagina('artista');
  };

  const renderizarPagina = () => {
    switch(pagina) {
      case 'home':
        return (
          <Home 
            artistas={artistas}
            playlists={playlistsUsuario}
            navegarParaArtista={navegarParaArtista}
            tocarMusica={tocarMusica}
            setPlaylistAtual={setPlaylistAtual}
            playingPlaylistId={playingPlaylistId}
          />
        );
      case 'artista':
        return (
          <Artista 
            artista={artistaSelecionado}
            tocarMusica={tocarMusica}
            musicaAtual={musicaAtual}
            favoritos={favoritos}
            alternarFavorito={alternarFavorito}
          />
        );
      case 'biblioteca':
        return (
          <Biblioteca 
            playlists={playlistsUsuario}
            artistas={artistas}
            favoritos={favoritos}
            navegarParaArtista={navegarParaArtista}
            setPlaylistAtual={setPlaylistAtual}
            playlistAtual={playlistAtual}
            tocarMusica={tocarMusica}
            playingPlaylistId={playingPlaylistId}
          />
        );
      case 'busca':
        return (
          <Busca 
            artistas={artistas}
            navegarParaArtista={navegarParaArtista}
            tocarMusica={tocarMusica}
          />
        );
      default:
        return (
          <Home 
            artistas={artistas}
            playlists={playlistsUsuario}
            navegarParaArtista={navegarParaArtista}
            tocarMusica={tocarMusica}
            setPlaylistAtual={setPlaylistAtual}
            playingPlaylistId={playingPlaylistId}
          />
        );
    }
  };

  return (
    <div className="app">
      <Sidebar 
        pagina={pagina} 
        setPagina={setPagina}
        playlists={playlistsUsuario}
        setPlaylistAtual={setPlaylistAtual}
      />
      <div className="main-content">
        <Header 
          pagina={pagina}
          setPagina={setPagina}
        />
        <div className="content">
          {renderizarPagina()}
        </div>
      </div>
      {musicaAtual && (
        <Player 
          musica={musicaAtual}
          favoritos={favoritos}
          alternarFavorito={alternarFavorito}
          nextTrack={playNext}
          prevTrack={playPrev}
        />
      )}
    </div>
  );
}

export default App;

