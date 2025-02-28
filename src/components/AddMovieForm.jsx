

import React from 'react';
import { useHistory } from 'react-router-dom';

const AddMovieForm = () => {
    const history = useHistory();

    const handleCancel = () => {
        history.push('/dashboard'); // Navigate back to the Dashboard
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Placeholder for submit functionality
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Director:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Genre:</label>
                    <select required>
                        <option value="">Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" required />
                </div>
                <div>
                    <label>Synopsis:</label>
                    <textarea required></textarea>
                </div>
                <div>
                    <label>Poster Image URL:</label>
                    <input type="url" required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddMovieForm;
