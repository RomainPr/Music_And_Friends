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
    <div id="check-box">
      <FormControl component="fieldset">

        <FormLabel id='categories' component="legend">
        Vous recherchez ?</FormLabel>
        <FormGroup row aria-label="position" name="position" defaultValue="right">
          <FormControlLabel
            id='selector-field'
            name='band'
            value="band"
            control={<Checkbox color="primary" />}
            label="Groupes"
            labelPlacement="end"
          />
          <FormControlLabel
            id='selector-field'
            name='musician'
            value="musician"
            control={<Checkbox color="primary" />}
            label="Musiciens"
            labelPlacement="end"
          />
          <FormControlLabel
            id='selector-field'
            name='place'
            value="place"
            control={<Checkbox color="primary" />}
            label="Salles"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>

    </div>
  );
}

// checkBox.propTypes = {


// };
