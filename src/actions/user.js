export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';

export const changeEmailInput = (newValue) => ({
  type: CHANGE_EMAIL_INPUT,
  newValue,
});

export const changePasswordInput = (newValue) => ({
  type: CHANGE_PASSWORD_INPUT,
  newValue,
});
