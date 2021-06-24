import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MusicianProfil from 'src/components/Profils/MusicianProfil';

import { findMusician } from 'src/selectors/musician';

function mapStateToProps(state, ownProps) {
  return {
    musician: findMusician(state.musicians.musicians, ownProps.match.params.name),
  };
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(MusicianProfil);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
