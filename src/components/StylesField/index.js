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

export default function StylesField({ styles, styleName, onChangeStyleValue }) {
  const classes = useStyles();

  return (

    <div id="field">
      {/* Field if connected musician OR place -> AND box checked group or/and musician */}
      <FormControl required className={classes.form}>
        <InputLabel className={classes.label} id="controlled-open-select-label">Par style(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={styleName}
          onChange={onChangeStyleValue}
          input={<Input className={classes.input} />}
          renderValue={(selected) => selected.join(', ')}

        >
          {styles.map((style) => (
            <MenuItem key={style} value={style}>
              <Checkbox checked={styleName.indexOf(style) > -1} />
              <ListItemText primary={style} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>

  );
}

StylesField.propTypes = {
  styles: PropTypes.array.isRequired,
  styleName: PropTypes.array.isRequired,
  onChangeStyleValue: PropTypes.func.isRequired,
};
