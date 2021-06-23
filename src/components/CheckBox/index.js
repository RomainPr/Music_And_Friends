import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './styles.scss';

export default function CheckBox({
  isBandChecked,
  isMusicianChecked,
  isPlaceChecked,
  value,
  // bands, musicians, places,
  onChangeBoxValue
}) {

const handleBoxChecked = (event) => {
          //as doc M UI https://material-ui.com/components/checkboxes/
          console.log(event.target.name);
          console.log(event.target.checked);
          // return ( onChangeBoxValue({ [event.target.name]: event.target.checked }))
          return (onChangeBoxValue(event.target.checked, event.target.name))
  };
  
  return (
    <div id="check-box">
      <FormControl component="fieldset">

        <FormLabel id='categories' component="legend">
          Vous recherchez ?</FormLabel>
        <FormGroup row aria-label="position" name="position" defaultValue="right">
          <FormControlLabel           
            control={
              <Checkbox 
              // id='isBandChecked'
                checked={isBandChecked}
                // value={value}
                onChange={handleBoxChecked}
                name="isBandChecked"
              />}
            label="Groupes"
            labelPlacement="end"
          />
          <FormControlLabel
            control={
              <Checkbox 
                // id='isMusicianChecked'
                checked={isMusicianChecked}
                // value={value}
                onChange={handleBoxChecked}
                name="isMusicianChecked"/>}
            label="Musiciens"
            labelPlacement="end"
          />
          <FormControlLabel
            control={
              <Checkbox
                // id='isPaceChecked'
                checked={isPlaceChecked}
                // value={value}
                onChange={handleBoxChecked}
                name="isPlaceChecked" />}
            label="Salles"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>

    </div>
  );
}

CheckBox.propTypes = {
  isBandChecked: PropTypes.bool,
  isMusicianChecked: PropTypes.bool,
  isPlaceChecked: PropTypes.bool,
  // musicians: PropTypes.array.isRequired,
  // bands: PropTypes.array.isRequired,
  // places: PropTypes.array.isRequired,
  onChangeBoxValue: PropTypes.func.isRequired,

};

CheckBox.defaultProps = {
  isBandChecked: false,
  isMusicianChecked: false,
  isPlaceChecked: false,
}

