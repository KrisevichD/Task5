import CartSvg from '@/assets/icons/cart.svg'
import classes from './styles.module.css'
import { Link } from 'react-router-dom';

const CartIcons = () => {
    return (
        <div className={classes.wrapper}>
            <Link className={classes.link}>
                <CartSvg className={classes.icon}/>
                0
            </Link>
        </div>
    );
}

export default CartIcons;
