import { connect } from 'react-redux';
import Home from 'src/components/HomepageContent';

const mapStateToProps = (state) => ({
  musicians: state.musicians.list,
  loading: state.musicians.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
