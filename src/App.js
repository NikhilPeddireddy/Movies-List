import { useState } from 'react';
import { movies,genres } from './Data';
import MovieList from './MoviesList';
import GenreFilter from './GenreFilter';
import './App.css';

function App() {
const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
    setSelectedGenre(genre);
  };

  return (
    <div className="App">
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
      <MovieList movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}

export default App;
