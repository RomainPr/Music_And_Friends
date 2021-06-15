import { connect } from 'react-redux';
import SignMusician from 'src/components/SignMusician';
import { changeValue } from 'src/actions';

// connecter le composant en lecture du state
const mapStateToProps = (state, ownProps) => ({
  firstname: state[ownProps.firstname],
});

// permettre au composant connecter de modifier le state
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value) => {
    const action = changeValue(value, ownProps.name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignMusician);
