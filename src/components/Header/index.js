import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => (
  <div className="header">
    <img src="" alt="Logo M&F" />
    <Button
      color="primary"
      startIcon={<AccountCircleIcon />}
    >Se connecter
    </Button>
  </div>
);

export default Header;
