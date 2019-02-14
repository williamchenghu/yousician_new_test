// @flow
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const StyledSearchBar = styled(InputBase)`
  background: ${props => props.theme.color.background.light};
  padding: ${props => props.theme.space.square.s};
  margin: ${props => props.theme.space.inline.s};
`;

export default StyledSearchBar;
