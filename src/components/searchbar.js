import React from 'react';

export default function Searchbar({ search, setSearch }) {

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }



    return (
        <div className="search-bar">
            <input type="text"
                name={search}
                placeholder="Type unit name "
                onChange={handleSearch}
            />
        </div>
    )
}