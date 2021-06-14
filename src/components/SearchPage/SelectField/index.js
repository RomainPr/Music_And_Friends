import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';


// import '../style.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
function cityStyles(city, cityName, theme) {
  return {
    fontWeight:
      cityName.indexOf(city) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

function instrumentStyles(instrument, instrumentName, theme) {
  return {
    fontWeight:
      instrumentName.indexOf(instrument) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectField() {

  const [cityName, setCityName] = React.useState([]);
  const [instrumentName, setInstrumentName] = React.useState([])
  const [styleName, setStyleName] = React.useState([]);

  const classes = useStyles();
  const theme = useTheme();

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
    
    <div>
 
      <FormControl className={classes.formControl}>
        <InputLabel id="controlled-open-select-label">Par ville(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={cityName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              <Checkbox checked={cityName.indexOf(city) > -1} />
              <ListItemText primary={city} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="controlled-open-select-label">Par instru(s) </InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={instrumentName}
          onChange
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {instruments.map((instrument) => (
            <MenuItem key={instrument} value={instrument}>
              <Checkbox checked={instrumentName.indexOf(instrument) > -1} />
              <ListItemText primary={instrument} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="controlled-open-select-label">Par style(s)</InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={styleName}
          onChange
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
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
