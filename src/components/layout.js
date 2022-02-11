import * as React from 'react';
import Header from './header';
import MobileNav from './mobileNav';
import Footer from './footer';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/theme';
import { useState, useRef } from 'react';
import { useOnClickOutside } from '../lib/hooks';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../lib/use-dimensions';

const Layout = ({pageTitle, children}) => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  // When navigating to new page, if menu isn't open (which it shouldn't be) then remove the overflow-hidden class
  if (isOpen) {
    document.querySelector('body').classList.add('overflow-hidden');
    //document.querySelector('main').classList.remove('relative');
  } else {
    document.querySelector('body').classList.remove('overflow-hidden');
    //document.querySelector('main').classList.add('relative');
  }

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header 
        isOpen={isOpen} 
        toggleOpen={toggleOpen} 
        containerRef={containerRef} 
        height={height} 
      />
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