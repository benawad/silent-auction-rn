import { takeLatest, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';
import { Actions } from 'react-native-router-flux';

import {
  REQUEST_SIGNUP,
  REQUEST_LOGIN,
  receiveLogin,
  REQUEST_AUTH,
  receiveAuth,
} from './actions';

import {
  signup,
  login,
  authenticate,
} from './api';

function* callSignup(action) {
  yield put(startSubmit('signup'));
  const { error, response } = yield call(signup, action.payload);
  console.log(response);
  yield put(stopSubmit('signup', response));
  if (!error) {
    Actions.login({});
  }
}

export function* signupSaga() {
  yield takeLatest(REQUEST_SIGNUP, callSignup);
}

function* callLogin(action) {
  yield put(startSubmit('login'));
  const { error, response } = yield call(login, action.payload);
  console.log(response);
  if (!error) {
    yield put(receiveLogin(response.user));
    yield put(stopSubmit('login', {}));
    Actions.viewAuctions({});
  } else {
    yield put(stopSubmit('login', response));
  }
}

export function* loginSaga() {
  yield takeLatest(REQUEST_LOGIN, callLogin);
}

function* callAuth(action) {
  const { error, response } = yield call(authenticate);
  console.log(response);
  if (error) {
    Actions.login({});
  } else {
    yield put(receiveAuth(response.user));
  }
}

export function* authSaga() {
  yield takeLatest(REQUEST_AUTH, callAuth);
}
