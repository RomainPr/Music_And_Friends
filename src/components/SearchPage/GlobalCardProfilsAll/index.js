import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

import Slider from 'react-slick';

function GlobalCardProfilsAll({
  searchResultAll, isBandChecked, isMusicianChecked, isPlaceChecked,
}) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: searchResultAll.length > 4,
  };

  return (
    <Slider {...settings}>
      {searchResultAll.map((item) => (
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
      ))}
    </Slider>
  );
}

export default GlobalCardProfilsAll;
