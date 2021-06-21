export const GET_MUSICIANS_SUCCESS = 'GET_MUSICIANS_SUCCESS';
export const GET_MUSICIANS = 'GET_MUSICIANS';
export const GET_BANDS = 'GET_BANDS';
export const GET_BANDS_SUCCESS = 'GET_BANDS_SUCCESS';
export const GET_PLACES = 'GET_PLACES';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';

export const getMusicians = () => ({
  type: GET_MUSICIANS,
});

export const getMusiciansSuccess = (musicians) => ({
  type: GET_MUSICIANS_SUCCESS,
  musicians: musicians,
});

export const getBands = () => ({
  type: GET_BANDS,
});

export const getBandsSuccess = (bands) => ({
  type: GET_BANDS_SUCCESS,
  bands: bands,
});

export const getPlaces = () => ({
  type: GET_PLACES,
});

export const getPlacesSuccess = (places) => ({
  type: GET_PLACES_SUCCESS,
  places: places,
});
