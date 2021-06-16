import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';



import '../style.scss';

const instruments = [
  'Guitare',
  'Batterie',
  'Piano',
  'Violon',
  'Bass guitare',
  'Yukulélé',
  'Accordéon',
  'Trompette',
  'Tambour',
  'Triangle',
];

export default function InstrumentsField() {

  const [instrumentName, setInstrumentName] = React.useState([])
 

  const handleChange = (event) => {
    setInstrumentName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setInstrumentName(value);
  };
  return (

    <div id='field'>
     
      {/* Field if connected musicien -> AND box checked place -> hidden:display:none*/}
      <FormControl id='form-control' className="hidden">
        <InputLabel id="controlled-open-select-label">Par instrument(s) </InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={instrumentName}
          // onChange
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
