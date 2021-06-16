import {
  CHANGE_BOX_VALUE,
  
} from 'src/actions';

const initialState = {
    band:false,   
    musician:false,
    place:false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOX_VALUE: {
      console.log('je passe dans le case CHANGE_BOX_VALUE');
    }
    return {
      ...state,
      [action.key]:action.value,
    };

    default:
      return state;
  }
};

export default reducer;
