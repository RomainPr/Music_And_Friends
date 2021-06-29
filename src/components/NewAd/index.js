import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import StylesField from 'src/containers/StylesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import UserField from 'src/containers/UserField';
import { makeStyles } from '@material-ui/core/styles';

import {
  FormControl,
  Grid,
  TextField,
  Button,
  Container,
} from '@material-ui/core';

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
    textAlign: 'center',
  },
  save: {
    margin: '40px 0',
  },
}));

export default function NewAd({ title, content, onChangeValue, handleCreateAd }) {
  const classes = useStyles();

  const handleOnChange = (event) => {
    console.log('event.target.name = ', event.target.name);
    onChangeValue(event.target.value, event.target.name);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleCreateAd();
  };

  return (
    <Container maxWidth="lg">
      <h1 className="title">Créer une annonce</h1>
      <form onSubmit={handleOnSubmit}>
        <FormControl required id="mainForm" className={classes.form} autoComplete="off">

          <Grid item>
            <UserField />
          </Grid>

          <Grid item>
            <StylesField />
          </Grid>

          <Grid item>
            <InstrumentsField />
          </Grid>

          <Grid item>
            <TextField
              className={classes.input}
              id="input-title"
              required
              label="Votre titre"
              name="title"
              onChange={handleOnChange}
              value={title}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              required
              id="content"
              label="Votre message"
              name="content"
              type="text"
              value={content}
              onChange={handleOnChange}
              multiline
              rows={4}
              variant="outlined"
            />
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
}

NewAd.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  handleCreateAd: PropTypes.func.isRequired,
};
