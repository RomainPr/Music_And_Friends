import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import CitiesField from 'src/containers/CitiesField';

import {
  FormControl,
  Grid,
  TextField,
  Avatar,
  Container,
  Button,
} from '@material-ui/core';

import FullHeight from 'react-full-height';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
  },
  input: {
    display: 'block',
  },
  width: {
    width: '80%',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  save: {
    margin: '40px 0',
  },
}));

const SignPlace = ({
  firstname,
  lastname,
  phone,
  placeName,
  adress,
  postalCode,
  description,
  city,
  email,
  password,
  onChangeValue,
  handleSignUp,

}) => {
  const classes = useStyles();

  const handleOnChange = (event) => {
    onChangeValue(event.target.value, event.target.name);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  return (
    <FullHeight canExceed>
      <Container maxWidth="lg">
        <h1 className="title">Vos informations de Salle de concert</h1>

        <form
          onSubmit={handleOnSubmit}
        >
          <FormControl id="mainForm" className={classes.form} noValidate autoComplete="off">
            <Grid container>
              <Grid item md={4} xs={12}>
                <Grid container direction="column" alignItems="center" justify="center" spacing={5} id="inputIdPictureIntruments">
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-first-name"
                      label="Votre prénom"
                      name="firstname"
                      onChange={handleOnChange}
                      value={firstname}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-last-name"
                      label="Votre nom"
                      name="lastname"
                      onChange={handleOnChange}
                      value={lastname}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-phone"
                      label="Votre téléphone"
                      name="phone"
                      type="tel"
                      onChange={handleOnChange}
                      value={phone}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-city"
                      label="Votre ville"
                      name="city"
                      onChange={handleOnChange}
                      value={city}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={4} xs={12}>
                <Grid container direction="column" alignItems="center" justify="center" id="inputIdPictureIntruments">
                  <Grid item>
                    <Avatar id="profil-picture" alt="photo de profil random" src="https://cdn.pixabay.com/photo/2019/11/02/01/15/headphones-4595492_960_720.jpg" />
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
                </Grid>
              </Grid>

              {/* <Grid item xs={4}>
              <Grid container direction="column" justify="space-between" alignItems="center" spacing={4}> */}
              <Grid item md={4} xs={12}>
                <Grid container direction="column" alignItems="center" justify="center" spacing={5} id="inputIdPictureIntruments">
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-placeName"
                      label="Votre nom de lieu"
                      type="text"
                      name="placeName"
                      onChange={handleOnChange}
                      value={placeName}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-adress"
                      label="Votre adresse"
                      type="text"
                      name="adress"
                      onChange={handleOnChange}
                      value={adress}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-postalCode"
                      label="Votre code postale"
                      type="text"
                      name="postalCode"
                      onChange={handleOnChange}
                      value={postalCode}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
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

              <Grid container>
                <Grid item xs={12} className={classes.flex}>
                  <Grid item md={4} xs={12}>
                    <TextField
                      className={classes.width}
                      margin="normal"
                      id="email"
                      label="Email"
                      type="email"
                      name="email"
                      onChange={handleOnChange}
                      value={email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      className={classes.width}
                      margin="normal"
                      id="password"
                      label="Mot de passe"
                      type="password"
                      name="password"
                      onChange={handleOnChange}
                      value={password}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <TextField
                      className={classes.width}
                      margin="normal"
                      id="confirmpassword"
                      label="Confiration du mot de passe"
                      type="password"
                      onChange={handleOnChange}
                      name="confirmpassword"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justify="center">
              <Button
                className={classes.save}
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Grid>
          </FormControl>
        </form>
      </Container>
    </FullHeight>
  );
};

SignPlace.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  placeName: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default SignPlace;
