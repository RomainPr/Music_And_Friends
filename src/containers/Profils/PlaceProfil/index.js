import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PlaceProfil from 'src/components/Profils/PlaceProfil/place';

import { findPlace } from 'src/selectors/musician';

function mapStateToProps(state, ownProps) {
  return {
    place: findPlace(state.musicians.places, ownProps.match.params.name),
    places: state.musicians.places,
  };
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(PlaceProfil);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
