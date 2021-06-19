import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import '../style.scss';

export default function CheckBox({
  isBandChecked,
  isMusicianChecked,
  isPlaceChecked,
  onChangeBoxValue
}) {
console.log(isBandChecked)
  const handleBoxChange = (event) => {
    console.log(event.target.name)

    //as doc M UI https://material-ui.com/components/checkboxes/
    // OnChangeBoxValue({[event.target.name]:event.target.checked});
    onChangeBoxValue({[event.target.name]:event.target.checked})
    
  };

  return (
    <div id="check-box">
      <FormControl component="fieldset">

        <FormLabel id='categories' component="legend">
        Vous recherchez ?</FormLabel>
        <FormGroup row aria-label="position" name="position" defaultValue="right">
          <FormControlLabel
            id='selector-field'
            value={isBandChecked}
            control={
            <Checkbox checked={isBandChecked} 
            value={isBandChecked} 
            onChange={handleBoxChange} 
            name="band" color="primary" />}
            //if name = "band" -> 
            label="Groupes"
            labelPlacement="end"
          />
          <FormControlLabel
            id='selector-field'
            value={isMusicianChecked}
            control={
            <Checkbox 
            checked={isMusicianChecked} 
            value={isMusicianChecked} 
            onChange={handleBoxChange} 
            name="musician" color="primary" />}
            //if name="band" -> 
            label="Musiciens"
            labelPlacement="end"
          />
          <FormControlLabel
            id='selector-field'
            value={isPlaceChecked}
            control={
            <Checkbox 
            checked={isPlaceChecked} 
            value={isPlaceChecked} 
            onChange={handleBoxChange} 
            name="place" color="primary" />}
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
  isPlaceChecked:PropTypes.bool,
  onChangeBoxValue: PropTypes.func.isRequired,

};

// CheckBox.defaultProps = {
//   band: false,
//   musician: false,
//   place:false,
// };
