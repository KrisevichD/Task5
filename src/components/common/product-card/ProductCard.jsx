import React from 'react';
import classes from "./styles.module.css"
import { Link } from 'react-router-dom';
import CartSvg from '@/assets/icons/cart.svg'
import useProductCard from '@/hooks/useProductCard';

const ProductCard = ({ product }) => {
    const { isInCart, handleToggleProduct } = useProductCard(product);
    const iconClasses = classes.cartIcon + " " + (isInCart ? classes.isPressed : "")

    return (
        <article className={classes.wrapper}>
            <img 
                className={classes.image} 
                src={product.thumbnail} 
                alt={product.title} 
                width={240}
                height={270}
            />
            <Link to={`/catalog/${product.id}`} className={classes.link}>
                <h2 className={classes.title}>
                    {product.title}
                </h2>
            </Link>
            <div className={classes.bottomRow}>
                <p className={classes.price}>{product.price} €</p>
                <button 
                    className={classes.cartBtn} 
                    onClick={handleToggleProduct}
                >
                    <CartSvg className={iconClasses}/>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
