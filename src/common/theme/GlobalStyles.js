//flow

import { createGlobalStyle } from 'styled-components';
import { defaultSize } from './theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background: ${props => props.theme.color.background.black};
    font-family: ${props => props.theme.fonts.family.body};
    font-size: ${defaultSize};
    color: ${props => props.theme.color.text.light};
    padding: 0;
    margin: 0;
  }

  p {
    font-size: ${props => props.theme.fonts.family.body.xs};
    line-height: 1.5;
    letter-spacing: -0.2px;
    margin: 0;

  }

  span{
    line-height: 1.7;
  }
`;
