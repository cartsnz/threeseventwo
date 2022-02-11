import * as React from 'react';
import PlaceholderImage from './placeholderImage';

const MenuBlock = ({ type }) => {

  let color = "#CCC";
  if (type == "primary") {
    color = "#999"
  } else {
    color = "#111"
  }

  return(
    <>
        <PlaceholderImage height="700px" width="100%" color={color} />
        <PlaceholderImage height="700px" width="100%" color={color} />
    </>
  )
}

export default MenuBlock;