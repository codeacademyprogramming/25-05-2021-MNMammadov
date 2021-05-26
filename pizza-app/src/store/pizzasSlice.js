import { apiClient } from '../api/client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async () => {
    const response = await apiClient.getPizzas();
    return response.pizzas;
})

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: initialState,
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.data = state.data.concat(action.payload)
        },
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
    },
});

export { pizzasSlice, fetchPizzas };