import React from 'react';
import ProductCard from '../product-card/ProductCard';
import classes from "./styles.module.css"

const Products = ({ list }) => {
    return (
        <ul className={classes.wrapper}>
            {list?.map((item) => {
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
