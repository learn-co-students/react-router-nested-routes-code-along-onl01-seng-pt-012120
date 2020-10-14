import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  const renderMovies = <ul>{Object.keys(movies).map(movieID =>
    <li><Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
  )}</ul>;
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;