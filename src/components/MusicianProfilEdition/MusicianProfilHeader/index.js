/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import bandBackground from 'src/assets/ExempleBand.png';
import './styles.scss';

const useStyles = makeStyles(() => ({
  profilInfo: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    right: '0',
  },
  input: {
    display: 'none',
  },
  buttonUpload: {
    color: '#fff',
  },
  avatar: {
    width: '180px',
    height: '180px',
  },
}));

function MusicianProfilHeader() {
  const classes = useStyles();
  return (
    <>
      <div className="profilHeader">
        <img src={bandBackground} alt="" />
        <Grid item xs={6} className={classes.profilInfo}>
          <div className="profilHeader__info">
            <h2 className="profilHeader__info__pseudo">Pseudo</h2>
            <h3 className="profilHeader__info__city">Ma Région / Ville</h3>
          </div>
        </Grid>
        <div className="profilHeader__backgroundUpload">
          <input accept="image/*" className={classes.input} id="backgroundPictureUpload" type="file" />
          <label htmlFor="backgroundPictureUpload">
            <IconButton className={classes.buttonUpload} aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
        <div className="profilContent">
          <Avatar
            className={classes.avatar}
            src="https://i.pravatar.cc/300"
          />
          <div className="profilContent__infos">
            <p className="profilContent__infos__name">Nom</p>
            <p>Prénom</p>
          </div>
          <div className="profilHeader__backgroundUpload">
            <input accept="image/*" className={classes.input} id="profilPictureUpload" type="file" />
            <label htmlFor="profilPictureUpload">
              <IconButton className={classes.buttonUpload} aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicianProfilHeader;
