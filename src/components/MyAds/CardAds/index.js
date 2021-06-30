import React from 'react';
import PropTypes from 'prop-types';


//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import StarIcon from '@material-ui/icons/Star';
// import Carousel from 'react-material-ui-carousel';

//crud ad
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import BorderColorIcon from '@material-ui/icons/BorderColor';


import '../styles.scss';


const CardAds = ({

  userSelected,
  instrument,
  style,
  title,
  description
}) => (


  <div className="announcesCards">

    <Container maxWidth="lg">
      {/* <h2 className="announcesCards__title">Si groupe</h2> */}
      <Grid container>

        <Grid item xs={4} md={12}>
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
              {/* <IconButton
                id="card__favorite"
              >
                <StarIcon />
              </IconButton> */}
              <div id="card__bandName">
                {/* <h2 className="bandName">{name}Nom du groupe</h2> */}
              </div>
            </div>
            <CardContent id="card__content">
              <ul className="search">
                <li>Recherche : <span>{userSelected}</span></li>
                <li>Instrument : <span>{instrument}</span></li>
                <li>Style : <span>{style}</span></li>
              </ul>
              <h3 className="title">{title}</h3>
              <p className="description">{description}.</p>
            </CardContent>
            <CardActions id="card__footer">


              {/* CRUD Announces */}
              {/* add DELETE on middleware api */}
              <IconButton>
                <DeleteForeverOutlinedIcon />
              </IconButton>

              {/* par la suite, req api GET-> Voir avec David si route car non répertoriée dans liste des routes */}
              <IconButton>
                <VisibilityIcon
                // component={Link}
                // to={`/profil/role/:id/myads/:id`}
                />
              </IconButton>

              {/* par la suite, req api UPDATE -> Voir avec David si route car non répertoriée dans liste des routes */}
              <IconButton>
                <BorderColorIcon
                // component={Link}
                // to= {`/profil/role/:id/myads/:id/edit`}
                />
              </IconButton>

            </CardActions>
          </Card>

        </Grid>
      </Grid>
    </Container>

  </div>

);

export default CardAds;