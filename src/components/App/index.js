import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Home from 'src/containers/connectedHomepageContent';
import SignMusician from 'src/containers/SignMusician';
import SearchPage from 'src/containers/SearchPage';
import Loading from './Loading';

import './styles.scss';

function App({ loadMusicians, loading, musicians, bands, places }) {
useEffect(() => {
loadMusicians();
}, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
     <SearchPage 
      musicians={musicians}
      bands={bands}
      places={places}
     />
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
