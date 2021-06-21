import { connect } from 'react-redux';

import { closeModal } from 'src/actions/modalSignIn';

import ModalSignIn from 'src/components/ModalSignIn';

const mapStateToProps = (state) => ({
  open: state.modalSignIn.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignIn);
