import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import musician from 'src/assets/musician.jpg';
import place from 'src/assets/place.jpg';

import './styles.scss';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  modal: {
    width: '800px',
  },
  actionArea: {
    borderRadius: 10,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: {
    minWidth: 250,
    borderRadius: 10,
    boxShadow: 'none',
  },
  content: {
    background: '#FDA13D',
    padding: '1rem 1.5rem 1.5rem',
  },
  title: {
    fontSize: '1.5em',
    fontFamily: 'inherit',
    fontWeight: '500',
    color: '#fff',
  },
}));

function ModalSignUp({ openSignUp, handleClose }) {
  const gridStyles = useGridStyles();
  const classes = useStyles();

  return (
    <div className="modalSignUp">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSignUp}
        onClose={handleClose}
        className="modalSignIn"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSignUp}>
          <div className="modal__content">
            <h2 className="modal__content__title">Vous êtes :</h2>
            <div className="modal__content__choice">
              <Grid classes={gridStyles} container spacing={4} wrap="nowrap">
                <Grid item>
                  <CardActionArea
                    className={classes.actionArea}
                    component={Link}
                    to="/sign/musician"
                  >
                    <Card className={classes.card}>
                      <CardMedia component="img" image={musician} />
                      <CardContent className={classes.content}>
                        <Typography className={classes.title} variant="h2">
                          Un musicien
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
                <Grid item>
                  <CardActionArea
                    className={classes.actionArea}
                    component={Link}
                    to="/sign/place"
                  >
                    <Card className={classes.card}>
                      <CardMedia component="img" image={place} />
                      <CardContent className={classes.content}>
                        <Typography className={classes.title} variant="h2">
                          Un organisateur
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

ModalSignUp.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalSignUp;
