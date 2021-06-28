import {
  CHANGE_INPUT_VALUE,
  CHANGE_INSTRUMENT_VALUE,
  CHANGE_STYLE_VALUE,
  CHANGE_USER_VALUE,
} from 'src/actions/changeInput';

const initialState = {
  title: '',
  content: '',
  userSelected: '',
  instrumentName: [],
  styleName: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      console.log('je passe dans le case CHANGE_INPUT_VALUE');
      return {
        ...state,
        [action.key]: action.value,
      };
    case CHANGE_USER_VALUE:
      console.log('je passe dans le case CHANGE_INPUT_VALUE');
      return {
        ...state,
        userSelected: action.value,
      };
    case CHANGE_INSTRUMENT_VALUE:
      console.log('je passe dans le case CHANGE_INSTRUMENT_VALUE');
      return {
        ...state,
        instrumentName: action.value,
      };

    case CHANGE_STYLE_VALUE:
      console.log('je passe dans le case CHANGE_STYLE_VALUE');
      return {
        ...state,
        styleName: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
