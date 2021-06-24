import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BandProfil from 'src/components/Profils/BandProfil/band';

import { findBand } from 'src/selectors/musician';

function mapStateToProps(state, ownProps) {
  return {
    band: findBand(state.musicians.bands, ownProps.match.params.name),
  };
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(BandProfil);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
