// @flow
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const StyledSearchBar = styled(InputBase)`
  border-radius: ${props => props.theme.border.type.round};
  background: ${props => props.theme.color.background.light};
  padding: ${props => props.theme.space.square.s};
  margin: ${props => props.theme.space.inline.s};
`;

export default StyledSearchBar;
