import { connect } from 'react-redux';

import App from 'src/components/App';

import { getMusicians, getBands, getPlaces } from '../actions/musicians';

const mapStateToProps = (state) => ({
  loading: state.musicians.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  loadMusicians: () => {
    dispatch(getMusicians());
    dispatch(getBands());
    dispatch(getPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
