export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const SUBMIT_SIGNUP_PLACE = 'SUBMIT_SIGNUP_PLACE';
export const SUBMIT_SIGNUP_MUSICIAN = 'SUBMIT_SIGNUP_MUSICIAN';
export const SUBMIT_NEW_AD = 'SUBMIT_NEW_AD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_PLACE = 'SUBMI_LOGIN_PLACE';
export const LOGIN_SUCCESS_PLACE = 'LOGIN_SUCCESS_PLACE';
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

export const submitSignUpPlace = (value) => ({
  type: SUBMIT_SIGNUP_PLACE,
  value,
});

export const submitSignUpMusician = (value) => ({
  type: SUBMIT_SIGNUP_MUSICIAN,
  value,
});

export const submitNewAd = (value) => ({
  type: SUBMIT_NEW_AD,
  value,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const submitLoginPlace = () => ({
  type: SUBMIT_LOGIN_PLACE,
});

export const loginSuccessPlace = () => ({
  type: LOGIN_SUCCESS_PLACE,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});
