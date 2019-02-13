// @flow
import React from 'react';
import styled from 'styled-components';
import RatingCmp from '../../common/components/RatingCmp';
import LevelChartCmp from '../../common/components/LevelChartCmp';
import LogoCmp from '../../common/components/LogoCmp';
import type { SongProps } from '../../common/type/songs';

const SongGrid = styled.div`
  text-align: center;
  display: flex;
  max-width: 60%;
  margin-top: ${props => props.theme.space.single.l};
  * {
    flex-grow: 1;
    text-align: center;
    flex-shrink: 0;
    margin: auto;
  }
  & > *:first-child {
    flex-grow: ${props => props.theme.space.single.xl};
  }
  & > *:last-child {
    flex-grow: 0;
  }
`;

type Props = {
  onChangeRating: Function,
  songDetails: SongProps
};

const SongGridCmp = ({ songDetails, onChangeRating }: Props) => {
  return (
    <SongGrid>
      <LogoCmp />
      <LevelChartCmp level={songDetails.level} />
      <div>
        <div>{songDetails.title}</div>
        <div>
          <div>
            <RatingCmp rating={songDetails.rating} changeRate={() => {}} />
          </div>

          <div>{songDetails.artist}</div>
        </div>
      </div>
    </SongGrid>
  );
};

export default SongGridCmp;
