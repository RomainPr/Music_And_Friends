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

  // console.log(state);
  // console.log(`state = `, state);
  console.log('state.search.use', state.search.user)

  return {
    categories: state.search.categories,
    categoryName: state.search.categoryName,

    isBandChecked: state.search.isBandChecked,
    isMusicianChecked: state.search.isMusicianChecked,
    isPlaceChecked: state.search.isPlaceChecked,

    musicians: state.search.user,
    bands: state.search.band,
    places: state.search.place,

    loading: state.musicians.loading,
    
  };
};

const mapDispatchToProps = (dispatch) => ({

  onChangeCategoryValue: (event) => {
    dispatch(changeCategoryValue(event.target.value));
  },

  onClickSearch: (searchResult) => {
    dispatch(clickSearch(searchResult));
  },

  loadMusicians: () => {
    dispatch(getMusicians());
    dispatch(getBands());
    dispatch(getPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
