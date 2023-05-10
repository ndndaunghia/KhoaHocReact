import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'couter',
    initialState: {
        count: 0
    },
    reducers: {
        increase: (state, action) => {
            console.log('state', state);
            console.log('action', action);
            state.count += action.payload;
        },
        decrease: (state, action) => {
            state.count--;
        }
    },
});

const couterReducer = counterSlice.reducer;
export const {increase, decrease} = counterSlice.actions
export default couterReducer;