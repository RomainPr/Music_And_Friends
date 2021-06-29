import { connect } from 'react-redux';
import MyAds from 'src/components/MyAds';

const mapStateToProps = (state) => {
console.log(state)
  return {
  announces: state.ad,
  userSelected:state.ad.category,
  instrument:state.ad.instrument,
  style:state.ad.style,
  title:state.ad.title,
  description:state.ad.description,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAds);
