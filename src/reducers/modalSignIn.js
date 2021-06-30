import {
  OPEN_MODAL_SIGNIN, OPEN_MODAL_SIGNUP, CLOSE_MODAL_SIGNIN, OPEN_MODAL_VIDEO, CHANGE_ROLE,
} from 'src/actions/modalSignIn';

const initialState = {
  role: '',
  openSignIn: false,
  openSignUp: false,
  openVideos: false,
  openInstruments: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_SIGNIN:
      return {
        ...state,
        openSignIn: true,
      };
    case OPEN_MODAL_VIDEO:
      return {
        ...state,
        openVideos: true,
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
    case CHANGE_ROLE:
      return {
        ...state,
        role: action.role,
      };
    default:
      return state;
  }
};

export default reducer;
