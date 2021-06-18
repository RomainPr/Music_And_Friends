import { connect } from 'react-redux';

import { openModal } from 'src/actions/modalSignIn';

import Nav from 'src/components/Nav';

const mapStateToProps = () => ({
  isAuthenticated: localStorage.getItem('token'),
});

const mapDispatchToProps = (dispatch) => ({
  openModalSignIn: () => {
    dispatch(openModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
