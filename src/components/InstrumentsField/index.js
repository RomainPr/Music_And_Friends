/* eslint-disable react/prop-types */
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
    '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(13px, -16px) scale(0.75)',
      color: '#fff',
    },
    '&.Mui-focused': {
      color: '#fff',
    },
  },
  select: {
    background: '#fff',
    borderRadius: '4px',
    '&:focus': {
      '& .MuiInputLabel-formControl': {
        color: '#fff',
      },
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#000',
        borderWidth: '1px',
      },
    },
  },
}));

export default function InstrumentsField({
  searchResultAll, bands, musicians, instruments, instrumentName, onChangeInstru,
}) {
  const classes = useStyles();

  const onChangeInstrumentValue = (event) => {
    onChangeInstru(event);
  };

  return (

    <div id="field">
      {/* Field if connected musician OR place -> AND box checked group or/and musician */}
      <FormControl variant="outlined" className={classes.form}>
        <InputLabel className={classes.label} id="controlled-open-select-label">Par instrument(s)</InputLabel>
        <Select
          className={classes.select}
          inputProps={{ MenuProps: {disableScrollLock: true }}}
          labelId="controlled-open-select-label"
          id="controlled-open-select"
          multiple
          label="Par instrument(s)"
          value={instrumentName}
          onChange={onChangeInstrumentValue}
          renderValue={(selected) => selected.join(', ')}

        >
          {instruments.map((instrument) => (
            <MenuItem key={instrument} value={instrument.name}>
              <Checkbox checked={instrumentName.indexOf(instrument.name) > -1} />
              <ListItemText primary={instrument.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  );
}

InstrumentsField.propTypes = {
  instruments: PropTypes.array.isRequired,
  onChangeInstru: PropTypes.func.isRequired,
};
