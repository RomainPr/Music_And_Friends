import React from 'react';
import PropTypes from 'prop-types';

import FullHeight from 'react-full-height';

import { Link } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import './styles.scss';

const useStyles = makeStyles(() => ({
  button: {
    margin: '40px 0',
    backgroundColor: '#E87121',
    '&:hover': {
      backgroundColor: '#FDA13D',
    },
  },
}));

function Ad({
  announce,
}) {
  const classes = useStyles();
  return (
    <FullHeight canExceed>
      <div>
        <Container maxWidth="lg">
          {/* <h2 className="announcesCards__title">Si groupe</h2> */}
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
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
                  <div id="card__ad">
                    {/* <h2 className="ad">{announce.date}Date de l'annonce</h2> */}
                  </div>
                </div>

                <CardContent id="card__content" key={announce.id}>
                  <ul className="search">
                    <li>Recherche : <p>{announce.category}</p></li>
                    <li>Instrument :
                      {announce.instrument.map((instru) => (
                      <p>{instru}</p>
                    ))}
                    </li>
                    <li>Style :
                      {announce.style.map((ad) => (
                      <p>{ad}</p>
                    ))}
                    </li>
                  </ul>
                  <h3 className="title">{announce.title}</h3>
                  <p id="description">{announce.description}.</p>
                </CardContent>
                <div id="cardAd__centeredButton">
                  <Button
                    className={classes.button}
                    color="primary"
                    id="contact_author_ad"
                    variant="contained"
                    size="large"
                  >
                    Contacter l'annonceur
                  </Button>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </FullHeight>
  );
}

Ad.propTypes = {
  // announce:PropTypes.array.isRequired,
};

export default Ad;
