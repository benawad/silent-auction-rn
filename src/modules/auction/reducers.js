import { handleActions } from 'redux-actions';
import {
  RECEIVE_AUCTIONS,
  AUCTION_CREATED,
} from './actions';


export const auctions = handleActions({
  RECEIVE_AUCTIONS: (state, { payload }) => payload,

  AUCTION_CREATED: (state, { payload }) => [payload, ...state],
}, []);
