import React from 'react';
import { storiesOf } from '@storybook/react';
import LevelChartCmp from '../src/common/components/LevelChartCmp';
import RatingCmp from '../src/common/components/RatingCmp';
import PaginationCmp from '../src/common/components/PaginationCmp';
import LogoCmp from '../src/common/components/LogoCmp';
import SnackbarCmp from '../src/common/components/SnackBarCmp';
import ProgressBar from '../src/common/styled_components/ProgressBar';

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
  ))
  .add('Pagination', () => (
    <div>
      <p>Pagination</p>
      <PaginationCmp currentPageNum={1} listLength={20} onChangeCurrentPage={() => {}} />
    </div>
  ))
  .add('Progress Bar', () => (
    <div>
      <p>Progress Bar</p>
      <ProgressBar />
    </div>
  ))
  .add('Snack Bar success', () => (
    <div>
      <p>Success snack bar</p>
      <SnackbarCmp message="This is success msg" type="success" status={true} onClose={() => {}} />
    </div>
  ))
  .add('Snack Bar', () => (
    <div>
      <p>Error snack bar</p>
      <SnackbarCmp message="This is error msg" status={true} onClose={() => {}} />
    </div>
  ));
