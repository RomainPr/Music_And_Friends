import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Nav = ({ isLogged }) => (
  <div className="navbar">
    {!isLogged
        && (
        <div className="navbar__right">
          <Button
            className="navbar__right__buttons"
            color="primary"
            startIcon={<AccountCircleIcon />}
          >Se connecter
          </Button>
          <Button
            className="navbar__right__buttons"
            variant="contained"
            color="secondary"
          >
            Inscription
          </Button>
        </div>
        )}
  </div>
);

Nav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Nav;
