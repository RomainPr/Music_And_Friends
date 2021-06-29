import React from 'react';

import background from 'src/assets/HeaderBg.jpg';
import './styles.scss';

const HeaderPage = () => (
  <div className="header" style={{ backgroundImage: `url(${background})`, height: '400px' }} />
);

export default HeaderPage;
