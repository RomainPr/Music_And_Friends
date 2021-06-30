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
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#000',
        borderWidth: '1px',
      },
    },
  },
}));

export default function StylesField({ styles, styleName, onChangeStyleValue }) {
  const classes = useStyles();

  return (

    <div id="field">
      {/* Field if connected musician OR place -> AND box checked group or/and musician */}
      <FormControl variant="outlined" className={classes.form}>
        <InputLabel className={classes.label} id="controlled-open-select-label">Par style(s)</InputLabel>
        <Select
          className={classes.select}
          inputProps={{ MenuProps: {disableScrollLock: true }}}
          labelId="controlled-open-select-label"
          id="controlled-open-select"
          multiple
          label="Par style(s)"
          value={styleName}
          onChange={onChangeStyleValue}
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
