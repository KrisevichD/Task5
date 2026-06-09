import { productsApi } from "@/api/productsApi";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        toggleProductInCart: (state, action) => {
            const indexInCart = state.findIndex(item => item.id === action.payload.id);
            if (indexInCart === -1) {
                state.push(action.payload)
            } else {
                state.splice(indexInCart, 1);
            }
        },
        clearCart: (state) => {
            return [];
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsApi.endpoints.getProducts.matchFulfilled,
            (state, action) => {
                
            }
        )
    }
});

export const { toggleProductInCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;