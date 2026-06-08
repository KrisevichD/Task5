import React, { useState } from 'react';
import classes from "./styles.module.css"

const Sort = () => {
    const [sort, setSort] = useState('ascending')

    return (
        <div className={classes.wrapper}>
            <p className={classes.legend}>Sort by:</p>
            <input 
                className={classes.input}
                type="radio" 
                name='sort'
                id='ascending'
                value={'ascending'}
                checked={sort === 'ascending'}
                onChange={(e) => {console.log(e.target.value); setSort(e.target.value)}}
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
                checked={sort === 'descending'}
                onChange={(e) => {console.log(e.target.value); setSort(e.target.value)}}
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
