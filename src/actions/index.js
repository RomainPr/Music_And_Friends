export const CHANGE_BOX_VALUE = 'CHANGE_BOX_VALUE';

export const CHANGE_CITY_VALUE = 'CHANGE_CITY_VALUE';

export const changeBoxValue = (value, key) => ({
  type: CHANGE_BOX_VALUE,
  value,
  key,
});

export const changeCityValue = (value, key) => ({
  type: CHANGE_CITY_VALUE,
  value,
  key,
});
