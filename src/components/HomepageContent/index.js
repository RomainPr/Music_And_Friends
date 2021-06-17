import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import SectionHomepage from './SectionHomepage';
import LastProfils from './HomepageLastProfils';
import LastAnnounces from './HomepageLastAnnounces';

const Home = ({ musicians, bands, places, announces }) => (
  <>
    <Header />
    <SectionHomepage />
    <LastProfils
      musicians={musicians}
      bands={bands}
      places={places}
    />
    <LastAnnounces />
  </>
);

Home.propTypes = {
  musicians: PropTypes.array.isRequired,
  bands: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
};

export default Home;
