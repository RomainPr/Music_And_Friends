import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import background from 'src/assets/HeaderBg.jpg';
import './styles.scss';

const Header = () => (
  <div className="header">
    <div className="header__top" style={{ backgroundImage: `url(${background})` }} />
    <div className="header__middle">
      <h1>Trouvez votre prochain "Groupe/Musicien/Evènement"</h1>
      <div className="header__middle__search">
        <Button
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

export default Header;
