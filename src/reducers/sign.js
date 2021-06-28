import {
  CHANGE_INPUT_VALUE,
  CHANGE_CITY_VALUE,
  CHANGE_INSTRUMENT_VALUE,
  CHANGE_STYLE_VALUE,
} from 'src/actions/changeInput';

const initialState = {
  firstname: '',
  lastname: '',
  phone: '',
  city: '',
  pseudo: '',
  description: '',
  email: '',
  password: '',
  confirmpassword: '',

  placeName: '',
  adress: '',
  postalCode: '',

  cityName: [],
  instrumentName: [],
  styleName: [],

  cities: [
    'Paris',
    'Bordeaux',
    'Toulouse',
    'Dijon',
    'Lyon',
    'Marseille',
    'Grenoble',
    'Strasbourg',
    'Brest',
    'Vienne',
    'Detroit',
  ],

  instruments: [
    'Guitare',
    'Batterie',
    'Piano',
    'Violon',
    'Bass guitare',
    'Yukulélé',
    'Accordéon',
    'Trompette',
    'Tambour',
    'Triangle',
  ],

  styles: [
    'Jazz',
    'Rock',
    'Punk',
    'Blues',
    'Soul',
    'Metal',
    'Rap',
    'Folk',
    'Reggae',
    'Hip-hop',
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      console.log('je passe dans le case CHANGE_INPUT_VALUE');
      return {
        ...state,
        [action.key]: action.value,
      };

    case CHANGE_CITY_VALUE:
      console.log('je passe dans le case CHANGE_CITY_VALUE');
      return {
        ...state,
        cityName: action.value,
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
