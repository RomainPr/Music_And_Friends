import { connect } from 'react-redux';
import InstrumentsField from 'src/components/InstrumentsField';
import { changeInstrumentValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => {

  return {
    instruments: state.instruments,
    value: state[ownProps.name],
    instrumentName: state.instrumentName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeInstrumentValue: (event) => {
    dispatch(changeInstrumentValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsField);
