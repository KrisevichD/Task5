import React from 'react';
import classes from "./styles.module.css"
import { Link } from 'react-router-dom';
import CartSvg from '@/assets/icons/cart.svg'

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
            <div className={classes.titleRow}>
                <Link to={`/catalog/${id}`} className={classes.link}>{title}</Link>
            </div>
            <div className={classes.bottomRow}>
                <p className={classes.price}>{price} €</p>
                <button className={classes.cartBtn}>
                    <CartSvg className={classes.cartIcon}/>
                </button>
            </div>
        </li>
    );
}

export default ProductCard;
