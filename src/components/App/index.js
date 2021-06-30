import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'src/containers/connectedHomepageContent';
import Nav from 'src/containers/connectedNav';
import SignMusician from 'src/containers/SignMusician';
import SearchPage from 'src/containers/SearchPage';
import MusicianProfilEdition from 'src/containers/connectedMusicianProfilEdition';
import MusicianProfil from 'src/containers/Profils/MusicianProfil';
import BandProfil from 'src/containers/Profils/BandProfil';
import PlaceProfil from 'src/containers/Profils/PlaceProfil';
import Footer from 'src/components/Footer';
import SignPlace from 'src/containers/SignPlace';
import NewAd from 'src/containers/NewAd';
import AdEdition from 'src/containers/AdEdition';

import ScrollToTop from 'src/components/ScrollToTop';
// ads
// import MyAds from 'src/components/MyAds';
import MyAds from 'src/containers/MyAds';
import HeaderPage from '../HeaderPage';

import Loading from './Loading';

import './styles.scss';

function App({
  loadMusicians,
  isLogged,
  loading,
  musicians,
  bands,
  places,
  instruments,
  announces,
}) {
  useEffect(() => {
    loadMusicians();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Route exact path="/search">
          <Nav />
          <HeaderPage />
          <SearchPage
            musicians={musicians}
            bands={bands}
            places={places}
            instruments={instruments}
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
        <Route exact path="/musicians/:name">
          <Nav />
          <MusicianProfil />
          <Footer />
        </Route>
        <Route exact path="/bands/:name">
          <Nav />
          <BandProfil />
          <Footer />
        </Route>
        <Route exact path="/places/:name">
          <Nav />
          <PlaceProfil />
          <Footer />
        </Route>
        <Route exact path="/profil/:role/:id/myads">
          <Nav />
          <MyAds />
          <Footer />
        </Route>
        <Route exact path="/profil/myads/:id/edit">
          <Nav />
          <AdEdition
            announces={announces}
          />
          <Footer />
        </Route>
        <Route exact path="/profil/newad">
          <Nav />
          <NewAd />
        </Route>
        {isLogged ? (
          <Route exact path="/profil/:role/:id">
            <Nav />
            <MusicianProfilEdition />
            <Footer />
          </Route>
        )
          : <Redirect to="/" />}

      </Switch>
    </div>
  );
}

App.propTypes = {
  loadMusicians: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  musicians: PropTypes.array.isRequired,
  bands: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
  instruments: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
