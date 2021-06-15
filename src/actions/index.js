export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});
