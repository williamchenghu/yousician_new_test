// @flow
import { Record, List, type RecordOf, OrderedMap } from 'immutable';
import { createAction } from 'redux-actions';
import apiService from '../service/songsApi';
import type { Songs } from '../common/type/songs';
import type { ActionType } from '../common/type/redux';

type DefaultState = RecordOf<{
  songList: Songs,
  isLoading: boolean
}>;

const defaultState = Record({
  songList: OrderedMap(),
  isLoading: false
});

export const getSongList = createAction('GET_SONG_LIST', apiService.getSongList);

export default function signerReducer(state: DefaultState = defaultState(), action: ActionType) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_SONG_LIST_FULFILLED':
      return state.set('songList', payload);

    default:
      return state;
  }
}
