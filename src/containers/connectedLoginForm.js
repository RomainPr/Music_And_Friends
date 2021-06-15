import { connect } from 'react-redux';

import { changeEmailInput, changePasswordInput, submitLogin } from 'src/actions/user';

import LoginForm from 'src/components/ModalSignIn/LoginForm';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (event) => {
    dispatch(changeEmailInput(event.target.value));
  },
  onChangePassword: (event) => {
    dispatch(changePasswordInput(event.target.value));
  },
  handleLogin: () => {
    dispatch(submitLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
