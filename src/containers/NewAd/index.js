import { connect } from 'react-redux';
import NewAd from 'src/components/NewAd';

import { changeInputValue } from 'src/actions/changeInput';
import { submitNewAd } from 'src/actions/user';

const mapStateToProps = (state) => ({
  title: state.newAd.title,
  content: state.newAd.content,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeValue: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },

  handleCreateAd: () => {
    dispatch(submitNewAd());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAd);
