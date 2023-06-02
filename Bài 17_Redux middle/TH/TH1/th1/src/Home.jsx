import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoListAction } from './store/todo/slice';
import { fetchTodoListSagaAction } from './store/todo/action';

export default function Home() {
const dispatch = useDispatch();
const {loading} = useSelector(state => state.todo);
useEffect(() => {
    // dispatch(fetchTodoListAction({
    //     _page: 1,
    //     _limit: 10,
    // }));
    dispatch(fetchTodoListSagaAction());
}, [dispatch]);
  return (
    <div>
    {loading ? '....Loading' : 'suscessfully'};
    </div>
  )
}
