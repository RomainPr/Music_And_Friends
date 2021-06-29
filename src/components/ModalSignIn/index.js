import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import LoginFormMusician from 'src/containers/connectedLoginFormMusician';
import LoginFormPlace from 'src/containers/connectedLoginFormPlace';

import './styles.scss';

function ModalSignIn({
  openSignIn, handleClose,
}) {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="modalSign">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSignIn}
        onClose={handleClose}
        className="modalSignIn"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSignIn}>
          <div className="modal--content">
            <h2 className="modal__content__title">Vous êtes :</h2>
            <FormControl component="fieldset">
              <RadioGroup aria-label="role" name="role" value={value} onChange={handleChange}>
                <FormControlLabel value="musicien" control={<Radio />} label="Un musicien" />
                <FormControlLabel value="organisateur" control={<Radio />} label="Un organisateur" />
              </RadioGroup>
              {value === 'musicien' && (
                <LoginFormMusician />
              )}
              {value === 'organisateur' && (
                <LoginFormPlace />
              )}
            </FormControl>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

ModalSignIn.propTypes = {
  openSignIn: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalSignIn;
