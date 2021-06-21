import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './styles.scss';

//DOC FILTER MDN 
//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
//  /*console.log(isBandChecked)
// //   const handleBoxChange = (event) => {
// //     //as doc M UI https://material-ui.com/components/checkboxes/
// //     console.log(event.target.value);
// //     return ( onChangeBoxValue({ [event.target.value]: event.target.checked }))
// // 
export default function CheckBox({
  isBandChecked,
  isMusicianChecked,
  isPlaceChecked,
  // bands, musicians, places,
  onChangeBoxValue
}) {


  return (
    <div id="check-box">
      <FormControl component="fieldset">

        <FormLabel id='categories' component="legend">
          Vous recherchez ?</FormLabel>
        <FormGroup row aria-label="position" name="position" defaultValue="right">
          <FormControlLabel           
            control={
              <Checkbox id='selector-field'
                checked={isBandChecked}
                // value={isBandChecked}
                onChange={onChangeBoxValue}
                name="isBandChecked"
              />}
            label="Groupes"
            labelPlacement="end"
          />
          <FormControlLabel
            control={
              <Checkbox id='selector-field'
                checked={isMusicianChecked}
                // value={isMusicianChecked}
                onChange={onChangeBoxValue}
                name="isMusicianChecked"/>}
            label="Musiciens"
            labelPlacement="end"
          />
          <FormControlLabel
            control={
              <Checkbox id='selector-field'
                checked={isPlaceChecked}
                // value={isPlaceChecked}
                onChange={onChangeBoxValue}
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
