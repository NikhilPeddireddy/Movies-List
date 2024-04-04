import React from 'react';

function MovieList({ movies, selectedGenre }) {
  const filteredMovies = selectedGenre ? movies.filter(movie => movie.genre === selectedGenre) : movies;

  return (
    <div className="movie-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
