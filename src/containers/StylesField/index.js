import { connect } from 'react-redux';
import StylesField from 'src/components/StylesField';
import { changeStyleValue } from 'src/actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log('ownProps == ', ownProps);

  return {
    styles: state.styles,
    value: state[ownProps.name],
    styleName: state.styleName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeStyleValue: (event) => {
    dispatch(changeStyleValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StylesField);
