import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router';

import Home from 'src/containers/connectedHomepageContent';
import SignMusician from 'src/containers/SignMusician';
import SearchPage from 'src/containers/SearchPage';
import Loading from './Loading';

import './styles.scss';

function App({
  loadMusicians, loading, musicians, bands, places,
}) {
  useEffect(() => {
    loadMusicians();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <SearchPage
        musicians={musicians}
        bands={bands}
        places={places}
      />
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
