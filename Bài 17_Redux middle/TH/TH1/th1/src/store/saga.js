import {all} from 'redux-saga/effects';
// import productSaga from './product.saga';
import todoSaga from './todo/saga';

export default function* rootSaga() {
    yield all([productSaga(), todoSaga()]);
}