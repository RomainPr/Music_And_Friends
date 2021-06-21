import { connect } from 'react-redux';
import CheckBox from 'src/components/SearchPage/CheckBox';
import { changeBoxValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
 
console.log(state.isBandChecked)
console.log(state);

return { 
  isBandChecked: state.isBandChecked,
  isMusicianChecked: state.isMusicianChecked,
  isPlaceChecked: state.isPlaceChecked,

  musicians: state.user,
  bands: state.band,
  places: state.place,
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
