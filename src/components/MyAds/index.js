import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardAds from './CardAds';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

function MyAds({ announces }) {
  console.log('announces = ', announces);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const role = localStorage.getItem('role');
  const id = localStorage.getItem('user');

  return (
    <div className="cardProfiles">
      <Container maxWidth="lg">
        <h2 className="cardProfiles__title">Mes annonces</h2>
        <Slider {...settings}>
          {announces.map((announce, index) => (
            <CardAds
              key={announce.id}
              idAnnounce={announce.id}
              userSelected={announce.category}
              instrument={announce.instrument}
              styles={announce.style}
              title={announce.title}
              description={announce.description}
            />
          ))}
        </Slider>
        <Grid container justify="center">
          <Grid className="cardProfiles__button">
            <Button
              id="create_ad_btn"
              variant="contained"
              size="large"
              color="primary"
              component={Link}
              to={`/profil/${role}/${id}/newad`}
            >
              Créer une annonce
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MyAds.propTypes = {
  announces: PropTypes.array.isRequired,
  // name:PropTypes.string.isRequired,
  // role:PropTypes.string.isRequired,
  // instruments:PropTypes.array.isRequired,
  // styles:PropTypes.array.isRequired,
  // title:PropTypes.string.isRequired,
  // description:PropTypes.string.isRequired,
};

export default MyAds;
