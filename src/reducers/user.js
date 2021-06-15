import { CHANGE_EMAIL_INPUT, CHANGE_PASSWORD_INPUT } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  isLogged: false,
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
    default:
      return state;
  }
};

export default reducer;
