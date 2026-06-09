import React, { useEffect, useRef, useState } from 'react';
import classes from "./styles.module.css"
import Logo from '@/components/ui/logo/Logo';
import Search from '@/components/ui/search/Search';
import Navbar from '@/components/ui/navbar/Navbar';
import { useSelector } from 'react-redux';
import CartSvg from '@/assets/icons/cart.svg'
import { Link } from 'react-router-dom';
import useIsFirstRender from '@/hooks/useIsFirstRender';

const Header = () => {
    const navlist = [
        {
            path: '/about',
            name: 'About us'
        },
        {
            path: '/catalog',
            name: 'Catalog'
        }
    ];

    const cart = useSelector((state) => state.cart);
    const cartAmount = cart.length > 99 ? '99+' : cart.length;
    const isFirstRender = useIsFirstRender();
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        if (isFirstRender) return;

        setAnimationClass("");
        queueMicrotask(() => setAnimationClass(classes.animatedCart));
    }, [cartAmount]);

    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.collectionLeft}>
                    <Logo />
                    <Search />
                </div>
                <div className={classes.collectionRight}>
                    <Navbar navlist={navlist}/>
                    <Link 
                        to={'/cart'} 
                        onAnimationEnd={() => setAnimationClass("")} 
                        className={classes.cart + " " + animationClass}
                    >
                        <CartSvg />
                        <span className={classes.cartAmount}>{cartAmount}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
