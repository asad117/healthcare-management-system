// src/features/auth/authSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { loginSuccess } from './authSlice';
import api from '../../services/api'; // Assuming you have an API service

function* loginSaga(action) {
  try {
    const user = yield call(api.login, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    console.error('Login failed', error);
  }
}

export default function* authSaga() {
  yield takeLatest('auth/loginRequest', loginSaga);
}
