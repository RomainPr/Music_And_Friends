import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import musician from 'src/assets/musician.png';
import place from 'src/assets/stage.png';

import './styles.scss';

const ModalSignUp = ({ openSignUp, handleClose }) => (
  <div className="modalSignUp">
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openSignUp}
      onClose={handleClose}
      className="modalSignIn"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openSignUp}>
        <div className="modal__content">
          <h2>Vous êtes :</h2>
          <div className="modal__content__choice">
            <div className="modal__content__choice__musician">
              <h3>un musicien</h3>
              <img src={musician} alt="" />
              <Button
                variant="contained"
                color="primary"
              >
                Inscription
              </Button>
            </div>
            <div className="modal__content__choice__place">
              <h3>un organisateur</h3>
              <img src={place} alt="" />
              <Button
                variant="contained"
                color="primary"
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  </div>
);

ModalSignUp.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalSignUp;
