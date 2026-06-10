import classes from "./styles.module.css"
import Logo from '@/components/ui/logo/Logo';
import Search from '@/components/common/search/Search';
import Navbar from '@/components/ui/navbar/Navbar';
import { useSelector } from 'react-redux';
import CartSvg from '@/assets/icons/cart.svg'
import { Link } from 'react-router-dom';
import useAnimationClass from '@/hooks/useAnimationClass';
import { useState } from "react";

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
    const { animationClass, setDefault } = useAnimationClass(classes.animatedCart, cart);
    const cartAmount = cart.length > 99 ? '99+' : cart.length;
    
    console.log(animationClass)

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
                        onAnimationEnd={setDefault} 
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
