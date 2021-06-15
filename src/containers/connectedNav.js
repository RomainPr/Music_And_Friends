import { connect } from 'react-redux';

import { openModal } from 'src/actions/modalSignIn';

import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  openModalSignIn: () => {
    dispatch(openModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
