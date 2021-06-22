import { OPEN_MODAL_SIGNIN, OPEN_MODAL_SIGNUP, CLOSE_MODAL_SIGNIN } from 'src/actions/modalSignIn';

const initialState = {
  openSignIn: false,
  openSignUp: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_SIGNIN:
      return {
        ...state,
        openSignIn: true,
      };
    case OPEN_MODAL_SIGNUP:
      return {
        ...state,
        openSignUp: true,
      };
    case CLOSE_MODAL_SIGNIN:
      return {
        ...state,
        openSignIn: false,
        openSignUp: false,
      };
    default:
      return state;
  }
};

export default reducer;