import { handleAction } from 'redux-actions';
import {
  receiveLogin, 
} from './actions';

export const user = handleAction(receiveLogin, {
  next(state, action) {
    return action.payload;
  },
}, {});
