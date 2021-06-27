/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import bandBackground from 'src/assets/ExempleBand.png';

const useStyles = makeStyles(() => ({
  profilInfo: {
    position: 'absolute',
    bottom: '12%',
    right: '6%',
  },
  pseudo: {
    position: 'absolute',
    top: '35%',
    right: '0',
    left: '0',
    margin: '0 auto',
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
  buttonUpload: {
    color: '#fff',
  },
  avatar: {
    width: '130px',
    height: '130px',
  },
  actions: {
    paddingTop: '40px',
    marginLeft: '18%',
  },
  actionButtons: {
    textTransform: 'none',
    margin: '0 20px',
    fontFamily: 'inherit',
  },
  icon: {
    marginRight: '10px',
  },
  paper: {
    borderRadius: '10px',
    padding: '20px',
  },
  paperItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function BandProfilHeader({
  city, pseudo, instruments, styles,
}) {
  const classes = useStyles();
  return (
    <>
      <div className="header">
        <div className="profilHeader">
          <img src={bandBackground} alt="" />
          <Grid item xs={3} className={classes.profilInfo}>
            <div className="profilHeader__info">
              <Paper elevation={3} className={classes.paper}>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item className={classes.paperItem}>
                    <h2 className="profilHeader__info__title">Ville : </h2>
                    <ul>
                      <li>Paris</li>
                    </ul>
                  </Grid>
                  <Grid item className={classes.paperItem}>
                    <h2 className="profilHeader__info__title">Instruments : </h2>
                    {instruments.map((instrument) => (
                      <li key={instrument} className="profilHeader__info__list">{instrument}</li>
                    ))}
                  </Grid>
                  <Grid item className={classes.paperItem}>
                    <h2 className="profilHeader__info__title">Styles : </h2>
                    {styles.map((style) => (
                      <li key={style} className="profilHeader__info__list">{style}</li>
                    ))}
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={3} className={classes.pseudo}>
            <h2 className="profilHeader__info__pseudo">{pseudo}</h2>
          </Grid>
          <div className="profilHeaderContent">
            <Grid item xs={2}>
              <div className="profilHeaderContent__avatar">
                <Avatar
                  className={classes.avatar}
                  src="https://i.pravatar.cc/300"
                />
              </div>
            </Grid>
            <Grid item xs={8} className={classes.actions}>
              <div className="profilHeaderContent__actions">
                <div className="profilHeaderContent__actions__contact">
                  <Button className={classes.actionButtons}>
                    <StarRoundedIcon className={classes.icon} />
                    S'abonner
                  </Button>
                  <Button className={classes.actionButtons}>
                    <ChatRoundedIcon className={classes.icon} />
                    Contacter
                  </Button>
                </div>
                <div className="profilHeaderContent__actions__band">
                  <p>Groupe(s) intégré(s)</p>
                </div>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default BandProfilHeader;
