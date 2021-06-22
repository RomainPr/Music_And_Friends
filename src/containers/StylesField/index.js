import { connect } from 'react-redux';
import StylesField from 'src/components/StylesField';
import { changeStyleValue } from 'src/actions/changeInput';

const mapStateToProps = (state, ownProps) => ({
  styles: state.sign.styles,
  value: state.sign[ownProps.name],
  styleName: state.sign.styleName,

});

const mapDispatchToProps = (dispatch) => ({
  onChangeStyleValue: (event) => {
    dispatch(changeStyleValue(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StylesField);
