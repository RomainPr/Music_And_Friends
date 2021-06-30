import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import './styles.scss';

const Ad = ({
  announce,
}) => (

  <div className="announcesCards">
    <Container maxWidth="lg">
      {/* <h2 className="announcesCards__title">Si groupe</h2> */}
       <Grid container>

        <Grid item xs={12}>
          <Card id="cardAd">
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
              <p className="description">{announce.description}.</p>
            </CardContent>
           
            <CardActions id="card__footer">

            </CardActions>
          </Card>

        </Grid>
      </Grid> 
     </Container>
    <Button
        id="contact_author_ad"
        variant="contained"
        size="large"
        // color="primary"
        // component={Link}
        // to={`/profil/contact`}
      >
        Contacter l'annonceur
    </Button>
  </div>

);

Ad.propTypes = {
  // announce:PropTypes.array.isRequired,

};

export default Ad;
