import {
  OPEN_MODAL_SIGNIN,
  OPEN_MODAL_SIGNUP,
  CLOSE_MODAL_SIGNIN,
  OPEN_MODAL_VIDEO,
  OPEN_MODAL_SOUNDS,
  CHANGE_ROLE,
  OPEN_MODAL_INSTRUMENT,
  CHANGE_INSTRUMENT,
} from 'src/actions/modalSignIn';

const initialState = {
  role: '',
  openSignIn: false,
  openSignUp: false,
  openVideos: false,
  openSounds: false,
  openInstruments: false,
  instrumentValue: '',
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
    case OPEN_MODAL_INSTRUMENT:
      return {
        ...state,
        openInstruments: true,
      };
    case OPEN_MODAL_SOUNDS:
      return {
        ...state,
        openSounds: true,
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
        openVideos: false,
        openInstruments: false,
        openSounds: false,
      };
    case CHANGE_ROLE:
      return {
        ...state,
        role: action.role,
      };
    case CHANGE_INSTRUMENT:
      return {
        ...state,
        instrumentValue: action.instrument,
      };
    default:
      return state;
  }
};

export default reducer;
