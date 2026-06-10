import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/"
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "products/categories"
        }),
        getProducts: builder.query({
            query: (category) => `products/category/${category}`
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`
        }),
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetCategoriesQuery } = productsApi;