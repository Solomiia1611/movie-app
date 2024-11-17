import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const MovieContext = createContext();

const initialState = {
  movies: [],
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, action.payload] };
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
