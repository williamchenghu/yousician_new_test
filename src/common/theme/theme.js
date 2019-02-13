const px = {
  none: '0px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
}

const fonts = {
  family: {
    heading: 'Sans-serif',
    body: 'Sans-serif',
    bold: 'Sans-serif',
  },
  size: {
    heading: {
      s: '1em',
      m: '1.25em',
      l: '1.5em',
      xl: '2.25em',
    },
    body: {
      s: '0.75em',
      m: '1em',
      l: '1.333em',
      xl: '1.777em',
    },
  },
}

const colors = {
  green: {
    '600': '#4fc514',
  },
  gray: {
    '600': '#878789',
    '500': '#9E9888',
    '400': '#ABA698',
    '300': '#C7C4BB',
    '200': '#DBEAFF',
    '100': '#F1F0EE',
  },
  neutral: {
    '1000': '#000000',
    '900': '#222222',
    '700': '#6D6E71',
    '600': '#999A9C',
    '500': '#A7A8AA',
    '400': '#C5C5C6',
    '300': '#E2E2E3',
    '200': '#F0F0F1',
    '100': '#F2F2F2',
    '0': '#FFFFFF',
  },
  red: {
    '600': '#E0301E',
  },
}

const saturation = {
  default: 700,
  primary: 600,
  neutral: 500,
  secondary: 400,
}

const main = {
  fonts,
  colors,
  saturation,
  color: {
    heading: {
      dark: colors.neutral[1000],
      neutral: colors.gray[saturation.neutral],
      light: colors.neutral[0],
    },
    text: {
      dark: colors.neutral[1000],
      darkish: colors.neutral[900],
      neutral: colors.gray[saturation.neutral],
      light: colors.neutral[0],
    },
    background: {
      black: colors.neutral[1000],
      dark: colors.neutral[300],
      medium: colors.gray[200],
      light: colors.neutral[100],
      white: colors.neutral[0],
      transparent: 'transparent',
    },
    icon: {
      primary: colors.maroon[saturation.primary],
      dark: colors.neutral[700],
      light: colors.gray[100],
      disabled: colors.neutral[500],
    },
    ui: {
      primary: colors.green[saturation.primary],
      secondary: colors.green[saturation.secondary],
      default: colors.green[saturation.default],
      light: colors.green[100],
      disabled: colors.neutral[400],
      error: colors.red[600],
      success: colors.green[600],
    },
    link: {
      default: colors.green[saturation.default],
    },
    border: {
      default: colors.gray[200],
      white: colors.neutral[0],
    },
    transparent: {
      medium: 'rgba(0, 0, 0, 0.03)',
      light: 'rgba(0, 0, 0, 0.015)',
    },
  },
  space: {
    single: {
      ...px,
    },
    square: {
      ...px,
    },
    squish: {
      s: `${px.s} ${px.m}`,
      m: `${px.m} ${px.l}`,
      l: `${px.l} ${px.xl}`,
    },
    stretch: {
      s: `${px.m} ${px.s}`,
      m: `${px.l} ${px.m}`,
      l: `${px.xl} ${px.l}`,
    },
    stack: {
      xs: `0 ${px.xs}`,
      s: `0 ${px.s}`,
      m: `0 ${px.m}`,
      l: `0 ${px.l}`,
      xl: `0 ${px.xl}`,
    },
    inline: {
      xs: `${px.xs} 0`,
      s: `${px.s} 0`,
      m: `${px.m} 0`,
      l: `${px.l} 0`,
      xl: `${px.xl} 0`,
    },
  },
  border: {
    type: {
      default: '0',
      round: '3px',
    },
  },
}

export const green = {
  ...main,
  color: {
    ...main.color,
    ui: {
      ...main.color.ui,
      primary: colors.green[600],
      secondary: colors.rose[400],
      light: colors.rose[100],
    },
    icon: {
      ...main.color.icon,
      primary: colors.rose[saturation.primary],
    },
  },
}

export const defaultSize = px.m

export default main
