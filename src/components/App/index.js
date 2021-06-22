import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'src/containers/connectedHomepageContent';
import Nav from 'src/containers/connectedNav';
import SignMusician from 'src/containers/SignMusician';
import SearchPage from 'src/containers/SearchPage';
import MusicianProfilEdition from 'src/components/MusicianProfilEdition';
import MusicianProfil from 'src/components/Profils/MusicianProfil';
import Footer from 'src/components/Footer';
import SignPlace from 'src/containers/SignPlace';

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
          <Footer />
        </Route>
        <Route exact path="/search">
          <Nav />
          <SearchPage
            musicians={musicians}
            bands={bands}
            places={places}
          />
          <Footer />
        </Route>
        <Route exact path="/sign/musician">
          <Nav />
          <SignMusician />
          <Footer />
        </Route>
        <Route exact path="/sign/place">
          <Nav />
          <SignPlace />
          <Footer />
        </Route>
        <Route exact path="/musician/id">
          <Nav />
          <MusicianProfil />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loadMusicians: PropTypes.func.isRequired,
  musicians: PropTypes.array.isRequired,
  bands: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
