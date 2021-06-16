import {
  CHANGE_BOX_VALUE,
  CHANGE_CITY_VALUE
} from 'src/actions';

const initialState = {
  band: false,
  musician: false,
  place: false,
  cityName: [],

  cities: [
   
    'Paris' ,
    'Bordeaux' ,
    'Toulouse' ,
    'Dijon' ,
    'Lyon' ,
    'Marseille' ,
    'Grenoble' ,
    'Strasbourg' ,
    'Brest' ,
   
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOX_VALUE: {
      console.log('je passe dans le case CHANGE_BOX_VALUE');
    }
      return {
        ...state,
        [action.key]: action.value,
      };
    case CHANGE_CITY_VALUE: {
      console.log('je passe dans le case CHANGE_CITY_VALUE');
    }
      return {
        ...state,
        cityName: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
