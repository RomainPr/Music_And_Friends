import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { changeCategoryValue,clickSearch} from 'src/actions';
// import { findSearchResult } from 'src/selectors/search';

const mapStateToProps = (state) => {
console.log(state)


return {
  categories:state.categories,
  categoryName: state.categoryName,
  searchResult:state.user,
  // searchResult:findSearchResult(state.user,state.announce)
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
