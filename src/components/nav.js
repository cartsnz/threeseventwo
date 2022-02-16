import * as React from 'react'
import Nav from './styles/nav';
import NavItem from './navItem';
import HeaderLogo from './headerLogo';
import { navigationItems } from '../lib/navigationItems';

const leftNavItems = navigationItems.slice(0, 3);
const rightNavItems = navigationItems.slice(3, 6);

const NavComponent = () => {
  return(
    <Nav>
    <ul>
      {leftNavItems.map(item => (
        <li key={item.title}>
          <NavItem title={item.title} route={item.route} />
        </li>
      ))}
     </ul>
     <HeaderLogo title="ThreeSevenTwo" route="/" />
     <ul>
      {rightNavItems.map(item => (
        <li key={item.title}>
          <NavItem title={item.title} route={item.route} />
        </li>
      ))}
    </ul>
    </Nav>
  )
}

export default NavComponent;