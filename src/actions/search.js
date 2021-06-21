export const CHANGE_BOX_VALUE = 'CHANGE_BOX_VALUE';
export const CHANGE_CITY_VALUE = 'CHANGE_CITY_VALUE';
export const CHANGE_INSTRUMENT_VALUE = 'CHANGE_INSTRUMENT_VALUE';
export const CHANGE_STYLE_VALUE = 'CHANGE_STYLE_VALUE';
export const CHANGE_CATEGORY_VALUE = 'CHANGE_CATEGORY_VALUE';
export const CLICK_SEARCH = 'CLICK_SEARCH';

// export const GET_MUSICIANS_SUCCESS = 'GET_MUSICIANS_SUCCESS';
// export const GET_MUSICIANS = 'GET_MUSICIANS';
// export const GET_BANDS = 'GET_BANDS';
// export const GET_BANDS_SUCCESS = 'GET_BANDS_SUCCESS';
// export const GET_PLACES = 'GET_PLACES';
// export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';


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

export const clickSearch = (value) => ({
  type: CLICK_SEARCH,
  value,
})

// export const getMusicians = () => ({
//   type: GET_MUSICIANS,
// });

// export const getMusiciansSuccess = (musicians) => ({
//   type: GET_MUSICIANS_SUCCESS,
//   musicians: musicians,
// });

// export const getBands = () => ({
//   type: GET_BANDS,
// });

// export const getBandsSuccess = (bands) => ({
//   type: GET_BANDS_SUCCESS,
//   bands: bands,
// });

// export const getPlaces = () => ({
//   type: GET_PLACES,
// });

// export const getPlacesSuccess = (places) => ({
//   type: GET_PLACES_SUCCESS,
//   places: places,
// });
