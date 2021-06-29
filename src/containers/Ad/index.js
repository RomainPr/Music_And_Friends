import { connect } from 'react-redux';
import Ad from 'src/components/Ad';

const mapStateToProps = (state) => {
console.log('state Ad :',state)
console.log('state Ad.announces:',state.announces)
  return {
  announces: state.announces,
  // userSelected:state.myAds.announces.category,
  // instrument:state.myAds.announces.instrument,
  // style:state.myAds.announces.style,
  // title:state.myAds.announces.title,
  // description:state.myAds.announces.description,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Ad);
