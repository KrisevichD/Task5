import React, { useState } from 'react';
import classes from "./styles.module.css"

const Sort = ({ sortType, setSortType }) => {
    return (
        <div className={classes.wrapper}>
            <p className={classes.legend}>Sort by:</p>
            <input 
                className={classes.input}
                type="radio" 
                name='sort'
                id='ascending'
                value={'ascending'}
                checked={sortType === 'ascending'}
                onChange={(e) => setSortType(e.target.value)}
            />
            <label 
                htmlFor='ascending'
                className={classes.label}
            >
                Ascending price
            </label>
            <input 
                className={classes.input}
                type="radio" 
                name='sort'
                id='descending'
                value={'descending'}
                checked={sortType === 'descending'}
                onChange={(e) => setSortType(e.target.value)}
            />
            <label 
                htmlFor='descending'
                className={classes.label}
            >
                Descending price
            </label>
        </div>
    );
}

export default Sort;
