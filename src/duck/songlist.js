// @flow
import { Record, List, type RecordOf } from 'immutable';
import { createAction } from 'redux-actions';
import apiService from '../services/api';
import type { Signer, Client } from '../../common/types/signer';
import type { ActionType } from '../../common/types/redux';

type DefaultState = RecordOf<{
  signerList: List<Signer>,
  selectedTarget: Signer | Client | null
}>;

const defaultState = Record({
  signerList: List(),
  selectedTarget: null
});

export const getSignerList = createAction('GET_SINGER_LIST', apiService.getSigner);
export const selectTarget = createAction('SELECT_TARGET', target => target);
export const deselectTarget = createAction('DESELECT_TARGET');

export default function signerReducer(state: DefaultState = defaultState(), action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_TARGET':
      return state.set('selectedTarget', payload);
    case 'DESELECT_TARGET':
      return state.set('selectedTarget', null);

    case 'GET_SINGER_LIST_FULFILLED':
      return state.set('signerList', payload);

    case 'RESET_ROLLFORWARD':
      return defaultState();

    default:
      return state;
  }
}
