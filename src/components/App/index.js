import React from 'react';

import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import SectionHomepage from 'src/components/SectionHomepage';
import LastProfils from 'src/components/HomepageLastProfils';
import LastAnnounces from 'src/components/HomepageLastAnnounces';

import './styles.scss';

const App = () => (
  <div className="app">
    <Nav />
    <Header />
    <SectionHomepage />
    <LastProfils />
    <LastAnnounces />
  </div>
);

export default App;
