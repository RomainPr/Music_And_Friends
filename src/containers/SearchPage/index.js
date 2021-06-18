import { connect } from 'react-redux';
import SearchPage from 'src/components/SearchPage';
import { changeCategoryValue } from 'src/actions';

const mapStateToProps = (state) => {
console.log(state)


return {
  categories:state.categories,
  categoryName: state.categoryName,
}
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCategoryValue: (event) => {
    dispatch(changeCategoryValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
