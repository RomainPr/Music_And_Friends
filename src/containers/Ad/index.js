import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Ad from 'src/components/Ad';

import { findAnnounce } from 'src/selectors/announce';

const mapStateToProps = (state, ownProps) => ({
  announce: findAnnounce(state.myAds.announces, ownProps.match.params.title),

});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Ad);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
