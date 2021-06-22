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

if (!isBandChecked) {
  console.log(!isBandChecked)
    // searchResult = [...bands];
    searchResult.push(...bands)
    console.log("searchResult bands:", searchResult);
    
  };
  // if (isBandChecked) {
  //   // searchResult = [...bands];
  //   searchResult.filter(band_name){
  //     return band_name
  //   }
  //   console.log("searchResult bands:", searchResult);
    
  // };

// if (isMusicianChecked) {
//       // searchResult = [...musicians];
//       searchResult.push(...musicians)
//       console.log("searchResult musicians:", searchResult);
//     };
// if (isPlaceChecked) {
//       // searchResult = [...places];
//       searchResult.push(...places)
//       console.log("searchResult places:", searchResult);
//     };
console.log(searchResult)

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
          <h2 className="profilsCards__title">{searchResult.length} Zikos</h2>
          <Slider {...settings}>

            {searchResult.map((item, index) => {
              {/* console.log(item); */}
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
