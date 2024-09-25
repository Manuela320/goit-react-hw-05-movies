import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const API_KEY = 'd013df209d0544fd558fbda093c1a26d';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
        .then(response => setReviews(response.data.results))
        .catch(error => console.error('Error fetching reviews:', error));
    }, [movieId]);

    return (
        <div className={styles.reviews}>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.author}: {review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Reviews;