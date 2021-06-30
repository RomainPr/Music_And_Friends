import { connect } from 'react-redux';

import { closeModal, changeRole } from 'src/actions/modalSignIn';

import ModalSignIn from 'src/components/ModalSignIn';

const mapStateToProps = (state) => ({
  openSignIn: state.modalSignIn.openSignIn,
  role: state.modalSignIn.role,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
  handleChangeRole: (event) => {
    dispatch(changeRole(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignIn);
