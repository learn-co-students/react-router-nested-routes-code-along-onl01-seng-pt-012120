import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import EditMovie from '../components/EditMovie'

const MovieShow = ({match, movies}) => {
    return (
        <div>
            <h3>{ movies[match.params.movieId].title }</h3>
            <Link to={`${match.url}/edit`}>Edit</Link>
            <Route exact path={`${match.url}/edit`} render={routerProps => <EditMovie {...routerProps} movie={movies[match.params.movieId]} /> }/>
        </div>
    );
}

export default MovieShow;
