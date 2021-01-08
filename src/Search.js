import React from 'react';

function Search(props){
    return(
        <section className="search">
            <form>
            <label>
                <span>Search books</span>
                <input
                type="search"
                placeholder="henry"
                />
            </label>
            </form>
        </section>
    )
}

export default Search;