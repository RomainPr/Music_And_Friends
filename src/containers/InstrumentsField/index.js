import { connect } from 'react-redux';
import InstrumentsField from 'src/components/SearchPage/InstrumentsField';
import { changeInstrumentValue } from 'src/actions';

const mapStateToProps = (state) => {
console.log(state)


return {
  instruments:state.instruments,
  instrumentName: state.instrumentName,
}
};

const mapDispatchToProps = (dispatch) => ({
  onChangeInstrumentValue: (event) => {
    dispatch(changeInstrumentValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsField);
