import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./styles.module.css"

const Navbar = ({ navlist }) => {
    return (
        <div className={classes.wrapper}>
            { navlist?.map((item) => {
                return (
                    <Link 
                        key={item.path} 
                        className={classes.link} 
                        to={item.path}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>
    );
}

export default Navbar;
