import React from 'react';
import { storiesOf } from '@storybook/react';
import SongGridCmp from '../src/songListPage/components/SongGridCmp';

storiesOf('Songs', module).add('Sing song grid', () => (
  <div>
    <p>Level Component Single Number</p>
    <SongGridCmp
      songDetails={{
        artist: 'The Yousicians',
        title: 'Lycanthropic Metamorphosis',
        level: 13,
        released: '2016-10-26',
        rating: 5
      }}
      onChangeRating={() => {}}
    />
  </div>
));
