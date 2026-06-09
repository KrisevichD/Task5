import React from 'react';
import classes from "./styles.module.css"
import SearchSvg from "@/assets/icons/search.svg"

const Search = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className={classes.wrapper}>
            <input 
                className={classes.searchInput} 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label='search'
            />
            <SearchSvg className={classes.searchIcon}/>
        </div>
    );
}

export default Search;
