import { connect } from 'react-redux';
import InputTextField from 'src/components/InputTextField';
import { changeInputValue } from 'src/actions';

// connecter le composant en lecture du state
const mapStateToProps = (state, ownProps) => {
  console.log(`ownProps = `, ownProps);

  return {

    value: state[ownProps.name],

    // firstname: state.firstname,
    // lastname: state.lastname,
    // phone: state.phone,
    // city: state.city,
    // pseudo: state.pseudo,
    // description: state.description,
    // email: state.email,
    // password: state.password,
  };
}

// permettre au composant connecter de modifier le state
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value, key) => {
    const action = changeInputValue(value, ownProps.name, key);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTextField);
