import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './styles.scss';

const Header = () => (
  <div className="header">
    <img src="" alt="Logo M&F" />
    <div className="header__right">
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
);

export default Header;
