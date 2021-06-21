import { connect } from 'react-redux';
import StylesField from 'src/components/StylesField';
import { changeStyleValue } from 'src/actions/search';

const mapStateToProps = (state, ownProps) => {

  return {
    styles: state.signMusician.styles,
    value: state.signMusician[ownProps.name],
    styleName: state.signMusician.styleName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeStyleValue: (event) => {
    dispatch(changeStyleValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StylesField);
