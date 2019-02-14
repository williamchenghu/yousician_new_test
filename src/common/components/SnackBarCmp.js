// @flow
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import styled from 'styled-components';

type Props = {
  status: boolean,
  onClose: Function,
  message: string,
  type?: string
};

const SnackBarWrapper = styled(Snackbar)`
  & > *:first-child {
    background-color: ${props => {
      if (props.type === 'error') return props.theme.color.icon.error;
      if (props.type === 'success') return props.theme.color.icon.primary;
      return props.theme.color.ui.error;
    }};
  }
`;

const SnackBarCmp = ({ status, onClose, message, type }: Props) => (
  <SnackBarWrapper
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    type={type}
    open={status}
    autoHideDuration={2000}
    onClose={onClose}
    message={message}
  />
);

SnackBarCmp.defaultProps = {
  type: 'error'
};
export default SnackBarCmp;
