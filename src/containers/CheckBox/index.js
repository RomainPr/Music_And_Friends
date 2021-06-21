import { connect } from 'react-redux';
import CheckBox from 'src/components/CheckBox';
import { changeBoxValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
 
console.log(state.isBandChecked)
console.log(state);

return { 
  isBandChecked: state.search.isBandChecked,
  isMusicianChecked: state.search.isMusicianChecked,
  isPlaceChecked: state.search.isPlaceChecked,

  musicians: state.musicians.musicians,
  bands: state.musicians.bands,
  places: state.musicians.places,
  value: state[ownProps.name],
}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeBoxValue: (value,key) => {
   
    const action = changeBoxValue(value, ownProps.value,key);
   
    dispatch(action);

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
