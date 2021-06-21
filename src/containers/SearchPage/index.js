import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { 
  changeCategoryValue, 
  clickSearch,

} from 'src/actions/search';
// import { findSearchResult } from 'src/selectors/search';

const mapStateToProps = (state) => {

  console.log(state);
  // console.log(state.user[0].pseudo);
  // console.log(state.band[id].map(id => state.band[id].band_name))
  // console.log(state.band[0].band_name);
  // console.log(state.place[0].name);

  return {
    categories: state.categories,
    categoryName: state.categoryName,

    isBandChecked: state.isBandChecked,
    isMusicianChecked: state.isMusicianChecked,
    isPlaceChecked: state.isPlaceChecked,

    musicians: state.user,
    bands: state.band,
    places: state.place,

    loading: state.musicians.loading,
    // band:state.band,
    // user:state.user,
    // place:state.place,
    // searchResult:findSearchResult(state.searchResult),
  }
};

const mapDispatchToProps = (dispatch) => ({

  onChangeCategoryValue: (event) => {
    dispatch(changeCategoryValue(event.target.value));
  },

  onClickSearch: (searchResult) => {
    dispatch(clickSearch(searchResult));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
