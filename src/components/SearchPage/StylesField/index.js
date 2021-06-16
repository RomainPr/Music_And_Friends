import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';



import '../style.scss';

const styles = [
  'Jazz',
  'Rock',
  'Punk',
  'Blues',
  'Soul',
  'Metal',
  'Rap',
  'Folk',
  'Reggae',
  'Hip-hop',
];


export default function StylesField() {

  const [styleName, setStyleName] = React.useState([]);

  const handleChange = (event) => {
    setStyleName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setStyleName(value);
  };
  return (

    <div id='field'>
     
      <FormControl id='form-control'>
        <InputLabel id="controlled-open-select-label">Par style(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={styleName}
          // onChange
          input={<Input />}
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
