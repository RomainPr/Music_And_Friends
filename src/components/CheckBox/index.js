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



