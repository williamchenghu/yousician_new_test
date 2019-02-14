//@ flow
import React from 'react';
import SnackbarCmp from '../../common/components/SnackBarCmp';

type Props = {
  status: boolean,
  onClose: Function
};

const ErrorMessage = ({ status, resetError }: Props) => (
  <SnackbarCmp
    message="Seems something wrong please check later"
    status={status}
    onClose={resetError}
  />
);

export default ErrorMessage;
