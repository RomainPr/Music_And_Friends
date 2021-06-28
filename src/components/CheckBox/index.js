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
  onChangeBoxBandValue,
  onChangeBoxMusicianValue,
  onChangeBoxPlaceValue,
  searchResult,
  musicians,
  bands,
  places,
}) {

  return (
    
  );
}

CheckBox.propTypes = {
  isBandChecked: PropTypes.bool.isRequired,
  isMusicianChecked: PropTypes.bool.isRequired,
  isPlaceChecked: PropTypes.bool.isRequired,
  searchResult: PropTypes.array.isRequired,
  onChangeBoxBandValue: PropTypes.func.isRequired,
  onChangeBoxMusicianValue: PropTypes.func.isRequired,
  onChangeBoxPlaceValue: PropTypes.func.isRequired,

};



