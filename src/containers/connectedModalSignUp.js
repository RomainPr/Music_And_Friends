import { connect } from 'react-redux';

import { closeModal } from 'src/actions/modalSignIn';

import ModalSignUp from 'src/components/ModalSignUp';

const mapStateToProps = (state) => ({
  openSignUp: state.modalSignIn.openSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignUp);
