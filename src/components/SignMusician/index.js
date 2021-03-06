import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import StylesField from 'src/containers/StylesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import CitiesField from 'src/containers/CitiesField';
import { makeStyles } from '@material-ui/core/styles';

import FullHeight from 'react-full-height';

import {
  FormControl,
  Grid,
  TextField,
  Avatar,
  Button,
  Container,
} from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

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
    backgroundColor: '#E87121',
    '&:hover': {
      backgroundColor: '#FDA13D',
    },
  },
}));

const SignMusician = ({
  firstname,
  lastname,
  phone,
  pseudo,
  description,
  email,
  password,
  onChangeValue,
  handleSignUp,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnChange = (event) => {
    onChangeValue(event.target.value, event.target.name);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSignUp();
    history.push('/');
  };

  return (
    <FullHeight canExceed>
      <Container maxWidth="lg">
        <h1 className="title">Vos informations de profil musicien</h1>
        <form onSubmit={handleOnSubmit}>
          <FormControl required id="mainForm" className={classes.form} autoComplete="off">
            <Grid container>
              <Grid item md={4} xs={12}>
                <Grid container direction="column" alignItems="center" justify="center" spacing={5} id="inputIdPictureIntruments">
                  <Grid item>
                    <TextField
                      className={classes.input}
                      id="input-first-name"
                      required
                      label="Votre pr??nom"
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
                      label="Votre t??l??phone"
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
              </Grid>

              <Grid item md={4} xs={12}>
                <Grid container direction="column" alignItems="center" justify="center" id="inputIdPictureIntruments">
                  <Grid item>
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
                </Grid>
              </Grid>

              <Grid item md={4} xs={12}>
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
                  <Grid item md={4} xs={12}>
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
                  <Grid item md={4} xs={12}>
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
                  <Grid item md={4} xs={12}>
                    <TextField
                      className={classes.width}
                      margin="normal"
                      id="confirmpassword"
                      required
                      label="Confirmation du mot de passe"
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
                Enregistrer
              </Button>
            </Grid>
          </FormControl>
        </form>
      </Container>
    </FullHeight>
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
