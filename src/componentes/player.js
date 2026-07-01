import React, { useRef, useEffect, useState } from 'react';

function Player({ musica, favoritos, alternarFavorito, nextTrack, prevTrack }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isFavorite = favoritos.includes(musica.id);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = musica?.audio || '';
    audio.load();

    const onEnded = () => {
      if (nextTrack) {
        nextTrack();
      } else {
        setPlaying(false);
      }
    };
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMeta = () => setDuration(audio.duration || 0);

    audio.addEventListener('ended', onEnded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMeta);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }

    return () => {
      audio.pause();
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMeta);
    };
  }, [musica, nextTrack]);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const formatTime = (t) => {
    if (!t || isNaN(t)) return '0:00';
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const onSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.min(Math.max(0, x / rect.width), 1);
    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = pct * duration;
      setCurrentTime(pct * duration);
    }
  };

  return (
    <div className="player">
      <audio ref={audioRef} />
      <div className="player-info">
        <div className="player-image">
          {musica.artistaImagem ? (
            <img src={musica.artistaImagem} alt={musica.artista} />
          ) : (
            musica.artista.charAt(0)
          )}
        </div>
        <div className="player-text">
          <div className="player-music-name">{musica.titulo}</div>
          <div className="player-artist-name">{musica.artista}</div>
        </div>
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => alternarFavorito(musica.id)}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>

      <div className="player-controls">
        <div className="player-buttons">
          <button className="player-btn" onClick={(e) => { e.stopPropagation(); prevTrack && prevTrack(); }}>⏮</button>
          <button className="player-btn play-btn" onClick={togglePlay}>{playing ? '⏸' : '▶'}</button>
          <button className="player-btn" onClick={(e) => { e.stopPropagation(); nextTrack && nextTrack(); }}>⏭</button>
        </div>
        <div className="player-progress">
          <span className="progress-time">{formatTime(currentTime)}</span>
          <div className="progress-bar" onClick={onSeek} role="button">
            <div className="progress-fill" style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}></div>
          </div>
          <span className="progress-time">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-actions">
        <button className="player-btn">♫</button>
        <button className="player-btn">🔊</button>
      </div>
    </div>
  );
}

export default Player;
