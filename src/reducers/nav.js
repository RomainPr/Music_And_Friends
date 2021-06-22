import {
  SET_ANCHOR_EL, HANDLE_MENU_CLOSE, OPEN_TOGGLER,
} from 'src/actions/nav';

const initialState = {
  isLogged: false,
  anchorEl: null,
  open: false,
  isMenuOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANCHOR_EL:
      return {
        ...state,
        anchorEl: action.newValue,
        isMenuOpen: true,
      };
    case HANDLE_MENU_CLOSE:
      return {
        ...state,
        anchorEl: null,
        isMenuOpen: false,
      };
    case OPEN_TOGGLER:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;