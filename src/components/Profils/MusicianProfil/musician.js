/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

import '../styles.scss';

function MusicianProfil({ musician }) {
  return (
    <>
      <Header
        pseudo={musician.user_pseudo}
        instruments={musician.user_instrument}
        styles={musician.array_agg}
        city={musician.user_city}
      />
      <Content
        description={musician.description}
      />
    </>
  );
}

MusicianProfil.propTypes = {
  musician: PropTypes.shape({
    pseudo: PropTypes.string.isRequired,
    instruments: PropTypes.array.isRequired,
    styles: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

MusicianProfil.defaultProps = {
  musician: null,
};

export default MusicianProfil;
