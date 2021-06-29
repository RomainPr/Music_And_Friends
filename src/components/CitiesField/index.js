import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import './style.scss';

const useStyles = makeStyles(() => ({
  form: {
    minWidth: 300,
    maxWidth: 500,
  },
  label: {
    color: '#000',
    '&.Mui-focused': {
      color: '#000',
    },
  },
  select: {
    background: '#fff',
    borderRadius: '4px',
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#000',
        borderWidth: '1px',
      },
    },
  },
}));

export default function CitiesField({ cities, cityName, onChangeCityValue }) {
  const classes = useStyles();

  return (

    <div>
      <FormControl variant="outlined" className={classes.form}>
        <InputLabel className={classes.label} id="controlled-open-select-label">Par ville(s)</InputLabel>
        <Select
          inputProps={{ MenuProps: {disableScrollLock: true }}}
          className={classes.select}
          labelId="controlled-open-select-label"
          id="controlled-open-select"
          multiple
          label="Par ville(s)"
          value={cityName}
          onChange={onChangeCityValue}
          renderValue={(selected) => selected.join(', ')}

        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              <Checkbox checked={cityName.indexOf(city) > -1} />
              <ListItemText primary={city} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>

  );
}

CitiesField.propTypes = {
  cities: PropTypes.array.isRequired,
  cityName: PropTypes.array.isRequired,
  onChangeCityValue: PropTypes.func.isRequired,
}
