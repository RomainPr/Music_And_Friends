import { CHANGE_EMAIL_INPUT, CHANGE_PASSWORD_INPUT, LOGIN_SUCCESS } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  role: '',
  isLogged: false,
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL_INPUT:
      return {
        ...state,
        email: action.newValue,
      };
    case CHANGE_PASSWORD_INPUT:
      return {
        ...state,
        password: action.newValue,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLogged: true,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
