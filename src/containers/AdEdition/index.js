import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AdEdition from 'src/components/AdEdition';

import { changeInputValue } from 'src/actions/changeInput';
import { submitEditedAd } from 'src/actions/user';
import { findAnnounce } from 'src/selectors/announces';

// connecter le composant en lecture du state
function mapStateToProps(state, ownProps) {
  return {
    announce: findAnnounce(state.myAds.announces, ownProps.match.params.id),
  }
};

// permettre au composant connecter de modifier le state
const mapDispatchToProps = (dispatch) => ({
  onChangeValue: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },

  handleCreateAd: () => {
    dispatch(submitEditedAd());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(AdEdition);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
