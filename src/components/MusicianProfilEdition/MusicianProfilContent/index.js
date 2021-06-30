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
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Slider from 'react-slick';
import ReactPlayer from 'react-player/lazy';

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
    width: '300px',
    borderRadius: '10px',
    padding: '30px',
    position: 'relative',
  },
  addLeft: {
    position: 'absolute',
    top: '-20px',
    left: 0,
  },
  paperRight: {
    position: 'relative',
    width: '600px',
    borderRadius: '10px',
    padding: '30px',
  },
  addRight: {
    position: 'absolute',
    bottom: '-20px',
    right: '-10px',
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function MusicianProfilContent({ openVideos, openInstruments, handleOpenVideos, handleClose, styles, instruments, description }) {
  const classes = useStyles();
  const [instrument, setInstrument] = React.useState('');
  const [urls, setUrls] = React.useState([]);
  const [url, setUrl] = React.useState('');

   const handleOpenInstruments = () => {
    setOpenInstruments(true);
  };

  const handleOnChangeUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleOnChangeInstrument = (event) => {
    setInstrument(event.target.value);
  };

  const sendUrl = () => {
    urls.push(url);
    localStorage.setItem('urls', urls);
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openVideos}
        onClose={handleClose}
        className="modalSignIn"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openVideos}>
          <div className="modal--content">
            <h2 className="modal__content__title">Entrez une URL</h2>
            <TextField label="url" variant="outlined" value={url} onChange={handleOnChangeUrl} />
            <Button variant="contained" color="primary" onClick={sendUrl}>Envoyer</Button>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openInstruments}
        onClose={handleClose}
        className="modalSignIn"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openInstruments}>
          <div className="modal--content">
            <h2 className="modal__content__title">Entrez un instrument</h2>
            <TextField label="instrument" variant="outlined" value={instrument} onChange={handleOnChangeInstrument} />
            <Button variant="contained" color="primary">Envoyer</Button>
          </div>
        </Fade>
      </Modal>
      <div className="profilEditionContent">
        <Grid item xs={12} className={classes.root}>
          <Grid item xs={12} md={3}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
              spacing={5}
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
                      <Fab className={classes.addLeft} size="small" color="primary" aria-label="add">
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
                      {instruments.map((instrument) => (
                        <li>{instrument}
                          <IconButton color="secondary" aria-label="delete" component="span">
                            <HighlightOffRoundedIcon />
                          </IconButton>
                        </li>
                      ))}
                    </ul>
                    <div className="profilEditionContent__content__action">
                      <Fab onClick={handleOpenInstruments} className={classes.addLeft} size="small" color="primary" aria-label="add">
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
                      {styles.map((style) => (
                        <li>{style}
                          <IconButton color="secondary" aria-label="delete" component="span">
                            <HighlightOffRoundedIcon />
                          </IconButton>
                        </li>
                      ))}
                    </ul>
                    <div className="profilEditionContent__content__action">
                      <Fab className={classes.addLeft} size="small" color="primary" aria-label="add">
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
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-end"
              spacing={9}
            >
              <Grid item>
                <div className="profilEditionContent__content__media">
                  <h4 className="profilEditionContent__content__media__title">Vidéos</h4>
                  <Paper elevation={3} className={classes.paperRight}>
                    <MovieRoundedIcon className={classes.buttonsLeft} />
                    <Slider {...settings}>
                      {urls.map((url) => (
                        <ReactPlayer
                          light
                          controls
                          url={url}
                          value={url}
                        />
                      ))}
                    </Slider>
                    <div className="profilEditionContent__content__action">
                      <Fab onClick={handleOpenVideos} className={classes.addRight} size="small" color="primary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </div>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="profilEditionContent__content__media">
                  <h4 className="profilEditionContent__content__media__title">Audios :</h4>
                  <Paper elevation={3} className={classes.paperRight}>
                    <VolumeUpRoundedIcon className={classes.buttonsLeft} />
                    <div className="profilEditionContent__content__action">
                      <Fab className={classes.addRight} size="small" color="primary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </div>
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="profilEditionContent__content__media">
                  <h4 className="profilEditionContent__content__media__title">Mes partitions :</h4>
                  <Paper elevation={3} className={classes.paperRight}>
                    <MusicNoteRoundedIcon className={classes.buttonsLeft} />
                    <div className="profilEditionContent__content__action">
                      <Fab className={classes.addRight} size="small" color="primary" aria-label="add">
                        <AddIcon />
                      </Fab>
                    </div>
                  </Paper>
                </div>
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
                    content={description}
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

MusicianProfilContent.propTypes = {
  styles: PropTypes.array.isRequired,
  instruments: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
};

export default MusicianProfilContent;
