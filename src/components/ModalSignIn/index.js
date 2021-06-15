import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import LoginForm from 'src/containers/connectedLoginForm';

import './styles.scss';

const ModalSignIn = ({ open, handleClose }) => (
  <div className="modalSign">
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      className="modalSignIn"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="modal__content">
          <LoginForm />
        </div>
      </Fade>
    </Modal>
  </div>
);

ModalSignIn.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalSignIn;
