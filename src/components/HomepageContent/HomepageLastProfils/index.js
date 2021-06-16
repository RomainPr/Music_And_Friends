import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import './styles.scss';

function LastProfils({ musicians }) {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);

  const handleChangePage = (value) => {
    setPage(value);
  };

  const loopNext = () => {
    setPage((currPage) => {
      if (currPage + 1 > Math.ceil(musicians.length / itemsPerPage)) {
        return 1;
      }
      return currPage + 1;
    });
  };

  const loopPrev = () => {
    setPage((currPage) => {
      if (currPage === 1) {
        return Math.ceil(musicians.length / itemsPerPage);
      }
      return currPage - 1;
    });
  };

  return (
    <div className="profilsCards">
      <Container maxWidth="lg">
        <h2 className="profilsCards__title">Les derniers profils</h2>
        <Carousel
          autoPlay={false}
          onClick={handleChangePage}
          next={loopNext}
          prev={loopPrev}
          NextIcon={<ArrowForwardIosRoundedIcon fontSize="large" />}
          PrevIcon={<ArrowBackIosRoundedIcon fontSize="large" />}
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              color: '#447CF0',
            },
          }}
          indicators
          swipe
        >

          <Grid container>
            {musicians?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((musician) => (
              <Grid item xs={4} md={4}>
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
                    <h2 className="bandName">{musician.pseudo}</h2>
                    <h4 className="localization">{musician.city}</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
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
            ))}
          </Grid>
        </Carousel>
      </Container>
    </div>
  );
}

LastProfils.propTypes = {
  musicians: PropTypes.array.isRequired,
};

export default LastProfils;
