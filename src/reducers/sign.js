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
    'Houst',
    'Carry-le-Rouet',
    'Monteuton',
    'Detroit',
    'New York City',
    'Vienne',
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
    'Rock',
    'Pop',
    'Classique',
    'Opera',
    'Anarcho-post-punk',
    'Cumbia',
    'Acid Techno Trans',
    'Deathcountry',
    'Fanfare',
    'Funk',
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    case CHANGE_CITY_VALUE:
      return {
        ...state,
        cityName: action.value,
      };

    case CHANGE_INSTRUMENT_VALUE:
      return {
        ...state,
        instrumentName: action.value,
      };

    case CHANGE_STYLE_VALUE:
      return {
        ...state,
        styleName: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
