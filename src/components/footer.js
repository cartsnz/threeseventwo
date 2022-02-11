import * as React from 'react';
import FooterStyles from './styles/footer';

const Footer = () => {
  return (
    <FooterStyles>
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
    </FooterStyles>
  )
}

export default Footer;