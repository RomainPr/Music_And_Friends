import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import '../style.scss';

export default function StylesField({ styles, styleName, onChangeStyleValue }) {
console.log(styles)

  return (

    <div id='field'>
      {/* Field if connected musician OR place -> AND box checked group or/and musician*/}
      <FormControl id='form-control'>
        <InputLabel id="controlled-open-select-label">Par ville(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={styleName}
          onChange={onChangeStyleValue}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}

        >
          {styles.map((style) => (
            <MenuItem key={style}  value={style}>
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
  styles:PropTypes.array.isRequired,
  // styles: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number,
  //       name: PropTypes.string,
  //     }).isRequired,
  onChangeStyleValue: PropTypes.func.isRequired,
};
