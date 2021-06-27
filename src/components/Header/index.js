import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import background from 'src/assets/HeaderBg.jpg';
import './styles.scss';

const useStyles = makeStyles(() => ({
  searchButton: {
    background: '#FDA13D',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className="header" style={{ backgroundImage: `url(${background})`, height: '500px' }}>
      <div className="header__middle">
        <h1>Trouvez votre prochain "Groupe/Musicien/Evènement"</h1>
        <div className="header__middle__search">
          <Button
            className={classes.searchButton}
            component={Link}
            to="/search"
            variant="contained"
            size="large"
            color="primary"
          >
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
