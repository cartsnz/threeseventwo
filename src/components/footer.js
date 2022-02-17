import { motion } from 'framer-motion';
import * as React from 'react';
import Footer from './styles/footer';

/* TODO
 - Update styling for footer
*/

const variants = {
  offScreen: {
    opacity: 0,
    transition: {
      duration: 0.8,
    }
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}

const FooterComponent = () => {
  return (
    <Footer>
      <motion.div 
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={variants}
        className="footer-container"
      >
        <div className='footer-left'>
          <h2>Business Name</h2>
          <p>Address</p>
          <p>Phone number</p>
        </div>
        <div className='footer-right'>
          <p>Opening days</p>
          <p>Days of closure</p>
          <p>Hours of operation</p>
          <p>Bookings recommended</p>
          <p>Email link</p>
        </div>
      </motion.div>
    </Footer>
  )
}

export default FooterComponent;