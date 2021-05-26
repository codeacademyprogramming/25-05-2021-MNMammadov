import { configureStore } from '@reduxjs/toolkit';

import { pizzasSlice } from './pizzasSlice';
import { basketSlice } from './basketSlice';


const store = configureStore({
    reducer: {
        pizzas: pizzasSlice.reducer,
        basket: basketSlice.reducer,
    },
});

export default store;
