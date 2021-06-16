import { GET_MUSICIANS, GET_MUSICIANS_SUCCESS } from 'src/actions/musicians';

const initialState = {
  list: [],
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
        list: action.musicians,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
