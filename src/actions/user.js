export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const changeEmailInput = (newValue) => ({
  type: CHANGE_EMAIL_INPUT,
  newValue,
});

export const changePasswordInput = (newValue) => ({
  type: CHANGE_PASSWORD_INPUT,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const loginSuccess = (apiData) => ({
  type: LOGIN_SUCCESS,
  token: apiData.data.token,
  refreshToken: apiData.data.refreshToken,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});
