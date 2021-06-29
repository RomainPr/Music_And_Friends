import { connect } from 'react-redux';
import MyAds from 'src/components/MyAds';

const mapStateToProps = (state) => {
console.log(state)
  return {
  // announces: state.ad,
  // name:,
  // role: ,
  // instruments:,
  // styles:,
  // title:,
  // description:,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAds);
