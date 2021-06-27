import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MusicianProfil from 'src/components/Profils/MusicianProfil/musician';

import { findMusician } from 'src/selectors/musician';

function mapStateToProps(state, ownProps) {
  return {
    musician: findMusician(JSON.parse(localStorage.getItem('musicians')), ownProps.match.params.name),
    musicians: state.musicians.musicians,
    instruments: state.musicians.instruments,
  };
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(MusicianProfil);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
