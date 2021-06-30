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
    top: '10%',
    left: 0,
    right: 0,
    margin: '0 auto',
    right: 0,
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

function MusicianProfilHeader({ name, firstname, lastname, city }) {
  const classes = useStyles();
  return (
    <>
      <div className="profilHeader">
        <img src={bandBackground} alt="" />
        <Grid item xs={3} className={classes.profilInfo}>
          <div className="profilHeader__info">
            <h2 className="profilHeader__info__pseudo">{name}</h2>
            {city[0] !== '' && (
              <h3 className="profilHeader__info__city">{city}</h3>
            )}
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
            <p className="profilContent__infos__name">{firstname}</p>
            <p>{lastname}</p>
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
