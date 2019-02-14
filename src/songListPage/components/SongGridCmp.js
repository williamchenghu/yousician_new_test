// @flow
import React from 'react';
import styled from 'styled-components';
import RatingCmp from '../../common/components/RatingCmp';
import LevelChartCmp from '../../common/components/LevelChartCmp';
import LogoCmp from '../../common/components/LogoCmp';
import type { SongProps } from '../../common/type/songs';

const SongGrid = styled.div`
  width:100%;
  text-align: center;
  display: flex;
  padding: ${props => props.theme.space.square.xs}
  border:1px solid ${props => props.theme.color.border.primary};
`;

const SongDetail = styled.div`
  * {
    text-align: left;
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
      <SongDetail>
        <h2>{songDetails.title}</h2>
        <div>
          <RatingCmp rating={songDetails.rating} changeRate={() => {}} />
          {songDetails.artist}
        </div>
      </SongDetail>
    </SongGrid>
  );
};

export default SongGridCmp;
