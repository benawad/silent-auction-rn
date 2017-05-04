import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import io from 'socket.io-client';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import superagent from 'superagent';
import { reducer as formReducer } from 'redux-form';
import { Platform, AsyncStorage } from 'react-native';

import * as userSagas from './user/sagas';
import * as auctionSagas from './auction/sagas';
import { user } from './user/reducers';
import { auctions } from './auction/reducers';
import { segment } from './segment/reducers';
import { picker } from './picker/reducers';

export const rootReducer = combineReducers({
  form: formReducer,
  user,
  auctions,
  segment,
  picker,
});

export function* rootSaga() {
  yield [
    ...Object.values(userSagas),
    ...Object.values(auctionSagas),
  ].map(fork);
}

const base = Platform.OS === 'ios' ? 'localhost' : '10.0.3.2';
const host = `http://${base}:3030`;
export const socket = io(host);

export const socketApp = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({
    storage: AsyncStorage,
  }));

export const restApp = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())
  .configure(authentication({
    storage: AsyncStorage,
  }));

export const users = restApp.service('users');
export const auctionsService = restApp.service('auctions');
