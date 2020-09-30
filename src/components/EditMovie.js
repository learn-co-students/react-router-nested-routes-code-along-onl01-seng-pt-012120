import React from 'react';

const EditMovie = ({ match, movie }) => {
    return (
        <div>
            <h3>This should be an edit page</h3>
            <p>Just to test if I understood this lection</p>
            <p>Edit {movie.title}</p>
        </div>
    );
}

export default EditMovie;
