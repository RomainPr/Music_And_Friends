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
        pseudo={band.band_name}
        instruments={band.band_instrument}
        styles={band.band_style}
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
    pseudo: PropTypes.string.isRequired,
    instruments: PropTypes.array.isRequired,
    styles: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

BandProfil.defaultProps = {
  band: null,
};

export default BandProfil;
