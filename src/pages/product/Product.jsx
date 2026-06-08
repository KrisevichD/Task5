import { useGetProductByIdQuery } from '@/api/productsApi';
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    if ( data ) console.log(data);
    return (
        <div>
            product {id}:
        </div>
    );
}

export default Product;
