import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const id = state.length + 1;
      state.push({ id: id, name: action.payload, articles: [] });
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      const index = state.findIndex((user) => user.id === userId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    addArticle: (state, action) => {
      const { userId, article } = action.payload;
      const user = state.find((user) => user.id === userId);
      if (user) {
        const id = user.articles.length + 1;
        user.articles.push({ id: id, article });
      }
    },
    removeArticle: (state, action) => {
        const { userId, articleId } = action.payload;
        const user = state.find((user) => user.id === userId);
        if (user) {
            user.articles = user.articles.filter((article) => article.id !== articleId);
        }
      },
      
  },
});

const counterReducer = counterSlice.reducer;
export const { addUser, addArticle, removeUser, removeArticle } = counterSlice.actions;
export default counterReducer;
