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
    zIndex: 2,
    color: '#000',
    paddingLeft: '20px',
    '&.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInputLabel-animated': {
      transition: 'color 200ms cubic-bezier(255,255,255, 0.2, 1) 0ms,transform 200ms cubic-bezier(255,255,255, 0.2, 1) 0ms',
    },
  },
  select: {
    '& .MuiSelect-select': {
      backgroundColor: '#fff',
      boxShadow: '10px 10px 15px 0 rgb(0 0 0 / 25%)',
      border: '1px solid #fff',
      borderRadius: '50px',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: '#fff',
      '& .MuiInputLabel-formControl': {
        color: '#fff',
      },
    },
    '&::before': {
      borderBottom: 'none',
    },
    '&::after': {
      borderBottom: 'none',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
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
      <FormControl className={classes.form}>
        <InputLabel className={classes.label} id="controlled-open-select-label">Par instrument(s)</InputLabel>
        <Select
          className={classes.select}
          inputProps={{ MenuProps: {disableScrollLock: true }}}
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={instrumentName}
          onChange={onChangeInstrumentValue}
          input={<Input className={classes.input} />}
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
