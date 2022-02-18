import * as React from 'react';
import Footer from './footer';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/theme';
import { motion, useCycle } from 'framer-motion';
import HeaderComponent from './header';
import { pageHandle } from '../lib/utils';

// TODO:
// - Work out a way to delay the page transition only on mobile
// - Potentially add relative class to `main` when mobile menu is open
// - Look into whether useOnClickOutside needs to be used
// - Update default styling of main content (spacing etc.)
// - Sort out fixed/spacing when header is scrolled down

const Layout = ({pageTitle, children}) => {

  const variants = {
    start: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 75,
        mass: 0.35,
        duration: 0.3,
        ease: 'easeInOut',
      }
    },
    end: {
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        mass: 0.35,
        duration: 0.3,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <HeaderComponent />
      <motion.main
        key={pageTitle}
        initial="end"
        animate="start"
        exit="end"
        variants={variants}
        className={'container ' + pageHandle(pageTitle)}>
        {children}
      </motion.main>
      <Footer />
    </>
    </ThemeProvider>
  )
}

export default Layout;