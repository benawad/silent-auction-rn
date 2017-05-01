import { handleAction } from 'redux-actions';
import {
  changeActiveSegment,
} from './actions';

export const segment = handleAction(changeActiveSegment, {
  next(state, { payload }) {
    return payload;
  },
}, 'open');
