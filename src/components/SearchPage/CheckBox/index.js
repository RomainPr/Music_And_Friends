import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import '../style.scss';

export default function CheckBox({band,musician,place,onChangeBoxValue}) {

  const handleBoxChange = (event) => {
    console.log(event.target.name)

    //as doc M UI https://material-ui.com/components/checkboxes/
    // OnChangeBoxValue({[event.target.name]:event.target.checked});
    onChangeBoxValue(event.target.name)
    
  };

  return (
    <div id="check-box">
      <FormControl component="fieldset">

        <FormLabel id='categories' component="legend">
        Vous recherchez ?</FormLabel>
        <FormGroup row aria-label="position" name="position" defaultValue="right">
          <FormControlLabel
            id='selector-field'
            value={band}
            control={
            <Checkbox checked={band} 
            value={band} 
            onChange={handleBoxChange} 
            name="band" color="primary" />}
            label="Groupes"
            labelPlacement="end"
          />
          <FormControlLabel
            id='selector-field'
            value={musician}
            control={
            <Checkbox 
            checked={musician} 
            value={musician} 
            onChange={handleBoxChange} 
            name="musician" color="primary" />}
            label="Musiciens"
            labelPlacement="end"
          />
          <FormControlLabel
            id='selector-field'
            value={place}
            control={
            <Checkbox 
            checked={place} 
            value={place} 
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
  band: PropTypes.bool,
  musician: PropTypes.bool,
  place:PropTypes.bool,
  onChangeBoxValue: PropTypes.func.isRequired,

};

// CheckBox.defaultProps = {
//   band: false,
//   musician: false,
//   place:false,
// };
