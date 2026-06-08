import React from 'react';
import classes from "./styles.module.css"
import SearchSvg from "@/assets/icons/search.svg"

const Search = () => {
    return (
        <div className={classes.wrapper}>
            <input className={classes.searchInput} type="text" />
            <SearchSvg className={classes.searchIcon}/>
        </div>
    );
}

export default Search;
