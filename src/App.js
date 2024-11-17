import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import MovieForm from "./pages/MovieForm";
import MovieDetails from "./pages/MovieDetails";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/edit/:id" element={<MovieForm />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
