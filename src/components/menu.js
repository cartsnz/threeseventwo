import * as React from 'react';
import { useState } from 'react';
import MenuBlock from './menuBlock';
import Button from './styles/button';
import MenuContainer from './styles/menuContainer';

const Menu = () => {
  const [isPrimary, togglePrimary] = useState(true);

  return (
  <>
    <MenuContainer>
      <div className='menu-buttons'>
        <Button type='button' active={isPrimary} onClick={() => togglePrimary(true)}>
          Primary Menu
        </Button>
        <Button type='button' active={!isPrimary} onClick={() => togglePrimary(false)}>
          Secondary Menu
        </Button>
      </div>
      <div className='menu-blocks'>
        <MenuBlock type={isPrimary ? "primary" : "secondary"} />
      </div>
    </MenuContainer>
  </>
  )
}

export default Menu;