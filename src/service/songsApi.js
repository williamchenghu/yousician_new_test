// @flow

import Chance from 'chance';
import { OrderedMap } from 'immutable';
import type { Songs, Song } from '../common/type/songs';
import { get, put } from '../common/utils/api';

const chance = new Chance();

export default {
  getSongList: async (): Promise<Songs> => {
    const songList = await get('/songlist');
    return songList.reduce((acc, cur, i) => {
      const key = chance.guid();
      cur.key = key;
      return acc.set(key, cur);
    }, OrderedMap());
  },

  putRating: async (song: Song): Promise<Object> => put('/rating', song)
};
