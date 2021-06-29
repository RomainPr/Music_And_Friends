import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import components
import CitiesField from 'src/containers/CitiesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import StylesField from 'src/containers/StylesField';

// M UI
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

// M UI card musicians
import Select from '@material-ui/core/Select';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import GlobalCardProfils from './GlobalCardProfils';

// Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import musicalAnimation from './musical_animation.json';
// import Lottie from 'lottie-react';
import './style.scss';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '2em',
    color: '#fff',
    paddingBottom: '40px',
  },
  form: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  formGroupCheckboxes: {
    paddingBottom: '40px',
  },
  checkbox: {
    position: 'absolute',
    left: '-100vw',
    '&.Mui-checked': {
      '&, & + .MuiTypography-body1 p': {
        backgroundColor: '#FDA13D',
      },
    },
  },
  formControlLabel: {
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: '1.3em',
    margin: '0 20px',
    background: '#E87121',
    borderRadius: '20px',
    padding: '10px 40px',
    transition: 'background .2s ease',
  },
}));

export default function SearchPage({
  cityName, instrumentName, styleName,
  musicians, bands, places, instruments,
  categories,
  categoryName,
  onChangeCategoryValue,
<<<<<<< HEAD
=======
  searchResult,

  onClickSearch,
  onChangeBoxBandValue,
  onChangeBoxMusicianValue,
  onChangeBoxPlaceValue,
>>>>>>> 751a1be19f220222a2f97bba1d21c0ecfb9fe9b7
}) {
  const classes = useStyles();

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

  const searchResultAll = [...musicians, ...bands, ...places];

  const [filter, setFilter] = useState('none');
  const [isMusicianChecked, setMusicianChecked] = useState(false);
  const [isBandChecked, setBandChecked] = useState(false);
  const [isPlaceChecked, setPlaceChecked] = useState(false);

  let filteredResults = searchResultAll.filter((item) => {
    if (item.role === filter || item.role[0] === filter || filter === 'none') {
      return item;
    }
  });

  console.log('firstFfilteredResult', filteredResults);

  if (instrumentName.length !== 0 || cityName.length !== 0 || styleName.length !== 0) {
    filteredResults = filteredResults.filter((musician) => {
      const {
        instrument, styles, city, role,
      } = musician;
      if (role === 'place' || role[0] === 'place') {
        if (cityName.length !== 0) {
          let place;
          cityName.map((cityPlace) => {
            console.log('place', `${cityPlace} / ${city}`);
            if (cityPlace == city) {
              console.log('dans le if', musician);
              place = musician;
            }
          });
          return place;
        }
        return false;
      }

      return (
        instrumentName.length === 0 || instrument.some((r) => instrumentName.includes(r)))
        && (styleName.length === 0 || styles.some((r) => styleName.includes(r)))
        && (cityName.length === 0 || city.some((r) => cityName.includes(r)));
    });
  }

  console.log('filteredResultsPlus', filteredResults);

  let mapped;

  if (filteredResults.length !== 0) {
    mapped = filteredResults.map((item) => (
      <GlobalCardProfils
        key={item}
        name={item.name}
        city={item.city}
        description={item.description}
        styles={item.styles}
        instrument={item.instrument}
        roleMusicien={item.role[0]}
        rolePlace={item.role}
      />
    ));
  }

  const handleCheckboxMusician = (e) => {
    if (filter === e.target.value) {
      setFilter('none');
      setMusicianChecked(false);
    }
    else {
      setFilter(e.target.value);
      setMusicianChecked(true);
    }
  };
  const handleCheckboxBands = (e) => {
    if (filter === e.target.value) {
      setFilter('none');
      setBandChecked(false);
    }
    else {
      setFilter(e.target.value);
      setBandChecked(true);
    }
  };
  const handleCheckboxPlaces = (e) => {
    if (filter === e.target.value) {
      setFilter('none');
      setPlaceChecked(false);
    }
    else {
      setFilter(e.target.value);
      setPlaceChecked(true);
    }
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: searchResultAll.length > 200,
  };

  return (

    <div>
      <Container maxWidth="lg" className={classes.form}>
        <h2 className={classes.title}>Vous recherchez ?</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <FormGroup row justify="center" className={classes.formGroupCheckboxes}>
            <FormControlLabel
              control={(
                <Checkbox
                  className={classes.checkbox}
                  onChange={handleCheckboxBands}
                  checked={isBandChecked}
                  value="band"
                  name="isBandChecked"
                />
                )}
              label={<Typography className={classes.formControlLabel}>Groupes</Typography>}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  className={classes.checkbox}
                  checked={isMusicianChecked}
                  value="musicien"
                  onChange={handleCheckboxMusician}
                  name="isMusicianChecked"
                />
                )}
              label={<Typography className={classes.formControlLabel}>Musiciens</Typography>}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  className={classes.checkbox}
                  checked={isPlaceChecked}
                  value="place"
                  onChange={handleCheckboxPlaces}
                  name="isPlaceChecked"
                />
                )}
              label={<Typography className={classes.formControlLabel}>Salles</Typography>}
            />
          </FormGroup>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={4}
        >
          <CitiesField
            value={cityName}
          />
          <InstrumentsField
            searchResultAll={searchResultAll}
            bands={bands}
            musicians={musicians}
            instruments={instruments}
            value={instrumentName}
          />
          <StylesField
            value={styleName}
          />
        </Grid>

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
      </Container>
      <div className="profilsCards">
        <h2 className="profilsCards__title">{filteredResults.length} Résultats</h2>
        <Container maxWidth="lg">
          {mapped ? (
            <Slider {...settings}>
              {mapped}
            </Slider>
          ) : <div>Aucun résultat</div>}
        </Container>
      </div>
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
