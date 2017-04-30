import { handleAction, combineActions } from 'redux-actions';
import {
  receiveLogin,
  receiveAuth,
} from './actions';

export const user = handleAction(combineActions(receiveLogin, receiveAuth), {
  next(state, action) {
    return action.payload;
  },
}, {});
