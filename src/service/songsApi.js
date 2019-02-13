// @flow

import chance from 'chance';
import { List, Map } from 'immutable';
import type { Songs } from '../common/type/songs';
import { get } from '../common/utils/api';

export default {
  getSongList: async (): Promise<Songs> => {
    const songList = await get('/songlist');
    return songList.toOrderMap();
  }
};
