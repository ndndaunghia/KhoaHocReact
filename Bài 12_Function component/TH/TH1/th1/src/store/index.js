import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './couter'

export const store = configureStore({
  reducer: {
    couter: couterReducer,
  },
})