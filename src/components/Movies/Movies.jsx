import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';


const API_KEY = 'd013df209d0544fd558fbda093c1a26d';

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(''); 

    const handleSearch = () => {
        if (!query) return; 

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            .then(response => {
                setMovies(response.data.results);
                setError(''); 
            })
            .catch(error => {
                console.error('Error searching movies:', error);
                setError('Something went wrong while fetching movies.'); 
            });
    };

    return (
        <div className={styles.movies}>
            <h1>Search Movies</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p className={styles.error}>{error}</p>} {}
            <ul>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))
                ) : (
                    <li>No movies found.</li> 
                )}
            </ul>
        </div>    
    );
};

export default Movies;