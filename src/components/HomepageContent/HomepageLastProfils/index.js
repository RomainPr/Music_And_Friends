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

import CardMusician from './cardMusician';
import CardBand from './cardBand';
import CardPlaces from './cardPlaces';

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
  };

  return (
    <div className="cardProfiles">
      <Container maxWidth="lg">
        <h2 className="cardProfiles__title">Les derniers profils</h2>
        <Slider {...settings}>
          {musicians.map((musician) => (
            <CardMusician
              key={musician.id}
              pseudo={musician.name}
              instruments={musician.instrument}
              styles={musician.styles}
              description={musician.description}
              city={musician.city}
              id={musician.id}
              name={musician.name}
            />
          ))}
          {bands.map((band) => (
            <CardBand
              key={band.id}
              instruments={band.instrument}
              styles={band.styles}
              description={band.description}
              city={band.city}
              id={band.id}
              band_name={band.name}
            />
          ))}
          {places.map((place) => (
            <CardPlaces
              key={place.id}
              name={place.name}
              description={place.description}
              city={place.city}
              id={place.id}
            />
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
