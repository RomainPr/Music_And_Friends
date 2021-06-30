import React from 'react';
import PropTypes from 'prop-types';

import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: '20px',
    minWidth: 120,
    maxWidth: '300px',
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UserField({
  userSelected,
  onChangeUserValue,
}) {
  const classes = useStyles();

  // const handleChange = (event) => {
  //   onChangeUserValue(event.target.value);
  // };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Vous recherchez ?</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={userSelected}
        onChange={onChangeUserValue}
        label="Vous recherchez ? .. "
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="musician">Un musicien</MenuItem>
        <MenuItem value="band">Un groupe</MenuItem>
        <MenuItem value="place">Une salle de concert</MenuItem>
      </Select>
    </FormControl>
  );
}

UserField.propTypes = {
  userSelected: PropTypes.string.isRequired,
  onChangeUserValue: PropTypes.func.isRequired,
};
