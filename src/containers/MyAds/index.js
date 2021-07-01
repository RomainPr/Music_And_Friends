import { connect } from 'react-redux';
import MyAds from 'src/components/MyAds';

const mapStateToProps = (state) => ({
  announces: state.myAds.announces,

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAds);
