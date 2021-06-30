import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextTransition, { presets } from 'react-text-transition';

import background from 'src/assets/HeaderBg.jpg';
import './styles.scss';

const useStyles = makeStyles(() => ({
  searchButton: {
    background: '#E87121',
    '&:hover': {
      backgroundColor: '#FDA13D',
    },
  },
}));

const texts = [
  'Groupe',
  'Musicien',
  'Evènement',
];

function Header() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1),
      3000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="header">
      <div className="header__middle">
        <h1>Trouvez votre prochain 
          <TextTransition
            className="header__middle__centeredAnimation"
            inline
            text={texts[index % texts.length]}
            springConfig={presets.default}
          />
        </h1>
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
