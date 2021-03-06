import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FullHeight from 'react-full-height';

// import components
import CitiesField from 'src/containers/CitiesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import StylesField from 'src/containers/StylesField';

// M UI
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

// M UI card musicians
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

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '2em',
    color: '#fff',
    paddingBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4em',
    },
  },
  form: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      top: '19%',
    },
  },
  formGroupCheckboxes: {
    paddingBottom: '40px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
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
    [theme.breakpoints.down('sm')]: {
      margin: '5px',
      padding: '10px',
      fontSize: '1em',
    },
  },
  results: {
    marginBottom: '40px',
  },
}));

export default function SearchPage({
  cityName, instrumentName, styleName,
  musicians, bands, places, instruments,
}) {
  const classes = useStyles();

  let searchResultAll = [...musicians, ...bands, ...places];

  const [filter, setFilter] = useState('none');
  const [isMusicianChecked, setMusicianChecked] = useState(false);
  const [isBandChecked, setBandChecked] = useState(false);
  const [isPlaceChecked, setPlaceChecked] = useState(false);

  let filteredResults = searchResultAll.filter((item) => item);

  if (isBandChecked && !isMusicianChecked && !isPlaceChecked) {
    searchResultAll = [...bands];
    filteredResults = searchResultAll;
  }

  if (isBandChecked && isMusicianChecked && !isPlaceChecked) {
    searchResultAll = [...musicians, ...bands];
    filteredResults = searchResultAll;
  }

  if (isBandChecked && !isMusicianChecked && isPlaceChecked) {
    searchResultAll = [...bands, ...places];
    filteredResults = searchResultAll;
  }

  if (!isBandChecked && isMusicianChecked && !isPlaceChecked) {
    searchResultAll = [...musicians];
    filteredResults = searchResultAll;
  }

  if (!isBandChecked && isMusicianChecked && isPlaceChecked) {
    searchResultAll = [...musicians, ...places];
    filteredResults = searchResultAll;
  }

  if (!isBandChecked && isMusicianChecked && isPlaceChecked) {
    searchResultAll = [...musicians, ...places];
    filteredResults = searchResultAll;
  }

  if (isPlaceChecked && !isMusicianChecked && !isBandChecked) {
    searchResultAll = [...places];
    filteredResults = searchResultAll;
  }

  if (isPlaceChecked && !isMusicianChecked && isBandChecked) {
    searchResultAll = [...places, ...bands];
    filteredResults = searchResultAll;
  }

  if (isPlaceChecked && isMusicianChecked && !isBandChecked) {
    searchResultAll = [...places, ...musicians];
    filteredResults = searchResultAll;
  }

  if (isBandChecked && isMusicianChecked && isPlaceChecked) {
    filteredResults = searchResultAll;
  }

  if (instrumentName.length !== 0 || cityName.length !== 0 || styleName.length !== 0) {
    filteredResults = filteredResults.filter((musician) => {
      const {
        instrument, styles, city, role,
      } = musician;
      if (role === 'place' || role[0] === 'place') {
        if (cityName.length !== 0) {
          let place;
          cityName.map((cityPlace) => {
            if (cityPlace === city) {
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

  let mapped = [];

  if (filteredResults.length !== 0) {
    mapped = filteredResults.map((item) => (
      <GlobalCardProfils
        key={item.id}
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

  // Slider setting
  const settings3 = {
    dots: true,
    infinite: filteredResults.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    }],
  };

  return (
    <FullHeight canExceed>
      <div>
        <Container maxWidth="lg" className={classes.form}>
          <h2 className={classes.title}>Quelle est votre recherche ?</h2>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
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
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={4}
          >
            <Grid>
              <CitiesField
                value={cityName}
              />
            </Grid>
            <Grid>
              <InstrumentsField
                searchResultAll={searchResultAll}
                bands={bands}
                musicians={musicians}
                instruments={instruments}
                value={instrumentName}
              />
            </Grid>
            <Grid>
              <StylesField
                value={styleName}
              />
            </Grid>
          </Grid>
        </Container>
        <div className="profilsCards">
          <h2 className="profilsCards__title">{filteredResults.length} R??sultats</h2>
          <Container maxWidth="lg" className={classes.results}>
            {mapped ? (
              <Slider {...settings3}>
                {mapped}
              </Slider>
            ) : <div />}
          </Container>
        </div>
      </div>
    </FullHeight>
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
