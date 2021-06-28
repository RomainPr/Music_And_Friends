import { connect } from 'react-redux';
import InstrumentsField from 'src/components/InstrumentsField';
import { changeInstrumentValue } from 'src/actions/changeInput';

const mapStateToProps = (state, ownProps) => ({
  instruments: state.musicians.instruments,
  value: state.sign[ownProps.name],
  instrumentName: state.search.instrumentName,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInstru: (event) => {
    dispatch(changeInstrumentValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsField);
