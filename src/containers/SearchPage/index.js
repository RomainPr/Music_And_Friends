import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { changeCategoryValue,clickSearch} from 'src/actions';
import { findSearchResult } from 'src/selectors/search';

const mapStateToProps = (state) => {
console.log(state)


return {
  categories:state.categories,
  categoryName: state.categoryName,

  isBandChecked:state.isBandChecked,
  isMusicianChecked:state.isMusicianChecked,
  isPlaceChecked:state.isPlaceChecked,

  band:state.band,
  user:state.user,
  place:state.place,
  searchResult:findSearchResult(state.searchResult),
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
