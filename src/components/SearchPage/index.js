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
import { RestoreOutlined } from '@material-ui/icons';

export default function SearchPage({
  categories, 
  categoryName, 
  onChangeCategoryValue,
  onClickSearch,
  searchResult}) {
  
  console.log(searchResult)

  return (
    <div>
      <form id="form">
         {/* onClick={handleChange} */}
        
          <CheckBox />
        <div id="searchFields">  
          <CitiesField />
          <InstrumentsField />
          <StylesField />
        </div>
        <Button
          id="search-button"
          onClick={ onClickSearch }
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
              onChange={onChangeCategoryValue}
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
      
      {/* <ul className="container-card-result">
      {searchResult.map((name) => (
        //VOIR COMPONENT CARD ?
        <li className="result" key={searchResult.id} {...searchResult}>
        {name}
        </li>
      ))}
      </ul> */}

      <Button>
        <ArrowDropDownCircleIcon id="dropDown-arrow" />
      </Button>
    </div>
  );
}

SearchPage.propTypes = {
  categories:PropTypes.array.isRequired,
  onChangeCategoryValue: PropTypes.func.isRequired,
  onClickSearch:PropTypes.func.isRequired,
  searchResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

