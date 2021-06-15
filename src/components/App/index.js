import React from 'react';

import Header from 'src/components/Header';
import SectionHomepage from 'src/components/HomepageContent/SectionHomepage';
import LastProfils from 'src/components/HomepageContent/HomepageLastProfils';
import LastAnnounces from 'src/components/HomepageContent/HomepageLastAnnounces';

import './styles.scss';

const App = () => (
  <div className="app">
    <Header />
    <SectionHomepage />
    <LastProfils />
    <LastAnnounces />
  </div>
);

export default App;
