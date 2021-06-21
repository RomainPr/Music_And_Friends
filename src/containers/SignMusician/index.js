import { connect } from 'react-redux';
import SignMusician from 'src/components/SignMusician';
import { changeInputValue } from 'src/actions';

// connecter le composant en lecture du state
const mapStateToProps = (state, ownProps) => {
  console.log(`ownProps = `, ownProps);

  return {

    // value: state[ownProps.name],

    firstname: state.sign.firstname,
    lastname: state.sign.lastname,
    phone: state.sign.phone,
    city: state.sign.city,
    pseudo: state.sign.pseudo,
    description: state.sign.description,
    email: state.sign.email,
    password: state.sign.password,
    confirmpassword: state.sign.confirmpassword,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeValue: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignMusician);
