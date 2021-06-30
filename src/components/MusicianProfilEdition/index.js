/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import MusicianProfilHeader from 'src/components/MusicianProfilEdition/MusicianProfilHeader';
import MusicianProfilContent from 'src/components/MusicianProfilEdition/MusicianProfilContent';

const MusicianProfilEdition = ({ musicianProfil, openVideos, openInstruments, handleOpenVideos, handleClose }) => (
  <>
    <MusicianProfilHeader 
      name={musicianProfil.name}
      firstname={musicianProfil.firstname}
      lastname={musicianProfil.lastname}
      city={musicianProfil.city}
    />
    <MusicianProfilContent 
      styles={musicianProfil.styles}
      instruments={musicianProfil.instrument}
      description={musicianProfil.description}
      openVideos={openVideos}
      openInstruments={openInstruments}
      handleOpenVideos={handleOpenVideos}
      handleClose={handleClose}
    />
  </>
);

export default MusicianProfilEdition;
