import React from 'react';
import Slider from 'react-slick';
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

import CardMusician from './card';

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
    <div className="cardProfiles">
      <Container maxWidth="lg">
        <h2 className="cardProfiles__title">Les derniers profils</h2>
        <Slider {...settings}>
          {musicians.map((musician) => (
            <Grid item xs={12}>
              <CardMusician
                key={musician.id}
                pseudo={musician.user_pseudo}
                instruments={musician.user_instrument}
                styles={musician.array_agg}
                city={musician.city}
                id={musician.id}
                name={musician.name}
                band_name={musician.band_name}
              />
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
