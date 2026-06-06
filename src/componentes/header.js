import React from 'react';

function Header({ pagina, setPagina, onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setPagina('busca');
      if (onSearch) onSearch(searchTerm);
    }
  };

  return (
    <div className="header">
      <div className="header-nav">
        <button className="nav-btn" onClick={() => window.history.back()}>◀</button>
        <button className="nav-btn" onClick={() => window.history.forward()}>▶</button>
      </div>
      
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Busque artistas ou músicas gospel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="header-user">
        <div className="user-avatar">G</div>
        <span className="user-name">GospelStream</span>
      </div>
    </div>
  );
}

export default Header;
