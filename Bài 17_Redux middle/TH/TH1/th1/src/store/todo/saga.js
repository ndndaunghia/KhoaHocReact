import { takeEvery, takeLatest } from "redux-saga/effects";
import { fetchTodoListSagaAction } from "./action";
import TodoService from "./api";

function* fetchTodoList(params){
    const res = yield call(TodoService.getTodoList);
}

export default function* todoSaga() {
    yield all([
        takeLatest(fetchTodoListSagaAction, fetchTodoList)
    ])
}