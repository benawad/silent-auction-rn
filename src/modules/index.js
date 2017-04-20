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
import { AsyncStorage } from 'react-native';

import * as userSagas from './user/sagas';
import { user } from './user/reducers';

export const rootReducer = combineReducers({
  form: formReducer,
  user,
});

export function* rootSaga() {
  yield Object.values(userSagas).map(fork);
}

const host = 'http://localhost:3030';
const socket = io(host);

const socketioApp = feathers()
  .configure(socketio(socket))
  .configure(hooks())

export const restApp = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())
  .configure(authentication({
    storage: AsyncStorage,
  }));

export const users = restApp.service('users');
