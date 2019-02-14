// @flow
import React from 'react';
import Rating from 'react-rating';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

type Props = {
  rating: number,
  changeRate: Function
};
const RatingCmp = ({ rating, changeRate }: Props) => (
  <Rating
    id="rating"
    initialRating={rating}
    emptySymbol={<StarBorder />}
    fullSymbol={<Star />}
    onChange={rate => changeRate(rate)}
    fractions={2}
  />
);
export default RatingCmp;
