import React from 'react';
import classes from "./styles.module.css"
import Logo from '@/components/ui/logo/Logo';
import Search from '@/components/ui/search/Search';
import CartIcons from '@/components/ui/cart-icons/CartIcons';
import Navbar from '@/components/ui/navbar/Navbar';

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
    ]

    return (
        <header className={classes.header}>
            <div className={classes.headerInner}>
                <div className={classes.collectionLeft}>
                    <Logo />
                    <Search />
                </div>
                <div className={classes.collectionRight}>
                    <Navbar navlist={navlist}/>
                    <CartIcons />
                </div>
            </div>
        </header>
    );
}

export default Header;
