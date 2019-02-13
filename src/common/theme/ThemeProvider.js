// @flow

import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import JssProvider from './JssProvider'
import GlobalStyles from './GlobalStyles'
import main from './theme'

type Props = {
  children: any,
}

export default ({ children }: Props) => (
  <JssProvider>
    <ThemeProvider theme={main}>
      <Fragment>
        <GlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  </JssProvider>
)
