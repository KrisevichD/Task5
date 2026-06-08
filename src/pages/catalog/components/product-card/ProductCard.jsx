import React from 'react';
import classes from "./styles.module.css"

const ProductCard = ({ id, title, thumbnail, images, price }) => {
    return (
        <li className={classes.wrapper}>
            <img 
                className={classes.image} 
                src={thumbnail} 
                alt={title} 
                width={240}
                height={270}
            />
            <div className={classes.info}>
                <p className={classes.title}>{title}</p>
                <p className={classes.price}>{price} €</p>
            </div>
        </li>
    );
}

export default ProductCard;
