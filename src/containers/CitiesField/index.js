import { connect } from 'react-redux';
import CitiesField from 'src/components/SearchPage/CitiesField';
import { changeCityValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
console.log(state)
console.log('ownProps == ', ownProps);

return {
  cities:state.cities,
  value:state[ownProps.name],
  cityName: state.cityName,
}
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCityValue: (event) => {
    dispatch(changeCityValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesField);
