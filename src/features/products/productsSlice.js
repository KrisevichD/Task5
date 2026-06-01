import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: ["meat", 'milk'],
    reducers: {

    }
})

export const { } = productsSlice.actions;
export default productsSlice.reducer;