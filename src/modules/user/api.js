import {
  AsyncStorage,
} from 'react-native';

import {
  users,
  restApp,
} from '../index';

export async function signup(payload) {
  try {
    const response = await users.create(payload);
    return {
      error: false,
      response: {},
    };
  } catch ({ errors }) {
    const errorField = errors[0].path;
    return {
      error: true,
      response: {
        [errorField]: 'error',
      },
    };
  }
}

async function saveAccessToken(accessToken) {
  try {
    await AsyncStorage.setItem('accessToken', accessToken);
  } catch (error) {
    console.log(error);
  }
}

export async function login(payload) {
  try {
    const response = await restApp.authenticate({
      strategy: 'local',
      ...payload,
    });
    // await saveAccessToken(response.accessToken);
    return {
      error: false,
      response,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      response: {
        password: 'incorrect login',
      },
    };
  }
}

export async function authenticate() {
  try {
    const response = await restApp.authenticate();
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
