import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

const Musicians = ({ musicians }) => (
  <>
    {musicians.map((musician) => (
      <Grid item xs={4}>
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
          </div>
          <CardContent id="card__content">
            <h2 className="bandName">{musician.pseudo}</h2>
            <h4 className="localization">{musician.city}</h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          </CardContent>
          <CardActions id="card__footer">
            <Button
              variant="contained"
              size="large"
              color="primary"
            >
              Voir le profil
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </>
);

Musicians.propTypes = {
  musicians: PropTypes.array.isRequired,
};

export default Musicians;
