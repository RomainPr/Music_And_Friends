/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

import '../styles.scss';

function PlaceProfil({ place }) {
  return (
    <>
      <Header
        pseudo={place.name}
        city={place.city}
      />
      <Content
        description={place.description}
      />
    </>
  );
}

PlaceProfil.propTypes = {
  place: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

PlaceProfil.defaultProps = {
  place: null,
};

export default PlaceProfil;
