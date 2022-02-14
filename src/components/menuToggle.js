import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuToggleButton } from './styles/menuToggle';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
    />
);

/* TODO 
 - Adjust color of button based on if the item is open or not
 - Pass isOpen as a prop into PATH and adjust stroke based on that
*/

export const MenuToggle =({ toggle }) => {
  return (
  <MenuToggleButton onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { 
            d: "M 2 2.5 L 20 2.5",
            stroke: "#3d5588"
          },
          open: { 
            d: "M 3 16.5 L 17 2.5",
            stroke: "#FFF"
          }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { 
            opacity: 1,
            stroke: "#3d5588"
          },
          open: { 
            opacity: 0,
            stroke: "#FFF"
          }
        }}
        transition={{duration: 0.1}}
      />
      <Path
        variants={{
          closed: { 
            d: "M 2 16.346 L 20 16.346",
            stroke: "#3d5588"
          },
          open: { 
            d: "M 3 2.5 L 17 16.346",
            stroke: "#FFF"
          }
        }}
      />
    </svg>
  </MenuToggleButton>
  )
};

