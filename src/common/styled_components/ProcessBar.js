import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

// override external library
const ProgressBar = styled(LinearProgress)`
  && {
    margin: ${props => `auto ${props.theme.space.single.m}`};
    background-color: ${props => props.theme.color.ui.light};
  }

  & > *:first-child {
    background-color: ${props => props.theme.color.ui.primary};
  }
  & > *:last-child {
    background-color: ${props => props.theme.color.ui.secondary};
  }
`;

export default ProgressBar;
