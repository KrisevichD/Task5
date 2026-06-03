import React from 'react';
import LogoSvg from "@/assets/logo.svg"
import NameSvg from "@/assets/company.svg"
import classes from './styles.module.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link className={classes.logoBanner} to={'/'}>
            <LogoSvg className={classes.logo} />
            <NameSvg />
        </Link>
    );
}

export default Logo;
