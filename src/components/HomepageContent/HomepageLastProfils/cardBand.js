/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#E87121',
    '&:hover': {
      backgroundColor: '#FDA13D',
    },
  },
}));

function CardBand({
  id,
  band_name,
  city,
  description,
  instruments,
  styles,
}) {
  const classes = useStyles();
  return (
    <Card id="card">
      <div id="card__inside">
        <div id="card__image">
          <CardMedia
            component="img"
            alt="BandBackground"
            title="BandBackground"
            image="https://images.unsplash.com/photo-1517147177326-b37599372b73"
          />
          <Avatar
            id="card__avatar"
            src="https://i.pravatar.cc/300"
          />
          <IconButton
            id="card__favorite"
          >
            <StarIcon />
          </IconButton>
        </div>
        <CardContent id="card__content">
          <h2 className="bandName">{band_name}</h2>
          <h4 className="localization">{city}</h4>
          {description && (
          <p className="description">{description}</p>
          )}
          <Grid item xs={6}>
            <div className="attributes">
              {instruments.map((instrument) => (
                <p key={instrument} className="boxAttributes">{instrument}</p>
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="attributes">
              {styles.slice(0, 3).map((style) => (
                <p key={style} className="boxAttributes">{style}</p>
              ))}
            </div>
          </Grid>
        </CardContent>
        <CardActions id="card__footer">
          <Button
            className={classes.button}
            variant="contained"
            size="large"
            color="primary"
            component={Link}
            to={`/bands/${band_name}`}
          >
            Voir le profil
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CardBand;
