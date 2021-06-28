import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import containers
import CitiesField from 'src/containers/CitiesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import StylesField from 'src/containers/StylesField';

import CardMusician from 'src/components/HomepageContent/HomepageLastProfils/cardMusician';
import CardBand from 'src/components/HomepageContent/HomepageLastProfils/cardBand';
import CardPlaces from 'src/components/HomepageContent/HomepageLastProfils/cardPlaces';

// M UI
import Typography from '@material-ui/core/Typography';
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
import { makeStyles } from '@material-ui/core/styles';

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

// Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  checkbox: {
    position: 'absolute',
    left: '-100vw',
    '&.Mui-checked': {
      '&, & + .MuiTypography-body1 p': {
        backgroundColor: '#53ce00',
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

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: searchResult.length > 3,
  };

  const searchResultAll = [...musicians, ...bands, ...places];
  console.log(searchResultAll);

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
          <FormGroup row justify="center">
            <FormControlLabel
              control={(
                <Checkbox
                  className={classes.checkbox}
                  checked={isBandChecked}
                  onChange={onChangeBoxBandValue}
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
                  onChange={onChangeBoxMusicianValue}
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
                  onChange={onChangeBoxPlaceValue}
                  name="isPlaceChecked"
                />
                )}
              label={<Typography className={classes.formControlLabel}>Salles</Typography>}
            />
          </FormGroup>
        </Grid>
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
      </Container>
      <div>
        <div className="profilsCards">
          <Container maxWidth="lg">
            <h2 className="profilsCards__title">{searchResult.length} Résultats</h2>
            <Slider {...settings}>
              {(isBandChecked && isMusicianChecked && isPlaceChecked)
              && (
                searchResultAll.map((item) => (
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
                      {isMusicianChecked && !isBandChecked && !isPlaceChecked && (
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          component={Link}
                          to={`/musicians/${item.name}`}
                        >
                          Voir le profil
                        </Button>
                      )}

                      {isBandChecked && (
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          component={Link}
                          to={`/bands/${item.name}`}
                        >
                          Voir le profil
                        </Button>
                      )}
                      {isPlaceChecked && (
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          component={Link}
                          to={`/places/${item.name}`}
                        >
                          Voir le profil
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                ))
              )}
              {isBandChecked && (
                searchResult.map((item) => (
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
                      {isMusicianChecked && !isBandChecked && !isPlaceChecked && (
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        component={Link}
                        to={`/musicians/${item.name}`}
                      >
                        Voir le profil
                      </Button>
                      )}

                      {isBandChecked && (
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        component={Link}
                        to={`/bands/${item.name}`}
                      >
                        Voir le profil
                      </Button>
                      )}
                      {isPlaceChecked && (
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        component={Link}
                        to={`/places/${item.name}`}
                      >
                        Voir le profil
                      </Button>
                      )}
                    </CardActions>
                  </Card>
                ))
              )}
            </Slider>
          </Container>
        </div>
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
