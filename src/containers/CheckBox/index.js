import { connect } from 'react-redux';
import CheckBox from 'src/components/SearchPage/CheckBox';
import { changeBoxValue } from 'src/actions';

// on peut passer des props à l'instanciation d'un container ces props seront disponible en 2e paramètre 
//des fonctions mapStateToProps et mapDispatchToProps. Par convention on nomme ce paramètre "ownProps" => les props du container
const mapStateToProps = (state, ownProps) => {
  
console.log('ownProps == ', ownProps);
  // l'astuce ici, c'est de faire correspondre la props "name" du container avec la propriété du state
return {
  value: state[ownProps.name],
}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeBoxValue: (value) => {
    // modification de state => dispatch d'action
    // ici on veut passer la value jusqu'à notre reducer => on la passe à l'action creator
    const action = changeBoxValue(value, ownProps.name);
    // console.log('je veux modifier la valeur des checkbox', action);
    dispatch(action);

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
