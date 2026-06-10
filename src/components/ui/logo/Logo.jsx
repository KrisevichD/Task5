import React from 'react';
import { Link } from 'react-router-dom';

import classes from './styles.module.css';

import NameSvg from '@/assets/icons/company.svg';
import LogoSvg from '@/assets/icons/logo.svg';

const Logo = () => {
    return (
        <Link className={classes.logoBanner} to={'/catalog'} aria-label="go to catalog">
            <LogoSvg className={classes.logo} aria-hidden={true} />
            <NameSvg aria-hidden={true} />
        </Link>
    );
};

export default Logo;
