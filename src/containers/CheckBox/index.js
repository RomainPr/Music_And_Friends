import { connect } from 'react-redux';
import CheckBox from 'src/components/CheckBox';
import { changeBoxValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
// console.log(state.search[ownProps.name])
// console.log(state.search.isBandChecked)
// console.log(state);
// console.log(state.search)
// console.log(state[ownProps])
return { 
  isBandChecked: state.search.isBandChecked,
  isMusicianChecked: state.search.isMusicianChecked,
  isPlaceChecked: state.search.isPlaceChecked,

  musicians: state.musicians.musicians,
  bands: state.musicians.bands,
  places: state.musicians.places,
  value: state.search[ownProps.name],
}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeBoxValue: (value) => {
   
    const action = changeBoxValue(value, ownProps.name);
   
    dispatch(action);

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
