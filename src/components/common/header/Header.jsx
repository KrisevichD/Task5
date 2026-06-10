import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './styles.module.css';

import CartSvg from '@/assets/icons/cart.svg';
import Search from '@/components/common/search/Search';
import Logo from '@/components/ui/logo/Logo';
import Navbar from '@/components/ui/navbar/Navbar';

const Header = () => {
    const navlist = [
        {
            id: 1,
            path: '/catalog',
            name: 'About us',
        },
        {
            id: 2,
            path: '/catalog',
            name: 'Catalog',
        },
    ];
    const cart = useSelector((state) => state.cart);
    const cartAmount = cart.length > 99 ? '99+' : cart.length;

    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.collectionLeft}>
                    <Logo />
                    <Search />
                </div>
                <div className={classes.collectionRight}>
                    <Navbar navlist={navlist} />
                    <Link
                        key={`header-cart-${cart.length}`}
                        to={'/cart'}
                        className={classes.cart}
                        aria-label="open cart page"
                    >
                        <CartSvg aria-hidden={true} />
                        <span
                            className={classes.cartAmount}
                            aria-label="total count of items in cart"
                        >
                            {cartAmount}
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
