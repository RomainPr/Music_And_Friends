import {
  CHANGE_VALUE,
} from 'src/actions';

const initialState = {
  firstname: 'pouet',
  lastname: '',
  phone: '',
  city: '',
  pseudo: '',
  description: '',
  email: '',
  password: '',
  confirmpassword: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      console.log(`action = `, action);
      return {
        ...state,
        // [action.key]: action.value,
        firstname: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
