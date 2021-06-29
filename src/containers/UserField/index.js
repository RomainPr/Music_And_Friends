import { connect } from 'react-redux';
import UserField from 'src/components/UserField';
import { changeUserValue } from 'src/actions/changeInput';

const mapStateToProps = (state) => ({
  userSelected: state.newAd.userSelected,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeUserValue: (event) => {
    dispatch(changeUserValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserField);
