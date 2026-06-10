import { useState } from 'react';

import { useGetCategoriesQuery, useGetProductsQuery } from '@/app/api/productsApi';

const useProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const {
        data: categories,
        isLoading: isCategoriesLoading,
        error: categoriesError,
    } = useGetCategoriesQuery();

    const activeCategory = selectedCategory || categories?.[0]?.slug || null;

    const {
        data: products,
        isLoading: isProductsLoading,
        error: productsError,
    } = useGetProductsQuery(selectedCategory ?? activeCategory, {
        skip: !activeCategory,
    });

    const isError = !!(categoriesError || productsError);

    return {
        categories,
        products,
        selectedCategory,
        setSelectedCategory,
        isError,
        isCategoriesLoading,
        isProductsLoading,
    };
};

export default useProductList;
