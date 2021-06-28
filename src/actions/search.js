export const CHANGE_BOX_BAND_VALUE = 'CHANGE_BOX_BAND_VALUE';
export const CHANGE_BOX_MUSICIAN_VALUE = 'CHANGE_BOX_MUSICIAN_VALUE';
export const CHANGE_BOX_PLACE_VALUE = 'CHANGE_BOX_PLACE_VALUE';
export const CHANGE_CITY_VALUE = 'CHANGE_CITY_VALUE';
export const CHANGE_INSTRUMENT_VALUE = 'CHANGE_INSTRUMENT_VALUE';
export const CHANGE_STYLE_VALUE = 'CHANGE_STYLE_VALUE';
export const CHANGE_CATEGORY_VALUE = 'CHANGE_CATEGORY_VALUE';
export const CLICK_SEARCH = 'CLICK_SEARCH';

export const onChangeBoxBandValue = (bands) => ({
  type: CHANGE_BOX_BAND_VALUE,
  bands,
});
export const onChangeBoxMusicianValue = (musicians) => ({
  type: CHANGE_BOX_MUSICIAN_VALUE,
  musicians,
});
export const onChangeBoxPlaceValue = (places) => ({
  type: CHANGE_BOX_PLACE_VALUE,
  places,
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

export const clickSearch = (value) => ({
  type: CLICK_SEARCH,
  value,
});
