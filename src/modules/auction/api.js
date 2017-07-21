import { users, auctionsService } from '../index';

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

export async function createAuction(params) {
  try {
    const response = await auctionsService.create(params);
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

export async function removeAuction(id) {
  try {
    const response = await auctionsService.remove(id);
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

/*
{
  name: bob,
  price: 13
}
patch : {
  price: 14
}
{
  name: bob,
  price: 14
}
update : {
  name: bob3
  price: 14
}
{
  name: bob3
  price: 14
}
*/

export async function updateAuction({ auction, id }) {
  try {
    const response = await auctionsService.patch(id, { update: true, ...auction });
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

export async function bid(id) {
  try {
    const response = await auctionsService.patch(id, { current_price: 5 });
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
