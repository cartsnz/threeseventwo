import * as React from 'react';
import Header from './header';
import Footer from './footer';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/theme';
import { useState, useRef } from 'react';
import { useOnClickOutside } from '../lib/hooks';
import { motion } from 'framer-motion';

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
      <motion.main
        key={pageTitle}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
          type: "spring",
          stiffness: 75,
          mass: 0.35,
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className='container'>
        {children}
      </motion.main>
      <Footer />
    </>
    </ThemeProvider>
  )
}

export default Layout;