import { takeLatest, call, put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { reset } from 'redux-form';

import {
  REQUEST_REMOVE_AUCTION,
  REQUEST_CREATE_AUCTION,
  REQUEST_AUCTIONS,
  REQUEST_BID,
  REQUEST_UPDATE_AUCTION,
  receiveAuctions,
} from './actions';

import { updateAuction, removeAuction, findAuctions, createAuction, bid } from './api';

function* callFindAuctions(action) {
  const { error, response } = yield call(findAuctions, action.payload);
  console.log(response);
  yield put(receiveAuctions(response.data));
}

export function* findAuctionsSaga() {
  yield takeLatest(REQUEST_AUCTIONS, callFindAuctions);
}

function* callRemoveAuction(action) {
  const { error, response } = yield call(removeAuction, action.payload);
  console.log(response);
}

export function* removeAuctionSaga() {
  yield takeLatest(REQUEST_REMOVE_AUCTION, callRemoveAuction);
}

function* callUpdateAuction(action) {
  const { error, response } = yield call(updateAuction, action.payload);
  console.log('update response');
  console.log(response);
  if (!error) {
    Actions.viewAuctions({});
    yield put(reset('createAuction'));
  }
}

export function* updateAuctionSaga() {
  yield takeLatest(REQUEST_UPDATE_AUCTION, callUpdateAuction);
}

function* callCreateAuction(action) {
  const { error, response } = yield call(createAuction, action.payload);
  console.log(response);
  if (!error) {
    Actions.viewAuctions({});
    yield put(reset('createAuction'));
  }
}

export function* createAuctionSaga() {
  yield takeLatest(REQUEST_CREATE_AUCTION, callCreateAuction);
}

function* callBid(action) {
  const { error, response } = yield call(bid, action.payload);
  console.log(response);
}

export function* bidSaga() {
  yield takeLatest(REQUEST_BID, callBid);
}
