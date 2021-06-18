import { connect } from 'react-redux';
import Musicians from 'src/components/Musicians';

const mapStateToProps = (state) => ({
  musicians: state.musicians.musicians,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Musicians);
