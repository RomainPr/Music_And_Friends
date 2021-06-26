import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';

import {
  changeCategoryValue,
  clickSearch,
  onChangeBoxBandValue,
  onChangeBoxMusicianValue,
  onChangeBoxPlaceValue,
  CHANGE_BOX_MUSICIAN_VALUE,
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

function getAllMusicians() {
  return (dispatch, getState) => {
    const state = getState();
    const musicians = state.musicians.musicians

    dispatch({
      type: CHANGE_BOX_MUSICIAN_VALUE,
      payload: {
        musicians,
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => ({

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
    dispatch(onChangeBoxBandValue());
  },
  onChangeBoxMusicianValue: () => {
    getAllMusicians();
  },
  onChangeBoxPlaceValue: () => {
    dispatch(onChangeBoxPlaceValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
