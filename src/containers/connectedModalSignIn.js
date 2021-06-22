import { connect } from 'react-redux';

import { closeModal } from 'src/actions/modalSignIn';

import ModalSignIn from 'src/components/ModalSignIn';

const mapStateToProps = (state) => ({
  openSignIn: state.modalSignIn.openSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignIn);