const px = {
  none: '0px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px'
};

const fonts = {
  family: {
    heading: 'Sans-serif',
    body: 'Sans-serif',
    bold: 'Sans-serif'
  },
  size: {
    heading: {
      s: '1em',
      m: '1.25em',
      l: '1.5em',
      xl: '2.25em'
    },
    body: {
      s: '0.75em',
      m: '1em',
      l: '1.333em',
      xl: '1.777em'
    }
  }
};

const colors = {
  green: {
    '600': '#4fc514'
  },
  gray: {
    '300': '#404248',
    '200': '#727275',
    '100': '#DBEAFF'
  },
  neutral: {
    '1000': '#000000',
    '0': '#FFFFFF'
  },
  red: {
    '600': '#E0301E'
  }
};

const main = {
  fonts,
  colors,
  color: {
    heading: {
      light: colors.neutral[0]
    },
    text: {
      dark: colors.gray[300],
      light: colors.neutral[0]
    },
    background: {
      black: colors.neutral[1000],
      primary: colors.green[600],
      transparent: 'transparent'
    },
    icon: {
      primary: colors.green[600],
      dark: colors.gray[200],
      light: colors.gray[100]
    },
    transparent: {
      medium: 'rgba(0, 0, 0, 0.03)',
      light: 'rgba(0, 0, 0, 0.015)'
    }
  },
  space: {
    single: {
      ...px
    },
    square: {
      ...px
    },
    squish: {
      s: `${px.s} ${px.m}`,
      m: `${px.m} ${px.l}`,
      l: `${px.l} ${px.xl}`
    },
    stretch: {
      s: `${px.m} ${px.s}`,
      m: `${px.l} ${px.m}`,
      l: `${px.xl} ${px.l}`
    },
    stack: {
      xs: `0 ${px.xs}`,
      s: `0 ${px.s}`,
      m: `0 ${px.m}`,
      l: `0 ${px.l}`,
      xl: `0 ${px.xl}`
    },
    inline: {
      xs: `${px.xs} 0`,
      s: `${px.s} 0`,
      m: `${px.m} 0`,
      l: `${px.l} 0`,
      xl: `${px.xl} 0`
    }
  },
  border: {
    type: {
      default: '0',
      round: '3px'
    }
  }
};

export const defaultSize = px.m;

export default main;
