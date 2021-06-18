import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
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
// import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
// import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function LastProfils({ musicians, bands, places }) {
  const fullList = [...musicians, ...bands, ...places];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
    <div className="profilsCards">
      <Container maxWidth="lg">
        <h2 className="profilsCards__title">Les derniers profils</h2>
        <Slider {...settings}>
          {fullList.map((item) => (
            <Grid item xs={4} md={12}>
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
                  <h2 className="bandName">{item.name}<span>{item.band_name}</span><span>{item.pseudo}</span></h2>
                  <h4 className="localization">{item.city}</h4>
                  <p className="description">{item.description}</p>
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
        </Slider>
      </Container>
    </div>
  );
}

LastProfils.propTypes = {
  musicians: PropTypes.array.isRequired,
  bands: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
};

export default LastProfils;
