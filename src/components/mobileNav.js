import * as React from 'react';
import MobileNavStyles from './styles/mobileNav';

const MobileNav = ({ open, setOpen }) => {
  return (
    <MobileNavStyles open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </MobileNavStyles>
  )
}

export default MobileNav;