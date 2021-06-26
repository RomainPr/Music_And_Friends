import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MovieRoundedIcon from '@material-ui/icons/MovieRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  profilInfo: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    right: '0',
    margin: '0 auto',
    flexGrow: 1,
  },
  paper: {
    position: 'relative',
    borderRadius: '10px',
    padding: '30px',
  },
  textField: {
    width: '100%',
    padding: '30px',
  },
  saveButton: {
    textAlign: 'center',
  },
  buttonsLeft: {
    fontSize: '60px',
    position: 'absolute',
    top: '-35px',
    left: '0',
    right: '0',
    margin: '0 auto',
  },
}));

function bandProfilContent({ description }) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className="profilMusicianContent">
        <Grid item xs={12}>
          <div className="profilMusicianContent__description">
            <h4 className="profilMusicianContent__description__title">Description</h4>
            <Paper elevation={3} className={classes.paper}>
              <p>{description}</p>
            </Paper>
          </div>
        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={6} md={6}>
            <div className="profilMusicianContent__content__media">
              <h4 className="profilMusicianContent__content__media__title">Vidéos</h4>
              <Paper elevation={3} className={classes.paper}>
                <MovieRoundedIcon className={classes.buttonsLeft} />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className="profilMusicianContent__content__media">
              <h4 className="profilMusicianContent__content__media__title">Audios</h4>
              <Paper elevation={3} className={classes.paper}>
                <VolumeUpRoundedIcon className={classes.buttonsLeft} />
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="profilMusicianContent__content__media">
            <h4 className="profilMusicianContent__content__media__title">Partitions</h4>
            <Paper elevation={3} className={classes.paper}>
              <MusicNoteRoundedIcon className={classes.buttonsLeft} />
            </Paper>
          </div>
        </Grid>
      </div>
    </Container>
  );
}

export default bandProfilContent;
