import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import './style.scss';

export default function InstrumentsField({ instruments, instrumentName, onChangeInstrumentValue }) {
// console.log(instruments)

  return (

    <div id="field">
      {/* Field if connected musician OR place -> AND box checked group or/and musician */}
      <FormControl id="form-control">
        <InputLabel id="controlled-open-select-label">Par instrument(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={instrumentName}
          onChange={onChangeInstrumentValue}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}

        >
          {instruments.map((instrument) => (
            <MenuItem key={instrument} value={instrument}>
              <Checkbox checked={instrumentName.indexOf(instrument) > -1} />
              <ListItemText primary={instrument} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  );
}

InstrumentsField.propTypes = {
  instruments:PropTypes.array.isRequired,
  onChangeInstrumentValue: PropTypes.func.isRequired,
};
