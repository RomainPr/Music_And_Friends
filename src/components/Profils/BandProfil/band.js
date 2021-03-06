/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

import '../styles.scss';

function BandProfil({ band }) {
  return (
    <>
      <Header
        pseudo={band.name}
        instruments={band.instrument}
        styles={band.styles}
        city={band.city}
      />
      <Content
        description={band.description}
      />
    </>
  );
}

BandProfil.propTypes = {
  band: PropTypes.shape({
    name: PropTypes.array.isRequired,
    instrument: PropTypes.array.isRequired,
    styles: PropTypes.array.isRequired,
    city: PropTypes.array.isRequired,
  }),
};

BandProfil.defaultProps = {
  band: null,
};

export default BandProfil;
