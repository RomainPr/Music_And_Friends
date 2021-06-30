import { connect } from 'react-redux';
import Home from 'src/components/HomepageContent';

//get One ad HomePageContent announce link
import { getOneAnnounce } from 'src/actions/announces';

const mapStateToProps = (state) => ({
  musicians: state.musicians.musicians,
  bands: state.musicians.bands,
  places: state.musicians.places,
  announces: state.myAds.announces,
  loading: state.musicians.loading,
});

const mapDispatchToProps = (dispatch) => ({
 
  // handleGetOneAnnounce: () => {
  //   dispatch(getOneAnnounce());
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
