import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Home from 'src/containers/connectedHomepageContent';
import Loading from './Loading';

import './styles.scss';

function App({ loadMusicians, loading }) {
  // useEffect(() => {
  //   loadMusicians();
  // }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Home />
    </div>
  );
}

App.propTypes = {
  loadMusicians: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
