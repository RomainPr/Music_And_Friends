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
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';

//Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.scss';

export default function SearchPage({
  isBandChecked, isMusicianChecked, isPlaceChecked,
  cityName, instrumentName, styleName,
  musicians, bands, places,
  categories,
  categoryName,
  onChangeCategoryValue,
  searchResult,
  onClickSearch,
}) {

//DOC FILTER MDN 
//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
//  /*console.log(isBandChecked)

//search with checkbox (bands, musicians,places)
  if (isBandChecked) {
    //https://medium.com/@jv.quilichini/comment-supprimer-les-doublons-dun-tableau-en-es6-c547a5b2bcf3

    const bandChecked = [];
    bandChecked.push(...bands);
    new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
    searchResult = [...bandChecked];
    console.log("searchResult bands:", searchResult);

    if (isBandChecked && isMusicianChecked) {
      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...bandChecked];
      console.log("searchResult bands:", searchResult);

      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...bandChecked, ...musicianChecked];
      console.log("searchResult bands + musicians:", searchResult);

    }

    if (isBandChecked && isPlaceChecked) {
      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...bandChecked];
      console.log("searchResult bands:", searchResult);

      const placeChecked = [];
      placeChecked.push(...places);
      console.log(placeChecked);
      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...bandChecked, ...placeChecked];
      console.log("searchResult bands + places:", searchResult);
    }

    if (isBandChecked && isMusicianChecked && isPlaceChecked) {
      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...bandChecked];
      console.log("searchResult bands:", searchResult);

      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...bandChecked, ...musicianChecked];
      console.log("searchResult bands + musicians:", searchResult);

      const placeChecked = [];
      placeChecked.push(...places);

      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...bandChecked, ...musicianChecked, ...placeChecked];
      console.log("searchResult bands + musicians + places:", searchResult);
    }
  };

  if (isMusicianChecked) {
    //https://medium.com/@jv.quilichini/comment-supprimer-les-doublons-dun-tableau-en-es6-c547a5b2bcf3

    const musicianChecked = [];
    musicianChecked.push(...musicians);
    // console.log(bandsChecked);
    new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)
    searchResult = [...musicianChecked];

    if (isMusicianChecked && isBandChecked) {

      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked];
      console.log("searchResult musicians :", searchResult);

      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...musicianChecked, ...bandChecked];
      console.log("searchResult bands:", searchResult);
    }

    if (isMusicianChecked && isPlaceChecked) {
      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked];
      console.log("searchResult musicians :", searchResult);

      const placeChecked = [];
      placeChecked.push(...places);
      console.log(placeChecked);
      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked, ...placeChecked];
      console.log("searchResult musicians + places:", searchResult);
    }

    if (isMusicianChecked && isBandChecked && isPlaceChecked) {
      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked];
      console.log("searchResult musicians:", searchResult);

      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...bandChecked, ...musicianChecked];
      console.log("searchResult bands + musician:", searchResult);

      const placeChecked = [];
      placeChecked.push(...places);

      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...bandChecked, ...musicianChecked, ...placeChecked];
      console.log("searchResult bands + musicians + places:", searchResult);
    }
  };

  if (isPlaceChecked) {
    //https://medium.com/@jv.quilichini/comment-supprimer-les-doublons-dun-tableau-en-es6-c547a5b2bcf3

    const placeChecked = [];
    placeChecked.push(...places);
    console.log(placeChecked);
    new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

    searchResult = [...placeChecked];
    console.log("searchResult places:", searchResult);

    if (isBandChecked && isPlaceChecked) {

      const placeChecked = [];
      placeChecked.push(...places);
      console.log(placeChecked);
      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...placeChecked];
      console.log("searchResult places:", searchResult);

      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...bandChecked,...placeChecked];
      console.log("searchResult bands:", searchResult);
    }

    if (isMusicianChecked && isPlaceChecked) {
      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked];
      console.log("searchResult musicians :", searchResult);

      const placeChecked = [];
      placeChecked.push(...places);
      console.log(placeChecked);
      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked, ...placeChecked];
      console.log("searchResult musicians + places:", searchResult);
    }

    if (isMusicianChecked && isBandChecked && isPlaceChecked) {
      const musicianChecked = [];
      musicianChecked.push(...musicians);
      // console.log(bandsChecked);
      new Set(musicianChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...musicianChecked];
      console.log("searchResult musicians:", searchResult);

      const bandChecked = [];
      bandChecked.push(...bands);
      new Set(bandChecked);// supprime les doublons dans le tableau (ES6)
      searchResult = [...bandChecked, ...musicianChecked];
      console.log("searchResult bands + musician:", searchResult);

      const placeChecked = [];
      placeChecked.push(...places);

      new Set(placeChecked);// supprime les doublons dans le tableau (ES6)

      searchResult = [...bandChecked, ...musicianChecked, ...placeChecked];
      console.log("searchResult bands + musicians + places:", searchResult);
    }
  };

  //search with multiSelect Field (city, instrumentName,styleName)
    
    console.log(instrumentName,styleName);
    console.log(searchResult)
    if ((instrumentName.length >= 1) || (styleName.lenght >= 1)) {
      console.log(instrumentName)
      for (const index of instrumentName) {
        searchResult.filter(element => element.instrumentName.find(index => element = searchResult.user_instrument));
        console.log(searchResult)
      }
        console.log("searchResult",searchResult);
      
    }

    if (styleName.lenght >= 1) {
      for (const index of styleName) {
        searchResult.filter(element => element.styleName.find(element => element = index));
       
        console.log("searchResult",searchResult);
      }
      return searchResult
  } 

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
      <div className="profilsCards">
        <Container maxWidth="lg">
          <h2 className="profilsCards__title">{searchResult.length} Profil(s)</h2>
          <Slider {...settings}>

            {searchResult.map((item, index) => {
              {/* console.log(item); */ }
              return (

                <Grid
                  item xs={4} md={12} key={index}
                >

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
                      <h2 className="bandName">{item.name}
                        <span>{item.band_name}</span>
                        <span>{item.pseudo}</span>
                      </h2>
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
              )
            })}
          </Slider>
        </Container>
      </div>

      <Button
        id="load-more-btn">
        <ArrowDropDownCircleIcon id="dropDown-arrow" />
      </Button>
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

  searchResult: PropTypes.array.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

SearchPage.defaultProps = {
  isBandChecked: false,
  isMusicianChecked: false,
  isPlaceChecked: false,
}
