import { connect } from 'react-redux';
import CheckBox from 'src/components/CheckBox';
import { onChangeBoxBandValue, onChangeBoxMusicianValue, onChangeBoxPlaceValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => ({
  isBandChecked: state.search.isBandChecked,
  isMusicianChecked: state.search.isMusicianChecked,
  isPlaceChecked: state.search.isPlaceChecked,
  searchResult: state.search.searchResult,
  musicians: state.musicians.musicians,
  bands: state.musicians.bands,
  places: state.musicians.places,
  value: state.search[ownProps.name],
});

const mapDispatchToProps = (dispatch) => ({
  onChangeBoxBandValue: () => {
    dispatch(onChangeBoxBandValue());
  },
  onChangeBoxMusicianValue: () => {
    dispatch(onChangeBoxMusicianValue());
  },
  onChangeBoxPlaceValue: () => {
    dispatch(onChangeBoxPlaceValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
