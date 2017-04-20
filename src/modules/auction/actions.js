import { createAction } from 'redux-actions';

export const REQUEST_AUCTIONS = 'REQUEST_AUCTIONS';
export const RECEIVE_AUCTIONS = 'RECEIVE_AUCTIONS';
export const AUCTION_CREATED = 'AUCTION_CREATED';

export const receiveAuctions = createAction(RECEIVE_AUCTIONS);
export const requestAuctions = createAction(REQUEST_AUCTIONS);
export const auctionCreated = createAction(AUCTION_CREATED);
