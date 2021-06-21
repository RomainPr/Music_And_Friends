import React from 'react';
import Button from '@material-ui/core/Button';

import Nav from 'src/containers/connectedNav';

import background from 'src/assets/HeaderBg.jpg';
import './styles.scss';

const Header = () => (
  <div className="header" style={{ backgroundImage: `url(${background})` }}>
    <div className="header__nav">
      <Nav />
    </div>
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
