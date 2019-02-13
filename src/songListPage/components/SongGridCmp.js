// @flow
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../common/assets/fingerprint-white.png';
import Rating from 'react-rating';
import LevelChartCmp from '../../common/components/LevelChartCmp';
import LogoCmp from '../../common/components/LogoCmp';
import type { SongProps } from '../../common/type/songs';

type Props = {
  onChangeRating: Function,
  songDetails: SongProps
};

const SongGridCmp = ({ songDetails, onChangeRating }: Props) => {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>{/* <LevelChartCmp level={songDetails.level} /> */}</div>
      <div>
        <div>{songDetails.title}</div>
        <div>
          <div>
            <Rating
              id="rating"
              initialRating={songDetails.rating}
              emptySymbol={<i className="material-icons">star_border</i>}
              fullSymbol={<i className="material-icons">star</i>}
              onChange={rate => onChangeRating(songDetails, rate)}
              fractions={2}
            />
          </div>

          <div>{songDetails.artist}</div>
        </div>
      </div>
    </div>
  );
};

export default SongGridCmp;
