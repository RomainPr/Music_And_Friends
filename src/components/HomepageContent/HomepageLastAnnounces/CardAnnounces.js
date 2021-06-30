import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

const CardAnnounces = ({ title, category, description, instrument, style }) => (
  <Card id="card">
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
      <div id="card__bandName">
        <h2 className="bandName">Nom du groupe</h2>
      </div>
    </div>
    <CardContent id="card__content">
      <div className="search">
        <p>{category}</p>
      </div>
      <h3 className="adTitle">{title}</h3>
      <p className="description">{description}</p>
    </CardContent>
    <CardActions id="card__footer">
      <Button
        variant="contained"
        size="large"
        color="primary"
        component={Link}
        to={`/announce/${title}`}
      >
        Voir l'annonce
              </Button>
    </CardActions>
  </Card>
);

export default CardAnnounces;
