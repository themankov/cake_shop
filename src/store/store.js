// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemsSlice';

const store = configureStore({
    reducer: {
        items: itemsReducer, // здесь подключаем редьюсеры
    },
});

export default store;
