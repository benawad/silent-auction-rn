import { takeLatest, call, put } from 'redux-saga/effects';

import {
  REQUEST_AUCTIONS,
  receiveAuctions,
} from './actions';

import {
  findAuctions,
} from './api';

function* callFindAuctions(action) {
  const { error, response } = yield call(findAuctions, action.payload);
  console.log(response);
  yield put(receiveAuctions(response.data));
}

export function* findAuctionsSaga() {
  yield takeLatest(REQUEST_AUCTIONS, callFindAuctions);
}
