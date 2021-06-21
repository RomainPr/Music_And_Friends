import { OPEN_MODAL_SIGNIN, CLOSE_MODAL_SIGNIN } from 'src/actions/modalSignIn';

const initialState = {
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_SIGNIN:
      return {
        ...state,
        open: true,
      };
    case CLOSE_MODAL_SIGNIN:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
