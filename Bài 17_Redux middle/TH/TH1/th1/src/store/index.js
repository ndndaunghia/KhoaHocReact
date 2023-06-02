import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import todoReducer from './todo/slice'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();   
const middleware = [...getDefaultMiddleware({thunk: true}), sagaMiddleware];
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: middleware,
})

sagaMiddleware.run(rootSaga);