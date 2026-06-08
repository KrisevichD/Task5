import { useGetProductsQuery } from '@/api/productsApi';
import React from 'react';
import Categories from './components/categories/Categories';
import Filters from './components/filters/Filters';
import Sort from './components/sort/Sort';
import Products from './components/products/Products';
import classes from "./styles.module.css"
import Spinner from '@/components/ui/spinner/Spinner';


const Catalog = () => {
    const { data, error, isLoading } = useGetProductsQuery()

    if (isLoading) return (
        <Spinner />
    )

    if (error) return (
        <>
            Failed to load data!
        </>
    )

    console.log(data)

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Catalog</h1>
            <div className={classes.section}>
                <div className={classes.sidebar}>
                    <Categories />
                </div>
                <div className={classes.main}>
                    <Filters />
                    <Sort />
                    <Products list={data.products} />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
