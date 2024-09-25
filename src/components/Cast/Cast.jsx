import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

const API_KEY = 'd013df209d0544fd558fbda093c1a26d';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(response => setCast(response.data.cast))
        .catch(error => console.error('Error fetching cats:', error ));
    }, [movieId]);

    return (
        <div className={styles.cast}>
            <h1>Cast</h1>
            <ul>
                {cast.map(actor => (
                    <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
                ))}
            </ul>
        </div>     
    );
};

Cast.propTypes = {
    cast: PropTypes.array
};

export default Cast;