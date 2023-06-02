import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoService from "./api";

export const fetchTodoListAction = createAsyncThunk(
    'todo/fetchTodoList', 
    async (payload, thunkAPI) => {
        // console.log(111, payload, thunkAPI.getState());
        const res = await TodoService.getTodoList(payload);
        console.log(res);
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodoListAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTodoListAction.fulfilled, (state, actions) => {
            state.todos = actions.payload;
            state.loading = false;
        });
        builder.addCase(fetchTodoListAction.rejected, (state) => {
            state.loading = false;
        });
    }
});

const todoReducer = todoSlice.reducer;
export default todoReducer;