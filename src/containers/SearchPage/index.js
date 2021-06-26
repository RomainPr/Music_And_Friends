import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';

import {
  changeCategoryValue,
  clickSearch,
  onChangeBoxBandValue,
  onChangeBoxMusicianValue,
  onChangeBoxPlaceValue,
} from 'src/actions/search';

import {
  getMusicians,
  getBands,
  getPlaces,
  getInstruments,
}
  from 'src/actions/musicians';

// import { findSearchResult } from 'src/selectors/search';

const mapStateToProps = (state) => {
  console.log(state.search.searchResult);

  return {
    categories: state.search.categories,
    categoryName: state.search.categoryName,

    isBandChecked: state.search.isBandChecked,
    isMusicianChecked: state.search.isMusicianChecked,
    isPlaceChecked: state.search.isPlaceChecked,

    cityName: state.search.cityName,
    instrumentName: state.search.instrumentName,
    styleName: state.search.styleName,

    musicians: state.musicians.musicians,
    bands: state.musicians.bands,
    places: state.musicians.places,
    instruments: state.musicians.instruments,

    loading: state.musicians.loading,
    searchResult: state.search.searchResult,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeCategoryValue: (event) => {
      dispatch(changeCategoryValue(event.target.name));
    },

    onClickSearch: (event) => {
    // event.preventDefault()
      dispatch(clickSearch(event.target.value));
    },

    loadMusicians: () => {
      dispatch(getMusicians());
      dispatch(getBands());
      dispatch(getPlaces());
      dispatch(getInstruments());
    },
    onChangeBoxBandValue: () => {
      function getAllBands() {
        return (dispatch, getState) => {
          const { bands } = getState().musicians;
          dispatch(onChangeBoxBandValue(bands));
          console.log(bands);
        };
      }
      dispatch(getAllBands());
    },
    onChangeBoxMusicianValue: () => {
      function getAllMusicians() {
        return (dispatch, getState) => {
          const { musicians } = getState().musicians;
          dispatch(onChangeBoxMusicianValue(musicians));
          console.log(musicians);
        };
      }
      dispatch(getAllMusicians());
    },
    onChangeBoxPlaceValue: () => {
      function getAllPlaces() {
        return (dispatch, getState) => {
          const { places } = getState().musicians;
          dispatch(onChangeBoxPlaceValue(places));
          console.log(places);
        };
      }
      dispatch(getAllPlaces());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
