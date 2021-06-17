import { connect } from 'react-redux';
import CheckBox from 'src/components/SearchPage/CheckBox';
import { changeBoxValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
  
console.log('ownProps == ', ownProps);

return {
  value: state[ownProps.name],
}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeBoxValue: (value,key) => {
   
    const action = changeBoxValue(value, ownProps.name,key);
   
    dispatch(action);

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
