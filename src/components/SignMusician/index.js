import React from 'react';
import './styles.scss';

import data from 'src/data/dataTest';

import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


// destructuration data pour recup tableau intruments et styles
const { instruments, styles } = data;

const SignMusician = () => {
  const handleChange = (event) => {
    setInstrumentName(event.target.value);
  };

  const instrumentName = [];
  const styleName = [];

  return (
    <div className="sign">

      <h1 className="title">Vos informations de profil musicien</h1>

      <FormControl id="mainForm" noValidate autoComplete="off">
        <TextField id="input-first-name" label="Votre prénom" />
        <TextField id="input-last-name" label="Votre nom" />
        <TextField id="input-phone" label="Votre téléphone" />
        <TextField id="input-city" label="Votre ville" />

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
        <TextField id="input-pseudo" label="Votre pseudo" />

        <FormControl>
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

        <FormControl>
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

        <TextField
          id="outlined-multiline-static"
          label="Votre Description"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />
        <TextField id="outlined-basic" label="Confiration du mot de passe" variant="outlined" />
      </FormControl>

    </div>
  );
};

export default SignMusician;
