// @flow

import { createAction } from 'redux-actions';
import { Record, type RecordOf } from 'immutable';
import type { ActionType } from '../common/type/redux';

type DefaultState = RecordOf<{
  error: boolean
}>;

const defaultState = Record({
  error: false
});

export const resetError = createAction('RESET_ERROR');

export default (state: DefaultState = defaultState(), action: ActionType) => {
  const { type, error } = action;
  if (error) {
    return state.set('error', true);
  }
  if (type === 'RESET_ERROR') {
    return state.set('error', false);
  }

  return state;
};
