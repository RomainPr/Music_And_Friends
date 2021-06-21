import { connect } from 'react-redux';
import CitiesField from 'src/components/CitiesField';
import { changeCityValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {
  console.log(`on est container citiesField`)
  return {
    cities: state.signMusician.cities,
    value: state.signMusician[ownProps.name],
    cityName: state.signMusician.cityName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCityValue: (event) => {
    dispatch(changeCityValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesField);
