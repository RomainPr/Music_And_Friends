import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import '../style.scss';


export default function checkBox() {

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div>
     <FormControl component="fieldset">

     <FormLabel id='categories' component="legend">Vous recherchez ?</FormLabel>
     <FormGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          className='selector-field'
          value="band"
          control={<Checkbox color="primary" />}
          label="Un groupe"
          labelPlacement="top"
        />
        <FormControlLabel
          value="musician"
          control={<Checkbox color="primary" />}
          label="Un musicien"
          labelPlacement="top"
        />
        <FormControlLabel
          value="place"
          control={<Checkbox color="primary" />}
          label="Une salle de concert"
          labelPlacement="top"
        />
       
      </FormGroup>
    </FormControl>

    </div>
  );
}
