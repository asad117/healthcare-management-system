// src/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import demoSaga from '../features/demo/demoSaga';

export function* rootSaga() {
  yield all([
    demoSaga(),
    // Add other sagas here
  ]);
}

export default rootSaga;
