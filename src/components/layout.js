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

  // Pop these into custom hook

  // const [open, setOpen] = useState(false);
  // const node = useRef();
  // useOnClickOutside(node, () => setOpen(false));

  // Pop these into custom Hook
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

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