import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import SectionHomepage from './SectionHomepage';
import LastProfils from './HomepageLastProfils';
import LastAnnounces from './HomepageLastAnnounces';

const Home = ({ musicians, announces }) => (
  <>
    <Header />
    <SectionHomepage />
    <LastProfils
      musicians={musicians}
    />
    <LastAnnounces />
  </>
);

Home.propTypes = {
  musicians: PropTypes.array.isRequired,
};

export default Home;
