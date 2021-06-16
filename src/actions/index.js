export const CHANGE_BOX_VALUE = 'CHANGE_BOX_VALUE';

export const changeBoxValue = (value, key) => ({
  type: CHANGE_BOX_VALUE,
  value,
  key,
});
