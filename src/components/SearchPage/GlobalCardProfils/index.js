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

function GlobalCardProfils({
  name,
  city,
  description,
  instrument,
  styles,
  roleMusicien,
  rolePlace,
}) {
  return (
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
        <h2 className="bandName">{name}</h2>
        <h4 className="localization">{city}</h4>
        {description && (
        <p className="description">{description}</p>
        )}
        <Grid item xs={6}>
          <div className="attributes">
            {instrument && (
            <>
              {instrument.map((instru) => (
                <p key={instru} className="boxAttributes">{instru}</p>
              ))}
            </>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="attributes">
            {styles && (
            <>
              {styles.slice(0, 3).map((style) => (
                <p key={style} className="boxAttributes">{style}</p>
              ))}
            </>
            )}
          </div>
        </Grid>
      </CardContent>
      <CardActions id="card__footer">
        {roleMusicien === 'musicien' && (
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to={`/musicians/${name}`}
        >
          Voir le profil
        </Button>
        )}
        {roleMusicien === 'groupes' && (
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to={`/bands/${name}`}
        >
          Voir le profil
        </Button>
        )}
        {rolePlace === 'place' && (
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to={`/places/${name}`}
        >
          Voir le profil
        </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default GlobalCardProfils;
