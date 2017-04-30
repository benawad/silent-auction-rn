import {
  users,
  auctionsService,
} from '../index';

export async function findAuctions(params) {
  try {
    const response = await auctionsService.find(params);
    return {
      error: false,
      response,
    };
  } catch (err) {
    return {
      error: true,
      response: err,
    };
  }
}
