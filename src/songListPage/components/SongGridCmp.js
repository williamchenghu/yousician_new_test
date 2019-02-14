// @flow
import React from 'react';
import styled from 'styled-components';
import RatingCmp from '../../common/components/RatingCmp';
import LevelChartCmp from '../../common/components/LevelChartCmp';
import LogoCmp from '../../common/components/LogoCmp';
import type { Song } from '../../common/type/songs';

const SongGrid = styled.div`
  width:100%;
  text-align: center;
  display: inline-flex;
  padding: ${props => props.theme.space.square.xs}
  border:1px solid ${props => props.theme.color.border.primary};

  & > *{
    margin: auto;
    min-width:10%;
    vertical-align: middle;
    margin-left: ${props => props.theme.space.square.xs}
  }
  
  & > *:first-child {
    flex-grow:0;
  }
  & > *:last-child {
    text-align: left
    min-width: 50%;
    flex-grow:3;
  }
`;

const InfoBox = styled.div`
  p {
    color: ${props => props.theme.color.text.dark};
  }
  svg {
    color: ${props => props.theme.color.icon.dark};
  }
  display: inline-flex;
  & > * {
    margin-right: ${props => props.theme.space.square.xs};
  }
  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
`;

type Props = {
  onChangeRating: Function,
  songDetails: Song
};

const SongGridCmp = ({ songDetails, onChangeRating }: Props) => {
  return (
    <SongGrid>
      <LogoCmp />
      <LevelChartCmp className="donut" level={songDetails.level} />
      <div data-cy="song-info">
        <p>{songDetails.title}</p>
        <InfoBox>
          <RatingCmp rating={songDetails.rating} changeRate={onChangeRating(songDetails)} />
          <p>{songDetails.artist}</p>
        </InfoBox>
      </div>
    </SongGrid>
  );
};

export default SongGridCmp;
