//@ flow
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

// override external library
const StyledProgressBar = styled(LinearProgress)`
  && {
    margin: ${props => `auto ${props.theme.space.single.m}`};
    background-color: ${props => props.theme.color.icon.secondary};
  }

  & > *:first-child {
    background-color: ${props => props.theme.color.icon.primary};
  }
  & > *:last-child {
    background-color: ${props => props.theme.color.icon.secondary};
  }
`;
const Progressing = styled.div`
  margin: ${props => props.theme.space.single.m};
  text-align: center;
  padding: ${props => props.theme.space.single.m};
`;

const ProgressBar = () => (
  <Progressing>
    <p>Trying my best to loading for u</p>
    <StyledProgressBar />
  </Progressing>
);

export default ProgressBar;
