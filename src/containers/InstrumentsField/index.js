import { connect } from 'react-redux';
import InstrumentsField from 'src/components/InstrumentsField';
import { changeInstrumentValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {

  return {
    instruments: state.signMusician.instruments,
    value: state.signMusician[ownProps.name],
    instrumentName: state.signMusician.instrumentName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeInstrumentValue: (event) => {
    dispatch(changeInstrumentValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsField);
