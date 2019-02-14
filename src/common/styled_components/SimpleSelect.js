// @flow

import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const StyledSelect = styled(Select)`
  margin: auto;
  .react-select__control {
    border-radius: ${props => props.theme.border.type.round};
    padding:${props => props.theme.space.square.s}
    font-size: ${props => props.theme.fonts.size.body.s}
    background-color: white;
    border: none;
    box-shadow: none;
    .is-selected {
      background-color: red;
    }
  }
  .react-select__option--is-selected {
    background: ${props => props.theme.color.background.primary};
  }
 
  .react-select__option {
    padding:${props => props.theme.space.square.s};
    font-size: ${props => props.theme.fonts.size.body.s};
    color: ${props => props.theme.color.text.dark};
    &:hover,
    &:focus {
      background: ${props => props.theme.color.background.primary};
    }
  }
`;

export default StyledSelect;
