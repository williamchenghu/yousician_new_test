import { createGlobalStyle } from 'styled-components'
import { defaultSize } from './theme'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background: ${props => props.theme.color.background.light};
    font-family: ${props => props.theme.fonts.family.body};
    font-size: ${defaultSize};
    color: ${props => props.theme.color.text.neutral};
    padding: 0;
    margin: 0;
  }

  p {
    line-height: 1.5;
    letter-spacing: -0.2px;
  }

  h1 {
    font-family: ${props => props.theme.fonts.family.heading};
    font-size: ${props => props.theme.fonts.family.body.xl};
    color: ${props => props.theme.color.heading.dark};
    font-style: italic;
    line-height: 1.33;
    letter-spacing: -0.4px;
  }

  h2 {
    font-family: ${props => props.theme.fonts.family.heading};
    font-size: ${props => props.theme.fonts.family.body.l};
    color: ${props => props.theme.color.heading.dark};
    letter-spacing: -0.3px;
  }

  h3 {
    font-family: ${props => props.theme.fonts.family.heading};
    font-size: ${props => props.theme.fonts.family.body.l};
    color: ${props => props.theme.color.heading.neural};
    font-style: italic;
    letter-spacing: -0.3px;
  }
`
