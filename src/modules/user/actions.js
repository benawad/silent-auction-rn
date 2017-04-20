import { createAction } from 'redux-actions';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';

export const receiveLogin = createAction(RECEIVE_LOGIN);
export const requestLogin = createAction(REQUEST_LOGIN);
export const requestSignup = createAction(REQUEST_SIGNUP);
export const receiveAuth = createAction(RECEIVE_AUTH);
export const requestAuth = createAction(REQUEST_AUTH);
