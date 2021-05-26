import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addToBasket(state, action) {
            const pizza = action.payload;
            const previouslyAddedPizza = state.find(element => element.id === pizza.id);

            if (previouslyAddedPizza) {
                previouslyAddedPizza.count++;
            } else {
                state.push({ ...pizza, count: 1 });
            }
        },
        deleteFromBasket(state, action) {
            const pizza = action.payload;
            state = state.filter(element => element.id !== pizza.id)
        }
    }
});

export { basketSlice };