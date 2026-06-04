import { useGetProductsQuery } from '@/api/productsApi';
import React from 'react';


const Products = () => {
    const { data, error, isLoading } = useGetProductsQuery()


    return (
        <div>
            
        </div>
    );
}

export default Products;
