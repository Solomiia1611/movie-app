import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { v4 as uuidv4 } from "uuid";

function MovieForm() {
  const { state, dispatch } = useContext(MovieContext);
  const [movie, setMovie] = useState({ title: "", genre: "", description: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const existingMovie = state.movies.find((movie) => movie.id === id);
      if (existingMovie) setMovie(existingMovie);
    }
  }, [id, state.movies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.genre) {
      alert("Заповніть усі обов'язкові поля!");
      return;
    }

    if (id) {
      dispatch({ type: "UPDATE_MOVIE", payload: movie });
    } else {
      dispatch({ type: "ADD_MOVIE", payload: { ...movie, id: uuidv4() } });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Назва фільму:
        <input
          type="text"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          required
        />
      </label>
      <label>
        Жанр:
        <input
          type="text"
          value={movie.genre}
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          required
        />
      </label>
      <label>
        Опис:
        <textarea
          value={movie.description}
          onChange={(e) => setMovie({ ...movie, description: e.target.value })}
        />
      </label>
      <button type="submit">{id ? "Оновити" : "Додати"}</button>
    </form>
  );
}

export default MovieForm;
