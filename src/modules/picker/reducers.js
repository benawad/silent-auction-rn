import { handleAction } from 'redux-actions';
import {
  changePick,
} from './actions';

export const picker = handleAction(changePick, {
  next(state, { payload }) {
    return payload;
  },
}, 'lTimeLeft');
