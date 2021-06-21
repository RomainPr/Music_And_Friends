import { connect } from 'react-redux';
import CitiesField from 'src/components/SearchPage/CitiesField';
import { changeCityValue } from 'src/actions/search';

const mapStateToProps = (state) => {
console.log(state)


return {
  cities:state.cities,
  cityName: state.cityName,
}
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCityValue: (event) => {
    dispatch(changeCityValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesField);
