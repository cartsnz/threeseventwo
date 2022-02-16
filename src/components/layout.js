import * as React from 'react';
import Footer from './footer';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../lib/theme';
import { useRef } from 'react';
import { useOnClickOutside } from '../lib/hooks';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '../lib/use-dimensions';
import HeaderComponent from './header';

// TODO:
// - Work out a way to delay the page transition only on mobile
// - Potentially add relative class to `main` when mobile menu is open
// - Look into whether useOnClickOutside needs to be used
// - Update default styling of main content (spacing etc.)
// - Sort out fixed/spacing when header is scrolled down

const Layout = ({pageTitle, children}) => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  // This was causing the build to fal as document is not available during SSR
  // - Look into another method to handle locking scroll (Geist?)
  
  // When navigating to new page, if menu isn't open (which it shouldn't be) then remove the overflow-hidden class
  /*
  if (isOpen) {
    document.querySelector('body').classList.add('overflow-hidden');
    //document.querySelector('main').classList.remove('relative');
  } else {
    document.querySelector('body').classList.remove('overflow-hidden');
    //document.querySelector('main').classList.add('relative');
  }
  */

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
      <HeaderComponent 
        isOpen={isOpen} 
        toggleOpen={toggleOpen} 
        containerRef={containerRef} 
        height={height}
      />
      <motion.main
        key={pageTitle}
        initial="end"
        animate="start"
        exit="end"
        variants={variants}
        className='container'>
        {children}
      </motion.main>
      <Footer />
    </>
    </ThemeProvider>
  )
}

export default Layout;