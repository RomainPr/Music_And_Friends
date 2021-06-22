import { connect } from 'react-redux';

import { openModal, openModalSignUp } from 'src/actions/modalSignIn';
import { setAnchorEl, handleMenuClose, openToggler } from 'src/actions/nav';

import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  anchorEl: state.nav.anchorEl,
  open: state.nav.open,
  isMenuOpen: state.nav.isMenuOpen,
  isAuthenticated: localStorage.getItem('token'),
});

const mapDispatchToProps = (dispatch) => ({
  openModalSignIn: () => {
    dispatch(openModal());
  },
  openModalSignUp: () => {
    dispatch(openModalSignUp());
  },
  handleProfileMenuOpen: (event) => {
    dispatch(setAnchorEl(event.currentTarget));
  },
  handleMenuClose: () => {
    dispatch(handleMenuClose());
  },
  toggleDrawer: () => {
    dispatch(openToggler());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
