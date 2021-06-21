import { connect } from 'react-redux';
import Home from 'src/components/HomepageContent';

const mapStateToProps = (state) => ({
  musicians: state.musicians.musicians,
  bands: state.musicians.bands,
  places: state.musicians.places,
  loading: state.musicians.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
