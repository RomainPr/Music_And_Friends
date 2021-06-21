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
  bands, musicians, places,
  onChangeBoxValue
}) {
  console.log(isBandChecked)
  const handleBoxChange = (event) => {
    console.log(event.target.name)

    //as doc M UI https://material-ui.com/components/checkboxes/
    onChangeBoxValue({ [event.target.name]: event.target.checked })

  };

  return (
    <div id="check-box">
      <FormControl component="fieldset">

        <FormLabel id='categories' component="legend">
          Vous recherchez ?</FormLabel>
        <FormGroup row aria-label="position" name="position" defaultValue="right">
          <FormControlLabel

            value={isBandChecked}
            control={
              <Checkbox id='selector-field'
                checked={isBandChecked}
                // value={bands}
                onChange={handleBoxChange}
                name="bands"
              />}
            label="Groupes"
            labelPlacement="end"
          />
          <FormControlLabel

            value={isMusicianChecked}
            control={
              <Checkbox id='selector-field'
                checked={isMusicianChecked}
                // value={musicians}
                onChange={handleBoxChange}
                name="musicians" color="primary" />}
            label="Musiciens"
            labelPlacement="end"
          />
          <FormControlLabel

            value={isPlaceChecked}
            control={
              <Checkbox id='selector-field'
                checked={isPlaceChecked}
                // value={places}
                onChange={handleBoxChange}
                name="places" />}
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
  musicians: PropTypes.array.isRequired,
  bands: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired,
  onChangeBoxValue: PropTypes.func.isRequired,

};
