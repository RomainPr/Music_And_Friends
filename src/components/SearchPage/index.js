import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import containers
import CitiesField from 'src/containers/CitiesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import StylesField from 'src/containers/StylesField';

// M UI
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

// M UI card musicians
import Select from '@material-ui/core/Select';
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
import Loading from 'src/components/App/Loading';

// Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.scss';

export default function SearchPage({
  isBandChecked, isMusicianChecked, isPlaceChecked,
  cityName, instrumentName, styleName,
  musicians, bands, places, instruments,
  categories,
  categoryName,
  onChangeCategoryValue,
  searchResult,
  onClickSearch,
  onChangeBoxBandValue,
  onChangeBoxMusicianValue,
  onChangeBoxPlaceValue,
}) {
  // if (isBandChecked) {
  //   searchResult.push(...bands);
  // }
  // if (isMusicianChecked) {
  //   searchResult.push(...musicians);
  // }
  // if (isBandChecked) {
  //   searchResult.push(...bands);
  // }

  // if (isBandChecked && isMusicianChecked) {
  //   searchResult.length = 0;
  //   searchResult.push(...bands, ...musicians)
  // }

  // if (isBandChecked && isMusicianChecked && isPlaceChecked) {
  //   searchResult.length = 0;
  //   searchResult.push(...bands, ...musicians, ...places)
  // }

  // if (isBandChecked) {
  //   searchResult.push(...bands);
  // } else if (isMusicianChecked) {
  //   searchResult.push(...musicians);
  // } else if (isPlaceChecked) {
  //   searchResult.push(...places);
  // } else if (isBandChecked && isMusicianChecked && isPlaceChecked) {
  //   searchResult.push(...bands, ...musicians, ...places);
  // } else {
  //   searchResult.length = 0;
  // }

  // if (isBandChecked) {
  //   searchResult.push(...bands);
  // } else {
  //   searchResult.length = 0;
  // }

  // if (isMusicianChecked) {
  //   searchResult.push(...musicians);
  // } else {
  //   searchResult.length = 0;
  // }

  // if (isPlaceChecked) {
  //   searchResult.push(...places);
  // } else {
  //   searchResult.length = 0;
  // }

  console.log('SEARCHRESULT = ', searchResult);

  const fullList = [...musicians, ...bands, ...places];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: searchResult.length > 3,
  };

  return (
    <div>
      <form id="form">
        <div id="check-box">
          <FormControl component="fieldset">
            <FormLabel id="categories" component="legend">
              Vous recherchez ?
            </FormLabel>
            <FormGroup row aria-label="position" name="position" defaultValue="right">
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={isBandChecked}
                    onChange={onChangeBoxBandValue}
                    name="isBandChecked"
                  />
                )}
                label="Groupes"
                labelPlacement="end"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    // id='isMusicianChecked'
                    checked={isMusicianChecked}
                    // value={value}
                    onChange={onChangeBoxMusicianValue}
                    name="isMusicianChecked"
                  />
                )}
                label="Musiciens"
                labelPlacement="end"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    // id='isPaceChecked'
                    checked={isPlaceChecked}
                    // value={value}
                    onChange={onChangeBoxPlaceValue}
                    name="isPlaceChecked"
                  />
                )}
                label="Salles"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>

        </div>
        <div id="searchFields">
          <CitiesField
            value={cityName}
          />
          <InstrumentsField
            instruments={instruments}
            value={instrumentName}
          />
          <StylesField
            value={styleName}
          />
        </div>

        <div id="result">
          <p className="result-search">Plus précis encore ?</p>
          <FormControl id="form-filter-result">

            <InputLabel id="controlled-open-select-label">Filtrer par (profils, annonces)</InputLabel>

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
          <h2 className="profilsCards__title">{searchResult.length} Résultats</h2>
          <Slider {...settings}>

            {searchResult.map((item) => (
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
                  <h2 className="bandName">{item.name}</h2>
                  <h4 className="localization">{item.city}</h4>
                  {item.description && (
                  <p className="description">{item.description}</p>
                  )}
                  <Grid item xs={6}>
                    <div className="attributes">
                      {item.instrument && (
                        <>
                          {item.instrument.map((instrument) => (
                            <p key={instrument} className="boxAttributes">{instrument}</p>
                          ))}
                        </>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="attributes">
                      {item.styles && (
                      <>
                        {item.styles.slice(0, 3).map((style) => (
                          <p key={style} className="boxAttributes">{style}</p>
                        ))}
                      </>
                      )}
                    </div>
                  </Grid>
                </CardContent>
                <CardActions id="card__footer">
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    component={Link}
                    to={`/musicians/${item.name}`}
                  >
                    Voir le profil
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Slider>
        </Container>
      </div>

      <Button
        id="load-more-btn"
      >
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
  instruments: PropTypes.array.isRequired,

  categories: PropTypes.array.isRequired,
  onChangeCategoryValue: PropTypes.func.isRequired,

  searchResult: PropTypes.array.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

SearchPage.defaultProps = {
  isBandChecked: false,
  isMusicianChecked: false,
  isPlaceChecked: false,
};
