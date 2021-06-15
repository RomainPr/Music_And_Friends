import { connect } from 'react-redux';
import SignMusician from 'src/components/SignMusician';

// connecter le composant en lecture du state
const mapStateToProps = (state) => ({
  
});

// permettre au composant connecter de modifier le state
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignMusician);
