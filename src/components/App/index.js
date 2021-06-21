import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Home from 'src/containers/connectedHomepageContent';
import SignMusician from 'src/containers/SignMusician';
import SearchPage from 'src/containers/SearchPage';
import SignPlace from 'src/containers/SignPlace';

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
      {/* <SignPlace /> */}
      <SignMusician />
      {/* <SearchPage /> */}
      {/* <Home /> */}
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
