import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MusicianProfilEdition from 'src/components/MusicianProfilEdition';

import { findMusicianProfil, findBand, findPlace } from 'src/selectors/musician';
import { closeModal, openModalVideo } from 'src/actions/modalSignIn';

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const musician = JSON.parse(localStorage.getItem('musicians'));
  console.log(musician)
  return {
    musicianProfil: findMusicianProfil(JSON.parse(localStorage.getItem('musicians')), ownProps.match.params.id),
    role: ownProps.match.params.role,
    openVideos: state.modalSignIn.openVideos,
    openInstruments: state.modalSignIn.openInstruments,
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(MusicianProfilEdition);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
