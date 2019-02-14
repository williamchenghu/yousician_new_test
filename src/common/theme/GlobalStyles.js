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
    line-height: 1.5;
    letter-spacing: -0.2px;
  }

  h1 {
    font-family: ${props => props.theme.fonts.family.heading};
    font-size: ${props => props.theme.fonts.family.heading.l};
    color: ${props => props.theme.color.heading.light};
    line-height: 1.33;
    letter-spacing: -0.4px;
  }

  h2 {
    font-family: ${props => props.theme.fonts.family.heading};
    font-weight: 300;
    margin: 0;
    line-height: 1.33;
    letter-spacing: -0.4px;
  }
 
`;
