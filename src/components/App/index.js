import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'src/containers/connectedHomepageContent';
import HeaderPage from '../HeaderPage';
import Nav from 'src/containers/connectedNav';
import SignMusician from 'src/containers/SignMusician';
import SearchPage from 'src/containers/SearchPage';
import MusicianProfilEdition from 'src/components/MusicianProfilEdition';
import MusicianProfil from 'src/containers/Profils/MusicianProfil';
import BandProfil from 'src/containers/Profils/BandProfil';
import PlaceProfil from 'src/containers/Profils/PlaceProfil';
import Footer from 'src/components/Footer';
import SignPlace from 'src/containers/SignPlace';
import NewAd from 'src/containers/NewAd';

import ScrollToTop from 'src/components/ScrollToTop';
import Loading from './Loading';
//ads
import MyAds from 'src/containers/MyAds';
import Ad from 'src/components/Ad';
import './styles.scss';

function App({
  loadMusicians,
  loading,
  musicians,
  bands,
  places,
  instruments,
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
          <MusicianProfil
            musicians={musicians}
            instruments={instruments}
          />
          <Footer />
        </Route>
        <Route exact path="/bands/:name">
          <Nav />
          <BandProfil
            bands={bands}
            instruments={instruments}
          />
          <Footer />
        </Route>
        <Route exact path="/places/:name">
          <Nav />
          <PlaceProfil
            places={places}
            instruments={instruments}
          />
          <Footer />
        </Route>
         <Route exact path="/announces/:id">
          <Nav />
          <Ad />
          <Footer />
        <Route exact path="/profil/:role/:id/myAds">
          <Nav />
          <MyAds />
          <Footer />
        </Route>
        <Route exact path="/profil/:role/:id/myAds/newads">
          <Nav />
          <NewAd />
          <Footer />
        </Route>
       
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
  instruments: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
