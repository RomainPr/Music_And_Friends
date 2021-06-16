import { connect } from 'react-redux';
import CitiesField from 'src/components/SearchPage/CitiesField';
import { changeCityValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
console.log(state)
console.log('ownProps == ', ownProps);

return {
  cities:state.cities,
  value:state[ownProps.name],
}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeCityValue: (value,key) => {
  
    const action = changeCityValue(value, ownProps.name,key);
   
    dispatch(action);

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesField);
