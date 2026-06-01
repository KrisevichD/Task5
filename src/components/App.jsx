import hw from '@/test';
import classes from './App.module.css'
import catPng from '@/assets/cat.png'
import catJpg from '@/assets/cat.jpg'
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Link, Outlet } from 'react-router-dom';

const App = () => {

    
    return (
        <>
            <Link to={'/about'}>About</Link>
            <br />
            <Link to={'/shop'}>Shop</Link>
            <img src={catJpg} alt="" />
            <img src={catPng} alt="" />
            <h1 className={classes.denis}>Hello world</h1>
            <Outlet/>
        </>
    );
}

export default App;
