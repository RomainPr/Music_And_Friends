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
    width: '250px',
    borderRadius: '10px',
    padding: '30px',
  },
  paperRight: {
    position: 'relative',
    width: '400px',
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
        <Grid item xs={12} className={classes.root}>
          <Grid item xs={12} md={3}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
              spacing={4}
            >
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.paperLeft}>
                  <div className="profilEditionContent__content">
                    <h4 className="profilEditionContent__content__title">Mes réseaux :</h4>
                    <ul className="profilEditionContent__content__list">
                      <li>Facebook
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                      <li>Twitter
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                      <li>Site perso
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                    </ul>
                    <div className="profilEditionContent__content__action">
                      <Fab size="small" color="primary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.paperLeft}>
                  <div className="profilEditionContent__content">
                    <h4 className="profilEditionContent__content__title">Mes instruments :</h4>
                    <ul className="profilEditionContent__content__list">
                      <li>Triangle
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                      <li>Planche à laver
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                      <li>Guimbarde
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                    </ul>
                    <div className="profilEditionContent__content__action">
                      <Fab size="small" color="primary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.paperLeft}>
                  <div className="profilEditionContent__content">
                    <h4 className="profilEditionContent__content__title">Mes styles :</h4>
                    <ul className="profilEditionContent__content__list">
                      <li>Bisou Metal
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                      <li>Hardcore Tagada
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
                      <li>Rock'n'Soup
                        <IconButton color="secondary" aria-label="delete" component="span">
                          <HighlightOffRoundedIcon />
                        </IconButton>
                      </li>
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
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant="contained" size="large" color="primary">
              Modifier mes informations personnelles
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-end"
              spacing={4}
            >
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="profilEditionContent__description">
            <form noValidate autoComplete="off">
              <div>
                <Paper elevation={3}>
                  <TextField
                    className={classes.textField}
                    multiline
                    rows={12}
                    placeholder="Entrez une description"
                  />
                </Paper>
              </div>
            </form>
          </div>
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
