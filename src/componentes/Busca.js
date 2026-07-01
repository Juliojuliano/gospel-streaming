import React, { useEffect, useState } from 'react';

function Busca({ artistas, navegarParaArtista, tocarMusica, searchTerm: propSearchTerm, setSearchTerm }) {
  const [searchTerm, setLocalSearchTerm] = useState(propSearchTerm || '');

  useEffect(() => {
    setLocalSearchTerm(propSearchTerm || '');
  }, [propSearchTerm]);
  const [genreFilter, setGenreFilter] = useState('Todos');

  const generos = ['Todos', 'Adoração', 'Louvor', 'Gospel Contemporâneo', 'Gospel Clássico'];

  const artistasFiltrados = artistas.filter(artista => {
    const matchNome = artista.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenero = genreFilter === 'Todos' || artista.genero === genreFilter;
    const matchMusica = artista.musicas.some(m => 
      m.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (matchNome || matchMusica) && matchGenero;
  });

  return (
    <div className="busca-container">
      <div className="busca-header">
        <h1>Buscar</h1>
        <input
          type="text"
          className="busca-input-large"
          placeholder="Artista, música ou playlist..."
          value={searchTerm}
          onChange={(e) => {
            setLocalSearchTerm(e.target.value);
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="genre-tags">
        {generos.map(genero => (
          <button
            key={genero}
            className={`genre-tag ${genreFilter === genero ? 'active' : ''}`}
            onClick={() => setGenreFilter(genero)}
          >
            {genero}
          </button>
        ))}
      </div>

      {searchTerm && (
        <>
          <h2 style={{ margin: '24px 0 16px', fontSize: '18px' }}>
            Resultados para "{searchTerm}"
          </h2>
          <div className="resultados-grid">
            {artistasFiltrados.map(artista => (
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

          {artistasFiltrados.length === 0 && (
            <p style={{ color: '#b3b3b3', padding: '20px 0' }}>
              Nenhum resultado encontrado para "{searchTerm}"
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Busca;
