import { productsApi } from "@/app/api/productsApi";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        toggleProductInCart: (state, action) => {
            const indexInCart = state.findIndex(item => item.id === action.payload.id);
            if (indexInCart === -1) {
                return [...state, action.payload];
            } else {
                return state.filter((item) => item.id !== action.payload.id);
            }
        },
        clearCart: () => {
            return [];
        }
    },
});

export const { toggleProductInCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;