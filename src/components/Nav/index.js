import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import ModalSignIn from 'src/containers/connectedModalSignIn';

import './styles.scss';

const Nav = ({ isLogged, openModalSignIn }) => (
  <div className="navbar">
    {!isLogged
        && (
        <div className="navbar__content">
          <div className="navbar__content__left">
            <img src="" alt="Logo M&F" />
          </div>
          <div className="navbar__content__right">
            <Button
              className="navbar__content__right__buttons"
              color="primary"
              startIcon={<AccountCircleIcon />}
              onClick={openModalSignIn}
            >Se connecter
            </Button>
            <Button
              className="navbar__content__right__buttons"
              variant="contained"
              color="secondary"
            >
              Inscription
            </Button>
          </div>
        </div>
        )}
    <ModalSignIn />
  </div>
);

Nav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  openModalSignIn: PropTypes.func.isRequired,
};

export default Nav;
