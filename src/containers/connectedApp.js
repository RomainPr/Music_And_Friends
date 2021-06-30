import { connect } from 'react-redux';

import App from 'src/components/App';

import { getMusicians, getBands, getPlaces, getInstruments } from '../actions/musicians';

const mapStateToProps = (state) => ({
  loading: state.musicians.loading,
  isAuthenticated: localStorage.getItem('token'),
  musicians: state.musicians.musicians,
  bands: state.musicians.bands,
  places: state.musicians.places,
  instruments: state.musicians.instruments,
  announces: state.myAds.announces,
});

const mapDispatchToProps = (dispatch) => ({
  loadMusicians: () => {
    dispatch(getMusicians());
    dispatch(getBands());
    dispatch(getPlaces());
    dispatch(getInstruments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
