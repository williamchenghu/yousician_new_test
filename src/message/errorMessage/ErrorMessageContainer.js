// @flow
import { connect } from 'react-redux';
import { resetError } from '../../duck/common';
import ErrorMessage from './ErrorMessage';

export default connect(
  state => ({
    status: state.common.get('error')
  }),
  { resetError }
)(ErrorMessage);
