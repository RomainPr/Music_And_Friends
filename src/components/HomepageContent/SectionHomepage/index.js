/* eslint-disable max-len */
import React from 'react';
import Grid from '@material-ui/core/Grid';

import TopPic from 'src/assets/section_top_pic.png';
import BottomPic from 'src/assets/section_bottom_pic.png';
import './styles.scss';

const SectionHomepage = () => (
  <div className="section">
    <div className="section__Top">
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <div className="section__top__left">
            <h2 className="section__top__left__title">trouvez, créez, partagez</h2>
            <p className="section__top__left__content">Music and Friends vous aide à trouver les profils qui correspondent à vos attentes</p>
            <p className="section__top__left__content">Créez votre groupe, suivez les profils qui vous intéresent, rentrez en contact avec les membres et commenez à créer la musique qui VOUS ressemble !</p>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div className="section__top__right">
            <img src={TopPic} alt="SectiontopPic" />
          </div>
        </Grid>
      </Grid>
    </div>
    <div className="section__Bottom">
      <Grid container spacing={0}>
        <Grid item xs={12} md={5} className="section__Bottom__orderOnMobile">
          <div className="section__Bottom__right">
            <img src={BottomPic} alt="SectionBottomPic" />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="section__Bottom__left">
            <h2 className="section__Bottom__left__title">LE LEADER DE LA MISE EN RELATION MUSICALE</h2>
            <p className="section__Bottom__left__content">Que vous soyez musicien(s), groupe(s) ou organisateur(s) d'évènements, vous trouverez sûrement le profil qui vous intéresse.</p>
            <p className="section__Bottom__left__content">Pour travailler avec des professionnels de l'événementiel, il faut faire preuve d’une qualité de services irréprochable. C'est pourquoi des milliers de particuliers et d'entreprises nous font confiance et nous recommandent.</p>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default SectionHomepage;
