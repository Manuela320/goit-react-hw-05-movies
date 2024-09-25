import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';

const API_KEY = 'd013df209d0544fd558fbda093c1a26d';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then (response => setMovie(response.data))
        .catch(error => console.log('Error fetching movie details:', error));  
    }, [movieId]);

    if(!movie) return <div>Loading...</div>;

    return (
        <div className={styles.movieDetails}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <ul>
                <li><Link to={`/movies/${movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
            </ul>
        </div>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.object
};

export default MovieDetails;