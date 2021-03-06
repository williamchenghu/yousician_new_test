// @flow
import type { RecordOf, OrderedMap } from 'immutable';

type Key = string;

export type SongProps = {
  artist: string,
  title: string,
  level: number,
  released: Date,
  rating: number,
  key: string
};

export type Song = RecordOf<SongProps>;
export type Songs = OrderedMap<Key, Song>;
