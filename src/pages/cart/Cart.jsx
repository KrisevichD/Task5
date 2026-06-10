import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './styles.module.css';

import { clearCart } from '@/app/store/cart/cartSlice';
import ProductCard from '@/components/common/product-card/ProductCard';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const clearButtonHandler = () => dispatch(clearCart());

    return (
        <div className={classes.wrapper}>
            <h1>Cart</h1>
            <div className={classes.list}>
                {cart?.map((item) => {
                    return <ProductCard key={item.id} product={item} />;
                })}
            </div>
            {cart.length > 0 ? (
                <div className={classes.buttons}>
                    <button className={classes.clearButton} onClick={clearButtonHandler}>
                        clear cart
                    </button>
                    <button className={classes.orderButton} onClick={clearButtonHandler}>
                        order
                    </button>
                </div>
            ) : (
                <>
                    <h2>Cart is empty!</h2>
                    <Link to={'/catalog'} className={classes.link}>
                        Go to catalog
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;
