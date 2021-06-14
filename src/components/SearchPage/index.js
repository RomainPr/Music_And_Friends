import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from './CheckBox';
import SelectField from './SelectField';
import './style.scss';

export default function SearchPage() {

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  return (

    <form id="form" onClick>
  
    <div className="checkbox"></div>
    <CheckBox />
    <SelectField />
    </form>
  );
}

// Search.propTypes = {

  
// };
