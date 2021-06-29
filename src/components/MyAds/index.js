import React from 'react';
import PropTypes from 'prop-types';



// import Slider from 'react-slick';

import { Container, Button } from '@material-ui/core';

import CardAds from './CardAds';

import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';


function MyAds({ announces }) {
  console.log('announces = ', announces);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  return (

    <div className="cardProfiles">
      <Container maxWidth="lg">
        <h2 className="cardProfiles__title">Mes annonces</h2>

        <Button
          id="create_ad_btn"
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to={`/profil/newad`}
        >
          Créer une annonce
        </Button>

        {/* <Slider {...settings}> */}
        {announces.map((announce, index) => (
          <CardAds
            key={announce.id}
            idAnnounce={announce.id}
            userSelected={announce.category}
            instrument={announce.instrument}
            style={announce.style}
            title={announce.title}
            description={announce.description}
          />
        ))}
        {/* </Slider> */}
      </Container>
    </div>
  );
}

MyAds.propTypes = {
  // name:PropTypes.string.isRequired,
  // role:PropTypes.string.isRequired,
  // instruments:PropTypes.array.isRequired,
  // styles:PropTypes.array.isRequired,
  // title:PropTypes.string.isRequired,
  // description:PropTypes.string.isRequired,
};

export default MyAds;
