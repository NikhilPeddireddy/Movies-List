import React from 'react';

function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <button 
        onClick={() => onSelect(null)} 
        className={!selectedGenre ? 'active' : ''}
      >
        All
      </button>
      {genres.map((genre, index) => (
        <button 
          key={index} 
          onClick={() => onSelect(genre)} 
          className={selectedGenre === genre ? 'active' : ''}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
