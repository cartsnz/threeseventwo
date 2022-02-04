import * as React from 'react';
import NavItem from './navItem';
import MobileNavMenuStyles from './styles/mobileNavMenu';

const MobileNavMenu = ({ open }) => {
  return(
    <MobileNavMenuStyles open={open}>
      <NavItem route="/" title="Home" />
      <NavItem route="/" title="About us" />
      <NavItem route="/menu" title="Menus" />
      <NavItem route="/book" title="Book" />
      <NavItem route="/location" title="Where we are" />
      <NavItem route="/gifts" title="Gift Vouchers" />
    </MobileNavMenuStyles>
  )
}

export default MobileNavMenu;