// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({  movies }) => ( 
  <div>
    <MoviesList movies={movies} />
  </div>
)

export default MoviesPage
