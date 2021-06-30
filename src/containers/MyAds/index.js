import { connect } from 'react-redux';
import MyAds from 'src/components/MyAds';

const mapStateToProps = (state) => {
  console.log('state myAds :', state);
  console.log('state myAds.announces:', state.myAds.announces);
  return {
    announces: state.myAds.announces,
    // userSelected:state.myAds.announces.category,
    // instrument:state.myAds.announces.instrument,
    // style:state.myAds.announces.style,
    // title:state.myAds.announces.title,
    // description:state.myAds.announces.description,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyAds);
