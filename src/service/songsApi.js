// @flow

import Chance from 'chance';
import { List, Map, OrderedMap } from 'immutable';
import type { Songs } from '../common/type/songs';
import { get } from '../common/utils/api';

const chance = new Chance();

export default {
  getSongList: async (): Promise<Songs> => {
    const songList = await get('/songlist');
    return songList.reduce((acc, cur, i) => acc.set(chance.guid(), cur), OrderedMap());
  }
};
