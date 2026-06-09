import React from 'react';
import ProductCard from '../product-card/ProductCard';
import classes from "./styles.module.css"
import { useGetProductsQuery } from '@/api/productsApi';
import Spinner from '@/components/ui/spinner/Spinner';

const Products = ({ category, isAscending }) => {
    const { 
        data, 
        error, 
        isLoading,
    } = useGetProductsQuery(category);

    if (error) {
        return (
            <>
                Failed to load data!
            </>
        )
    }

    if (isLoading) return <Spinner />

    const sortedData = [...data.products].sort((a, b) => isAscending ? a.price - b.price : b.price - a.price);

    console.log(data)

    return (
        <ul className={classes.wrapper}>
            {sortedData?.map((item) => {
                return (
                    <ProductCard 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        price={item.price} 
                        thumbnail={item.thumbnail}
                        images={item.images}
                    />
                )
            })}
        </ul>
    );
}

export default Products;
