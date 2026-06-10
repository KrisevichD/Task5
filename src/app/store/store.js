import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import cartReducer from './cart/cartSlice.js';

import { productsApi } from '@/app/api/productsApi.js';
import { loadDataFromStorage, loadDataToStorage } from '@/utils/localStorageHandler.js';

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadDataFromStorage('cart'),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

store.subscribe(() => {
    const state = store.getState();
    const cartState = JSON.stringify(state.cart);
    loadDataToStorage('cart', cartState);
});

setupListeners(store.dispatch);
export default store;
