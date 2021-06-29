import { connect } from 'react-redux';

import { changeEmailInput, changePasswordInput, submitLoginPlace } from 'src/actions/user';

import LoginFormPlace from 'src/components/ModalSignIn/LoginFormPlace';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: localStorage.getItem('token'),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (event) => {
    dispatch(changeEmailInput(event.target.value));
  },
  onChangePassword: (event) => {
    dispatch(changePasswordInput(event.target.value));
  },
  handleLogin: () => {
    dispatch(submitLoginPlace());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormPlace);
