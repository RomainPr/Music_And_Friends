import { connect } from 'react-redux';
import CitiesField from 'src/components/CitiesField';
import { changeCityValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
  console.log(`on est container citiesField`)
  return {
    cities: state.sign.cities,
    value: state.sign[ownProps.name],
    cityName: state.sign.cityName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCityValue: (event) => {
    dispatch(changeCityValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesField);
