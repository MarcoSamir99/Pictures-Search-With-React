import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [term, SetTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        SetTerm(event.target.value);
    };

    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit} >
            <label>Search Your Picture Here</label>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    );
}

export default SearchBar; 