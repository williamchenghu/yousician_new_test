import React from 'react';
import { storiesOf } from '@storybook/react';
import LevelChartCmp from '../src/common/components/LevelChartCmp';
import RatingCmp from '../src/common/components/RatingCmp';
import LogoCmp from '../src/common/components/LogoCmp';

storiesOf('Widgets', module)
  .add('Level', () => (
    <div>
      <p>Level Component Single Number</p>
      <LevelChartCmp level={9} />
      <p>Level Component Single Number</p>
      <LevelChartCmp level={11} />
    </div>
  ))
  .add('Rating', () => (
    <div>
      <p>0.5</p>
      <RatingCmp rating={0.5} changeRate={() => {}} />
      <p>1</p>
      <RatingCmp rating={1} changeRate={() => {}} />
      <p>4.5</p>
      <RatingCmp rating={4.5} changeRate={() => {}} />
      <p>5</p>
      <RatingCmp rating={5} changeRate={() => {}} />
    </div>
  ))
  .add('Logo', () => (
    <div>
      <p>Company logo</p>
      <LogoCmp />
    </div>
  ));
