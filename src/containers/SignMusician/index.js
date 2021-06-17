import { connect } from 'react-redux';
import SignMusician from 'src/components/SignMusician';
import { changeValue } from 'src/actions';

// connecter le composant en lecture du state
const mapStateToProps = (state, ownProps) => {
  console.log(`state = `, state);
  console.log(`ownProps = `, ownProps);
  return {

    value: state[ownProps.name],

    firstname: state.firstname,
    lastname: state.lastname,
    phone: state.phone,
    city: state.city,
    pseudo: state.pseudo,
    description: state.description,
    email: state.email,
    password: state.password,
  };
}

// permettre au composant connecter de modifier le state
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value) => {
    const action = changeValue(value, ownProps.name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignMusician);
