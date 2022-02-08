import * as React from 'react';
import Header from './header';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/theme';
import { useState, useRef } from 'react';
import { useOnClickOutside } from '../lib/hooks';

const Layout = ({pageTitle, children}) => {

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header open={open} setOpen={setOpen} node={node} />
      <main>
        {children}
      </main>
      <h1>Footer goes here</h1>
    </>
    </ThemeProvider>
  )
}

export default Layout;