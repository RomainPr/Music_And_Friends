import { connect } from 'react-redux';

import App from 'src/components/App';

import { getMusicians } from '../actions/musicians';

const mapStateToProps = (state) => ({
  loading: state.musicians.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadMusicians: () => {
    dispatch(getMusicians());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
