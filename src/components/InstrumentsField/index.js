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
    '&:hover': {
      '& .MuiInputLabel-formControl': {
        color: '#FDA13D',
      },
    },
  },
  label: {
    color: '#fff',
    '&.Mui-focused': {
      color: '#fff',
    },
  },
  input: {
    '&::before': {
      borderBottom: '1px solid #fff',
    },
    '&::after': {
      borderBottom: '2px solid #FDA13D',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #FDA13D',
    },
  },
}));

export default function InstrumentsField({
  searchResultAll, instruments, instrumentName, onChangeInstru,
}) {
  const classes = useStyles();

  const onChangeInstrumentValue = (event) => {
    onChangeInstru(event);
    const zoubida = searchResultAll.filter((musician) => {
      const { instrument } = musician;
      console.log(musician.instrument);
      return instrument.some((inst) => instruments.includes(inst));
    });
    console.log(zoubida);
  };

  return (

    <div id="field">
      {/* Field if connected musician OR place -> AND box checked group or/and musician */}
      <FormControl required className={classes.form}>
        <InputLabel className={classes.label} id="controlled-open-select-label">Par instrument(s)</InputLabel>
        <Select
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
  onChangeInstrumentValue: PropTypes.func.isRequired,
};
