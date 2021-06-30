import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

import { Link } from 'react-router-dom';
// import Carousel from 'react-material-ui-carousel';

import './styles.scss';

import CardAnnounces from './CardAnnounces';

function LastAnnounces({ announces }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="announcesCards">
      <Container maxWidth="lg">
        <h2 className="announcesCards__title">Les dernières annonces parues</h2>
        <Slider {...settings}>
          {announces.map((announce) => (
            <CardAnnounces
              key={announce.id}
              title={announce.title}
              category={announce.category}
              description={announce.description}
              instrument={announce.instrument}
              style={announce.style}
            />
          ))}
          </Slider>
    </Container>
  </div>
  )
};

export default LastAnnounces;
