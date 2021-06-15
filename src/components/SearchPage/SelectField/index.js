import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import '../style.scss';

const cities = [
  'Paris',
  'Bordeaux',
  'Toulouse',
  'Dijon',
  'Lyon',
  'Marseille',
  'Grenoble',
  'Strasbourg',
  'Brest',
  'Montpellier',
];

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


export default function SelectField() {

  const [cityName, setCityName] = React.useState([]);
  const [instrumentName, setInstrumentName] = React.useState([])
  const [styleName, setStyleName] = React.useState([]);

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setCityName(value);
  };
  return (
    
    <div id='field'>
 {/* Field if connected musician OR place -> AND box checked group or/and musician*/}
      <FormControl id='form-control'>
        <InputLabel id="controlled-open-select-label">Par ville(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={cityName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              <Checkbox checked={cityName.indexOf(city) > -1} />
              <ListItemText primary={city} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
       {/* Field if connected musicien -> AND box checked place -> display:none*/}
      <FormControl id='form-control' className="hidden">
        <InputLabel id="controlled-open-select-label">Par instrument(s) </InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={instrumentName}
          onChange
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

      <FormControl id='form-control'>
        <InputLabel id="controlled-open-select-label">Par style(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={styleName}
          onChange
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
