import React from 'react';
import PropTypes from 'prop-types';

//import containers
import CheckBox from 'src/containers/CheckBox';
import CitiesField from 'src/containers/CitiesField';
import InstrumentsField from 'src/containers/InstrumentsField';
import StylesField from 'src/containers/StylesField';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';

import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import './style.scss';

const categories = [
  'Tous',
  'Profils',
  'Annonces',
];

export default function SearchPage() {
  const [categoryName, setCategoryName] = React.useState([]);
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  return (
    <div>
      <form id="form"
      // onClick
      >
        
          <CheckBox />
        <div id="searchFields">  
          <CitiesField />
          <InstrumentsField />
          <StylesField />
        </div>
        <Button
          id="search-button"
          variant="contained">Rechercher
        </Button>

        <div id="result">
          <p className="result-search">Résultat de votre recherche :</p>
          <FormControl id='form-filter-result'>

            <InputLabel id="controlled-open-select-label">Filtrer par (tous, profils, annonces)</InputLabel>
            <Select
              labelId="mutiple-checkbox-label"
              id="mutiple-checkbox"
              multiple
              value={categoryName}
              // onChange
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}

            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={categoryName.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

      </form>
      <div className="container-card-result">
        Cards List
      </div>
      <Button>
        <ArrowDropDownCircleIcon id="dropDown-arrow" />
      </Button>
    </div>
  );
}

// SearchPage.propTypes = {


// };
