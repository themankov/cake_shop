// src/slices/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        data: [],
        offset:0,
        loading: false,
        error: null,
    },
    reducers: {
        setItems(state, action) {
            state.data = action.payload;
        },
        addItem(state, action) {
            state.data.push(action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setItems, addItem, setLoading, setError } = itemsSlice.actions;
export default itemsSlice.reducer