import {
  GET_MUSICIANS,
  GET_MUSICIANS_SUCCESS,
  GET_BANDS,
  GET_BANDS_SUCCESS,
  GET_PLACES,
  GET_PLACES_SUCCESS,
  GET_INSTRUMENTS,
  GET_INSTRUMENTS_SUCCESS,
} from 'src/actions/musicians';

const initialState = {
  musicians: [],
  bands: [],
  places: [],
  instruments: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MUSICIANS:
      return {
        ...state,
        loading: true,
      };
    case GET_MUSICIANS_SUCCESS:
      return {
        ...state,
        musicians: action.musicians,
        loading: false,
      };
    case GET_BANDS:
      return {
        ...state,
        loading: true,
      };
    case GET_BANDS_SUCCESS:
      return {
        ...state,
        bands: action.bands,
        loading: false,
      };
    case GET_PLACES:
      return {
        ...state,
        loading: true,
      };
    case GET_PLACES_SUCCESS:
      return {
        ...state,
        places: action.places,
        loading: false,
      };
    case GET_INSTRUMENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_INSTRUMENTS_SUCCESS:
      return {
        ...state,
        instruments: action.instruments,
      };
    default:
      return state;
  }
};

export default reducer;
