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

export default function AdEdition({ announces, title, content, onChangeValue, handleCreateAd }) {
  const classes = useStyles();

  const handleOnChange = (event) => {
    onChangeValue(event.target.value, event.target.name);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleCreateAd();
  };

  console.log(announces);

  // export function findAnnounce(announces, searchedIdAnnounce) {
  //   const announce = announces.find((announceId) => {
  //     console.log(`announceId.id =`, announceId.id)
  //     return announceId.id === searchedIdAnnounce;
  //   });
  //   console.log(`announce`, announce)
  //   return announce;
  // }

  const annonce = announces.filter((announce) => {
    return announce;
  });
  console.log(annonce);

  return (
    <Container maxWidth="lg">
      <h1 className="title">Modifier une annonce</h1>
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

AdEdition.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  handleCreateAd: PropTypes.func.isRequired,
};
