import React, { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";

function MovieList() {
  const { state } = useContext(MovieContext);
  const [search, setSearch] = useState("");

  const filteredMovies = state.movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Список фільмів</h1>
      <input
        type="text"
        placeholder="Пошук за назвою"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
