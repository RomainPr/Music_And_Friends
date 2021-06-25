import React from 'react';
import PropTypes from 'prop-types';

//import containers
import CheckBox from 'src/containers/CheckBox';
import CitiesField from 'src/containers/CitiesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import StylesField from 'src/containers/StylesField';

//M UI
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';

//M UI card musicians
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
// import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Slider from 'react-slick';

import Container from '@material-ui/core/Container';

//Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CardMusician from '../HomepageContent/HomepageLastProfils/cardMusician';
import CardBand from '../HomepageContent/HomepageLastProfils/cardBand';
import CardPlaces from '../HomepageContent/HomepageLastProfils/cardPlaces';

// import LastAnnounces from '../HomepageContent/HomepageLastAnnounces';
// import musicalAnimation from './musical_animation.json';
// import Lottie from 'lottie-react';
import './style.scss';

export default function SearchPage({
  isBandChecked, isMusicianChecked, isPlaceChecked,
  cityName, instrumentName, styleName,
  musicians, bands, places,
  categories,
  categoryName,
  onChangeCategoryValue,
  // searchResult,
  onClickSearch,

}) {
 
  //Slider setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
    
    <div>
      <form id="form">
        {/* onClick={handleChange} */}

        <CheckBox
          isBandChecked={isBandChecked}
          isMusicianChecked={isMusicianChecked}
          isPlaceChecked={isPlaceChecked}
        />
        <div id="searchFields">
          <CitiesField
            value={cityName}
          />
          <InstrumentsField
            value={instrumentName}
          />
          <StylesField
            value={styleName}
          />
        </div>
        {/* <Lottie animationData={musicalAnimation} className="loading" /> */}
        <Button
          id="search-button"
          onClick={onClickSearch}
          variant="contained">Rechercher
        </Button>

        <div id="result">
          <p className="result-search">Plus précis encore ?</p>

          <FormControl id='form-filter-result'>

            <InputLabel id="controlled-open-select-label">Filtrer par (tous, profils, annonces)</InputLabel>

            <Select
              labelId="mutiple-checkbox-label"
              id="mutiple-checkbox"
              multiple
              value={categoryName}
              onChange={onChangeCategoryValue}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}

            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={categoryName.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

      </form>
      <div className="cardProfiles">
      <Container maxWidth="lg">
        <h2 className="cardProfiles__title"> Profils</h2>
        <Slider {...settings}>
          {musicians.map((musician) => (
            <CardMusician
              key={musician.id}
              pseudo={musician.user_pseudo}
              instruments={musician.user_instrument}
              styles={musician.array_agg}
              city={musician.city}
              id={musician.id}
              name={musician.name}
            />
          ))}
          {bands.map((band) => (
            <CardBand
              key={band.id}
              instruments={band.band_instrument}
              styles={band.band_style}
              city={band.city}
              id={band.id}
              band_name={band.band_name}
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
          {/* <LastAnnounces /> */}
          
        </Slider>
      </Container>
    </div>

      {/* <Button
        id="load-more-btn">
        <ArrowDropDownCircleIcon id="dropDown-arrow" />
      </Button> */}

    </div>
  );
}

SearchPage.propTypes = {
  isBandChecked: PropTypes.bool,
  isMusicianChecked: PropTypes.bool,
  isPlaceChecked: PropTypes.bool,

  cityName: PropTypes.array.isRequired,
  instrumentName: PropTypes.array.isRequired,
  styleName: PropTypes.array.isRequired,

  musicians: PropTypes.array.isRequired,
  bands: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,

  categories: PropTypes.array.isRequired,
  onChangeCategoryValue: PropTypes.func.isRequired,

  // searchResult: PropTypes.array.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

SearchPage.defaultProps = {
  isBandChecked: false,
  isMusicianChecked: false,
  isPlaceChecked: false,
}
