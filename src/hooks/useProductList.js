import { useGetCategoriesQuery, useGetProductsQuery } from "@/app/api/productsApi";
import { useEffect, useState } from "react";

const useProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const {
        data: categories,
        isLoading: isCategoriesLoading,
        error: categoriesError
    } = useGetCategoriesQuery();

    useEffect(() => {
        if (categories?.length > 0 && !selectedCategory) {
            setSelectedCategory(categories[0].slug);
        }
    }, [categories, selectedCategory]);

    const {
        data: products,
        isLoading: isProductsLoading,
        error: productsError
    } = useGetProductsQuery(selectedCategory, {
        skip: !selectedCategory,
    });

    const isError = !!(categoriesError || productsError);

    return {
        categories,
        products,
        selectedCategory,
        setSelectedCategory,
        isError,
        isCategoriesLoading,
        isProductsLoading 
    };
}

export default useProductList;