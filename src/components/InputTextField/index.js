import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import { TextField } from '@material-ui/core';

export default function InputTextField({
  firstname,
  lastname,
  phone,
  pseudo,
  description,
  email,
  password,
  onChangeValue,
}) {
  const handleOnChange = (event) => {
    console.log(`event.target.name = `, event.target.name);
    onChangeValue(event.target.value, event.target.name);
  };
  return (
    <div className="">
      <TextField />
    </div>
  );
}

InputTextField.propTypes = {};
