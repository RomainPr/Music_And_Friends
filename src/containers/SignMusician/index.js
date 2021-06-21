import { connect } from 'react-redux';
import SignMusician from 'src/components/SignMusician';
import { changeInputValue } from 'src/actions';

// connecter le composant en lecture du state
const mapStateToProps = (state, ownProps) => {
  console.log(`ownProps = `, ownProps);

  return {

    // value: state[ownProps.name],

    firstname: state.signMusician.firstname,
    lastname: state.signMusician.lastname,
    phone: state.signMusician.phone,
    city: state.signMusician.city,
    pseudo: state.signMusician.pseudo,
    description: state.signMusician.description,
    email: state.signMusician.email,
    password: state.signMusician.password,
    confirmpassword: state.signMusician.confirmpassword,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeValue: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignMusician);
