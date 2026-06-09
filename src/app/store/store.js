import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@/api/productsApi.js";
import cartReducer from "./cart/cartSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loadDataFromStorage } from "@/utils/localStorageHandler.js";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadDataFromStorage('cart')
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

store.subscribe(() => {
    try {
        const state = store.getState();
        const cartState = JSON.stringify(state.cart);
        localStorage.setItem('cart', cartState);
    } catch (error) {
        console.error('Unable to save cart', error)
    }
})

setupListeners(store.dispatch);
export default store;

