import { useState } from 'react';

const useSortedProducts = (products) => {
    const [sortType, setSortType] = useState('ascending');
    const sortedProducts = products
        ? [...products.products].sort((a, b) =>
              sortType === 'ascending' ? a.price - b.price : b.price - a.price,
          )
        : [];

    return {
        sortedProducts,
        sortType,
        setSortType,
    };
};

export default useSortedProducts;
