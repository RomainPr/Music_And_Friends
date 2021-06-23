import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';

import { 
  changeCategoryValue, 
  clickSearch,

} from 'src/actions/search';

import { 
  getMusicians, 
  getBands, 
  getPlaces } 
from 'src/actions/musicians';

// import { findSearchResult } from 'src/selectors/search';

const mapStateToProps = (state) => {

  // console.log(state.search.searchResult);
  
  return {
    categories: state.search.categories,
    categoryName: state.search.categoryName,

    isBandChecked: state.search.isBandChecked,
    isMusicianChecked: state.search.isMusicianChecked,
    isPlaceChecked: state.search.isPlaceChecked,

    cityName:state.search.cityName,
    instrumentName:state.search.instrumentName,
    styleName:state.search.styleName,

    musicians: state.musicians.musicians,
    bands: state.musicians.bands,
    places: state.musicians.places,

    loading: state.musicians.loading,
    searchResult:state.search.searchResult
  };
};

const mapDispatchToProps = (dispatch) => ({

  onChangeCategoryValue: (event) => {
    dispatch(changeCategoryValue(event.target.name));
  },

  onClickSearch: (event) => {
    event.preventDefault()
    dispatch(clickSearch(event.target.value));
  },

  loadMusicians: () => {
    dispatch(getMusicians());
    dispatch(getBands());
    dispatch(getPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
