import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BandProfil from 'src/components/Profils/BandProfil/band';

import { findBand } from 'src/selectors/musician';

function mapStateToProps(state, ownProps) {
  return {
    band: findBand(JSON.parse(localStorage.getItem('bands')), ownProps.match.params.name),
    bands: state.musicians.bands,
    instruments: state.musicians.instruments,
  };
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(BandProfil);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
