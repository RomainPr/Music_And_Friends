import { connect } from 'react-redux';
import SignMusician from 'src/components/SignMusician';
import { changeInputValue } from 'src/actions';

// connecter le composant en lecture du state
const mapStateToProps = (state, ownProps) => {
  console.log(`ownProps = `, ownProps);

  return {

    // value: state[ownProps.name],

    firstname: state.firstname,
    lastname: state.lastname,
    phone: state.phone,
    city: state.city,
    pseudo: state.pseudo,
    description: state.description,
    email: state.email,
    password: state.password,
    confirmpassword: state.confirmpassword,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeValue: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignMusician);
