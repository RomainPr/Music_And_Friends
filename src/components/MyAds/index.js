import React from 'react';
import PropTypes from 'prop-types';



// import Slider from 'react-slick';

import Container from '@material-ui/core/Container';

import CardBandAds from './CardBandAds';
import CardMusicianAds from './CardMusicianAds';
import CardPlaceAds from './CardPlaceAds';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';


function MyAds({ announces }) {
  console.log(announces);

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

        {/* <Slider {...settings}> */}
  
          <CardBandAds
            // name={name}
            // role={role}
            // instruments={instruments}
            // styles={styles}
            // title={title}
            // description={description}
          />
        {/* </Slider> */}

        {/* <Slider {...settings}> */}
          <CardMusicianAds
            // name={name}
            // role={role}
            // instruments={instruments}
            // styles={styles}
            // title={title}
            // description={description}
          />
        {/* </Slider> */}

        {/* <Slider {...settings}> */}
          <CardPlaceAds
            // name={name}
            // role={role}
            // instruments={instruments}
            // styles={styles}
            // title={title}
            // description={description}
          />
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
