export const CHANGE_BOX_VALUE = 'CHANGE_BOX_VALUE';
export const CHANGE_CITY_VALUE = 'CHANGE_CITY_VALUE';
export const CHANGE_INSTRUMENT_VALUE = 'CHANGE_INSTRUMENT_VALUE';
export const CHANGE_STYLE_VALUE = 'CHANGE_STYLE_VALUE';
export const CHANGE_CATEGORY_VALUE = 'CHANGE_CATEGORY_VALUE';

export const changeBoxValue = (value, key) => ({
  type: CHANGE_BOX_VALUE,
  value,
  key,
});

export const changeCityValue = (value) => ({
  type: CHANGE_CITY_VALUE,
  value,
});

export const changeInstrumentValue = (value) => ({
  type: CHANGE_INSTRUMENT_VALUE,
  value,
});

export const changeStyleValue = (value) => ({
  type: CHANGE_STYLE_VALUE,
  value,
});

export const changeCategoryValue = (value) => ({
  type: CHANGE_CATEGORY_VALUE,
  value,
});
