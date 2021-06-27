import {
  CHANGE_BOX_BAND_VALUE,
  CHANGE_BOX_MUSICIAN_VALUE,
  CHANGE_BOX_PLACE_VALUE,
  CHANGE_CITY_VALUE,
  CHANGE_INSTRUMENT_VALUE,
  CHANGE_STYLE_VALUE,
  CHANGE_CATEGORY_VALUE,
  CLICK_SEARCH,
} from 'src/actions/search';

const initialState = {

  // checkbox section
  isBandChecked: true,
  isMusicianChecked: true,
  isPlaceChecked: true,

  // MultiSelect 1 section (multiSelect1 =result)
  cityName: [],
  instrumentName: [],
  styleName: [],
  musicians: [],
  bands: [],
  places: [],
  instruments: [],

  // "RECHERCHER" button
  searchResult: [],

  // MultiSelect 2 section (multiSelect2 = result + ad)
  categoryName: [],

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

  categories: [
    'Profils',
    'Annonces',
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOX_BAND_VALUE:
      return {
        ...state,
        isBandChecked: !state.isBandChecked,
        searchResult: action.bands,
      };
    case CHANGE_BOX_MUSICIAN_VALUE:
      console.log(`state !!!`, state);
      return {
        ...state,
        isMusicianChecked: !state.isMusicianChecked,
        searchResult: action.musicians,
      };
    case CHANGE_BOX_PLACE_VALUE:
      return {
        ...state,
        isPlaceChecked: !state.isPlaceChecked,
        searchResult: action.places,
      };
    // case CHANGE_BOX_VALUE:
    //   return {
    //     ...state,
    //     [action.key]: action.value,
    //   };
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
    case CHANGE_CATEGORY_VALUE:
      return {
        ...state,
        categoryName: action.value,
      };
    case CLICK_SEARCH:
      return {
        ...state,
        searchResult: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
