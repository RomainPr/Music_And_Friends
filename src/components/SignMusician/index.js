import React from 'react';
import './styles.scss';

import data from 'src/data/dataTest';

import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Grid,
  Container,
  TextField,
  Avatar,
  Button,
} from '@material-ui/core';

// destructuration data pour recup tableau intruments et styles
const { instruments, styles } = data;

const SignMusician = () => {
  const handleChange = (event) => {
    setInstrumentName(event.target.value);
  };

  const instrumentName = [];
  const styleName = [];

  return (

    <Grid container direction="column">
      <h1 className="title">Vos informations de profil musicien</h1>

      <form>
        <FormControl id="mainForm" noValidate autoComplete="off">
          <Grid container direction="row" alignItems="center">
            <Grid item xs={4}>
              <TextField className="input" id="input-first-name" label="Votre prénom" />
              <TextField className="input" id="input-last-name" label="Votre nom" />
              <TextField className="input" id="input-phone" label="Votre téléphone" />
              <TextField className="input" id="input-city" label="Votre ville" />
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
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </div>
            </Grid>

            <Grid item xs={4}>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={4}>
              <TextField id="input-pseudo" label="Votre pseudo" />

              <FormControl id="input-intruments">
                <InputLabel id="demo-mutiple-checkbox-label">Instruments</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={instrumentName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                // MenuProps={MenuProps}
                >
                  {instruments.map((instrument) => (
                    <MenuItem key={instrument} value={instrument}>
                      <Checkbox checked={instrumentName.indexOf(instrument) > -1} />
                      <ListItemText primary={instrument} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl id="input-styles">
                <InputLabel id="demo-mutiple-checkbox-label">Styles</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={styleName}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                // MenuProps={MenuProps}
                >
                  {styles.map((style) => (
                    <MenuItem key={style} value={style}>
                      <Checkbox checked={styleName.indexOf(style) > -1} />
                      <ListItemText primary={style} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Votre Description"
              multiline
              rows={4}
              defaultValue=""
              variant="outlined"
            />
          </Grid>

          <Grid>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />
            <TextField id="outlined-basic" label="Confiration du mot de passe" variant="outlined" />
          </Grid>

        </FormControl>
      </form>
    </Grid>
  );
};

export default SignMusician;
