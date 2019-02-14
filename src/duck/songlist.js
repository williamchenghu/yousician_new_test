// @ flow
import { Record, List, type RecordOf, OrderedMap } from 'immutable';
import { createAction } from 'redux-actions';
import apiService from '../service/songsApi';
import type { Songs } from '../common/type/songs';
import type { ActionType } from '../common/type/redux';

type DefaultState = RecordOf<{
  songList: Songs,
  isLoading: boolean,
  isSuccessRating: boolean
}>;

const defaultState = Record({
  songList: OrderedMap(),
  isLoading: false,
  isSuccessRating: false
});

export const getSongList = createAction('GET_SONG_LIST', apiService.getSongList);
export const putRating = createAction('PUT_SONG_RATING', apiService.putRating);
export const restSuccessRating = createAction('RESET_SUCCESS_RATING');

export default function signerReducer(state: DefaultState = defaultState(), action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_SONG_LIST_PENDING':
      return state.set('isLoading', true);

    case 'GET_SONG_LIST_REJECTED':
      return state.set('isLoading', false);

    case 'GET_SONG_LIST_FULFILLED':
      return state.set('songList', payload).set('isLoading', false);

    case 'PUT_SONG_RATING_FULFILLED':
      return state.setIn(['songList', payload.key], payload).set('isSuccessRating', true);

    case 'RESET_SUCCESS_RATING':
      return state.set('isSuccessRating', false);

    default:
      return state;
  }
}
