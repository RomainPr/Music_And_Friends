import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import background from 'src/assets/HeaderBg.jpg';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="header__top" style={{ backgroundImage: `url(${background})` }}>
      <img src="" alt="Logo M&F" />
      <div className="header__top__right">
        <Button
          className="header__buttons"
          color="primary"
          startIcon={<AccountCircleIcon />}
        >Se connecter
        </Button>
        <Button
          className="header__buttons"
          variant="contained"
          color="secondary"
        >
          Inscription
        </Button>
      </div>
    </div>
    <div className="header__middle">
      <h1>Trouvez votre prochain "Groupe/Musicien/Evènement"</h1>
      <div className="header__middle__search">
        <Button
          variant="contained"
          size="large"
          color="primary"
          Large
        >
          Rechercher
        </Button>
      </div>
    </div>
  </div>
);

export default Header;
