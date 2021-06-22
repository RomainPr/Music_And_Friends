import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import MovieRoundedIcon from '@material-ui/icons/MovieRounded';

import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

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
  paperLeft: {
    width: '270px',
    borderRadius: '10px',
    padding: '30px',
  },
  paperRight: {
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
    left: '10px',
  },
}));

function MusicianProfilContent() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className="profilEditionContent">
        <Grid item xs={12}>
          <div className="profilEditionContent__description">
            <form noValidate autoComplete="off">
              <div>
                <Paper elevation={3}>
                  {/* TODO: // Chercher la description du musicien */}
                </Paper>
              </div>
            </form>
          </div>
        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={6} md={6}>
            <div className="profilEditionContent__content__video">
              <h4 className="profilEditionContent__content__video__title">Vidéos</h4>
              <Paper elevation={3} className={classes.paperRight}>
                <MovieRoundedIcon className={classes.buttonsLeft} />
                <div className="profilEditionContent__content__action">
                  <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <Paper elevation={3} className={classes.paperRight}>
              <div className="profilEditionContent__content">
                <h4 className="profilEditionContent__content__title">Mes instruments :</h4>
                <ul className="profilEditionContent__content__list">
                  <li>Triangle</li>
                  <li>Planche à laver</li>
                  <li>Guimbarde</li>
                </ul>
                <div className="profilEditionContent__content__action">
                  <Fab size="small" color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.paperRight}>
            <div className="profilEditionContent__content">
              <h4 className="profilEditionContent__content__title">Mes styles :</h4>
              <ul className="profilEditionContent__content__list">
                <li>Bisou Metal</li>
                <li>Hardcore Tagada</li>
                <li>Rock'n'Soup</li>
              </ul>
              <div className="profilEditionContent__content__action">
                <Fab size="small" color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} className={classes.saveButton}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
          >
            Sauvegarder
          </Button>
        </Grid>
      </div>
    </Container>
  );
}

export default MusicianProfilContent;
