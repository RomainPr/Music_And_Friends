import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MusicianProfilEdition from 'src/components/MusicianProfilEdition';

import { findMusicianProfil } from 'src/selectors/musician';
import {
  closeModal,
  openVideos,
  openInstruments,
  openSounds,
  onChangeInstrument,
  onPostInstrument,
} from 'src/actions/modalSignIn';

function mapStateToProps(state, ownProps) {
  return {
    musicianProfil: findMusicianProfil(JSON.parse(localStorage.getItem('musicians')), ownProps.match.params.id),
    role: ownProps.match.params.role,
    openVideos: state.modalSignIn.openVideos,
    openSounds: state.modalSignIn.openSounds,
    openInstruments: state.modalSignIn.openInstruments,
    instrumentValue: state.modalSignIn.instrument,
  };
}

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
  handleOpenVideos: () => {
    dispatch(openVideos());
  },
  handleOpenSounds: () => {
    dispatch(openSounds());
  },
  handleOpenInstruments: () => {
    dispatch(openInstruments());
  },
  handleOnChangeInstrument: (event) => {
    dispatch(onChangeInstrument(event.target.value));
  },
  postInstrument: () => {
    dispatch(onPostInstrument());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(MusicianProfilEdition);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
