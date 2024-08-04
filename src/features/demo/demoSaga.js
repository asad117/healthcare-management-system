import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDemoDataRequest, fetchDemoDataSuccess, fetchDemoDataFailure } from './demoSlice';
import { fetchDemoData } from '@services/api';

function* handleFetchDemoData() {
  try {
    const data = yield call(fetchDemoData);
    yield put(fetchDemoDataSuccess(data));
  } catch (error) {
    yield put(fetchDemoDataFailure(error.message));
  }
}

export default function* demoSaga() {
  yield takeLatest(fetchDemoDataRequest.type, handleFetchDemoData);
}
