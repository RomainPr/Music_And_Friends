import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

import CardMusician from './cardMusician';
import CardBand from './cardBand';
import CardPlaces from './cardPlaces';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function LastProfils({ musicians, bands, places }) {
  const fullList = [...musicians, ...bands, ...places];

  const settings_3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };

  return (
    <div className="cardProfiles">
      <Container maxWidth="lg">
        <h2 className="cardProfiles__titleProfil">Les derniers profils</h2>
        <Slider {...settings_3}>
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
