import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import StylesField from 'src/containers/StylesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import CitiesField from 'src/containers/CitiesField';
import { makeStyles } from '@material-ui/core/styles';

import {
  FormControl,
  Grid,
  TextField,
  Avatar,
  Button,
} from '@material-ui/core';

import Container from '@material-ui/core/Container';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

// destructuration data pour recup tableau intruments et styles

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
    textAlign: 'center',
  },
  save: {
    margin: '40px 0',
  },
}));

const SignMusician = ({
  firstname,
  lastname,
  phone,
  pseudo,
  description,
  city,
  email,
  password,
  onChangeValue,
  handleSignUp,
}) => {
  const classes = useStyles();

  const handleOnChange = (event) => {
    console.log('event.target.name = ', event.target.name);

    onChangeValue(event.target.value, event.target.name);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  return (
    <Container maxWidth="lg">
      <h1 className="title">Vos informations de profil musicien</h1>
      <form onSubmit={handleOnSubmit}>
        <FormControl required id="mainForm" className={classes.form} autoComplete="off">
          <Grid container>
            <Grid item xs={4}>
<<<<<<< HEAD
              <Grid container direction="column" alignItems="center" justify="center" spacing={5} id="inputIdPictureIntruments">
                <Grid item>
                  <TextField
                    className={classes.input}
                    id="input-first-name"
                    required
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
                    required
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
                    required
                    type="tel"
                    onChange={handleOnChange}
                    value={phone}
                  />
                </Grid>
                <Grid item>
                  <CitiesField />
                </Grid>
              </Grid>
=======
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
              <TextField
                className="input"
                id="input-city"
                label="Votre ville"
                name="city"
                onChange={handleOnChange}
                value={city}
              />
>>>>>>> d491b592e6ff3844d38022f83c74299c629ad89e
            </Grid>

            <Grid item xs={4}>
              <Grid container direction="column" alignItems="center" justify="center" id="inputIdPictureIntruments">
                <Grid item>
                  <Avatar id="profil-picture" alt="photo de profil random" src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg" />
                  <div className="">
                    <input
                      accept="image/*"
                      className=""
                      required
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

            <Grid item xs={4}>
              <Grid container direction="column" alignItems="flex-start" justify="center" spacing={2}>
                <Grid item>
                  <TextField
                    id="input-pseudo"
                    required
                    label="Votre pseudo"
                    type="text"
                    name="pseudo"
                    onChange={handleOnChange}
                    value={pseudo}
                  />
                </Grid>
                <Grid item>
                  <InstrumentsField />
                </Grid>
                <Grid item>
                  <StylesField />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                required
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
                <Grid item xs={4}>
                  <TextField
                    className={classes.width}
                    margin="normal"
                    required
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    value={email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    className={classes.width}
                    margin="normal"
                    id="password"
                    required
                    label="Mot de passe"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    value={password}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    className={classes.width}
                    margin="normal"
                    id="confirmpassword"
                    required
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
  handleSignUp: PropTypes.func.isRequired,
};

export default SignMusician;
