import * as React from 'react';
import PlaceholderImage from './placeholderImage';
import MenuBlock from './styles/menuBlock';

/* TODO
  - Add logic to split the menu into two blockd based on total number of menu items
  - e.g. if there are 10 items, two blocks of 5; if there are 15, one block of 8 and one block of 7
  - Add additional styling to menu items
  - Add animation to menu block being rendered
*/

const variants = {
  start: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  },
  end: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  }
}

const MenuComponent = ({ type }) => {
  return(
    <>
      <MenuBlock 
        type={type}
        key={type}
        initial="end"
        animate="start"
        exit="end"
        variants={variants}
      >
          <div>
            <ul>
              <li>
                <div className='menu-block-item'>
                  <h4>Menu item name - {type}</h4>
                  <p>Menu item description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span>$0.00</span>  
                </div>
              </li>
              <li>
                <div className='menu-block-item'>
                  <h4>Menu item name - {type}</h4>
                  <p>Menu item description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span>$0.00</span>  
                </div>
              </li>
              <li>
                <div className='menu-block-item'>
                  <h4>Menu item name - {type}</h4>
                  <p>Menu item description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span>$0.00</span>  
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className='menu-block-item'>
                  <h4>Menu item name - {type}</h4>
                  <p>Menu item description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span>$0.00</span>  
                </div>
              </li>
              <li>
                <div className='menu-block-item'>
                  <h4>Menu item name - {type}</h4>
                  <p>Menu item description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span>$0.00</span>  
                </div>
              </li>
              <li>
                <div className='menu-block-item'>
                  <h4>Menu item name - {type}</h4>
                  <p>Menu item description - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <span>$0.00</span>  
                </div>
              </li>
            </ul>
          </div>
        </MenuBlock>
    </>
  )
}

export default MenuComponent;