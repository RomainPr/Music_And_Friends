import { connect } from 'react-redux';
import Bands from 'src/components/Bands';

const mapStateToProps = (state) => ({
  bands: state.musicians.bands,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bands);
