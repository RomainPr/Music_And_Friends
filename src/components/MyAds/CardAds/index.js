import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

// import StarIcon from '@material-ui/icons/Star';
// import Carousel from 'react-material-ui-carousel';

// crud ad
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import BorderColorIcon from '@material-ui/icons/BorderColor';

import '../styles.scss';

const CardAds = ({

  userSelected,
  instrument,
  styles,
  title,
  description,
  idAnnounce,
}) => (

  <div>
    <Container maxWidth="lg">
      {/* <h2 className="announcesCards__title">Si groupe</h2> */}
      <Grid container>
        <Grid item xs={4} md={12}>
          <Card id="card">
            <div id="card__insideAd">
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
              </div>
              <CardContent id="card__content">
                <ul className="search">
                  <li>Recherche : <span>{userSelected}</span></li>
                  <li>Instrument :
                    {instrument.map((item) => (
                      <p>{item}</p>
                    ))}
                  </li>
                  <li>Style :
                    {styles.map((style) => (
                      <p>{style}</p>
                    ))} 
                  </li>
                </ul>
                <h3 className="adTitle">{title}</h3>
                <p className="description">{description}.</p>
              </CardContent>
              <CardActions id="card__footer">

                {/* CRUD Announces */}
                {/* add DELETE on middleware api */}
                <IconButton>
                  <DeleteForeverOutlinedIcon />
                </IconButton>

                {/* par la suite, req api UPDATE -> Voir avec David si route car non répertoriée dans liste des routes */}
                <IconButton
                  component={Link}
                  to={`/profil/myads/${idAnnounce}/edit`}
                >
                  <BorderColorIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </div>

);

CardAds.propTypes = {
  userSelected: PropTypes.string.isRequired,
  instrument: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  idAnnounce: PropTypes.number.isRequired,
};

export default CardAds;
