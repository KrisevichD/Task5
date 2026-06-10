import { useState } from 'react';
import classes from "./styles.module.css"
import { Link } from 'react-router-dom';
import CartSvg from '@/assets/icons/cart.svg'
import useProductCard from '@/hooks/useProductCard';
import Spinner from '@/components/ui/spinner/Spinner';

const ProductCard = ({ product }) => {
    const { isInCart, handleCartToggle } = useProductCard(product);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const iconClasses = classes.cartIcon + " " + (isInCart ? classes.isPressed : "")

    return (
        <article className={classes.wrapper}>
            {!isLoaded && 
                <div className={classes.spinner}>
                    <Spinner />
                </div>
            }
            <img 
                className={classes.image} 
                src={product.thumbnail} 
                alt={product.title} 
                width={240}
                height={270}
                onLoad={() => setIsLoaded(true)}
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
                    onClick={handleCartToggle}
                >
                    <CartSvg className={iconClasses}/>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
