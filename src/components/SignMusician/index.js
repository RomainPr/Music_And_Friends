import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import StylesField from 'src/containers/StylesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import CitiesField from 'src/containers/CitiesField';

import {
  FormControl,
  Grid,
  TextField,
  Avatar,
  Button,
} from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

// destructuration data pour recup tableau intruments et styles

const SignMusician = ({
  firstname,
  lastname,
  phone,
  pseudo,
  description,
  email,
  password,
  onChangeValue,
}) => {
  const handleOnChange = (event) => {
    console.log(`event.target.name = `, event.target.name);

    onChangeValue(event.target.value, event.target.name);
  };

  return (
    <Grid container direction="column">
      <h1 className="title">Vos informations de profil musicien</h1>

      <form>
        <FormControl id="mainForm" noValidate autoComplete="off">
          <Grid container direction="row" alignItems="center" id="inputIdPictureIntruments">
            <Grid item xs={4}>
              <TextField
                className="input"
                id="input-first-name"
                label="Votre prénom"
                name="firstname"
                onChange={handleOnChange}
                value={firstname}
              />
              <TextField
                className="input"
                id="input-last-name"
                label="Votre nom"
                name="lastname"
                onChange={handleOnChange}
                value={lastname}
              />
              <TextField
                className="input"
                id="input-phone"
                label="Votre téléphone"
                name="phone"
                type="tel"
                onChange={handleOnChange}
                value={phone}
              />
              <CitiesField />
            </Grid>

            <Grid item xs={4}>

              <Avatar id="profil-picture" alt="photo de profil random" src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg" />
              <div className="">
                <input
                  accept="image/*"
                  className=""
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
                </label>
              </div>
            </Grid>

            <Grid item xs={4}>
              <Grid container direction="column" justify="space-between" alignItems="center" spacing={4}>
                <TextField
                  id="input-pseudo"
                  label="Votre pseudo"
                  type="text"
                  name="pseudo"
                  onChange={handleOnChange}
                  value={pseudo}
                />

                <InstrumentsField />

                <StylesField />

              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              id="description"
              label="Votre Description"
              name="description"
              type="text"
              value={description}
              onChange={handleOnChange}
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Email"
              type="email"
              name="email"
              onChange={handleOnChange}
              value={email}
              variant="outlined"
            />
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Mot de passe"
              type="password"
              name="password"
              onChange={handleOnChange}
              value={password}
              variant="outlined"
            />
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Confiration du mot de passe"
              type="password"
              onChange={handleOnChange}
              name="confirmpassword"
              variant="outlined"
            />
          </Grid>

        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </Grid>
  );
};

SignMusician.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default SignMusician;
