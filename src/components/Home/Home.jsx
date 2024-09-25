import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const API_KEY = 'd013df209d0544fd558fbda093c1a26d';


const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(response => setMovies(response.data.results))
        .catch(error => console.error('Error fetching trending movies:'));
    }, []);

    return (
        <div className={styles.home}>
            <h1>Trending Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Home;