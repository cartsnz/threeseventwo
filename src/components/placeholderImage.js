import * as React from 'react'
import styled from 'styled-components';

const Placeholder = styled.div`
  height: ${props => props.height || '75px'};
  width: ${props => props.width || '150px'};
  background-color: ${props => props.color || '#ccc'};
  border-radius: 0.5rem;
`

const PlaceholderImage = ({height, width, color}) => {
  return (
    <Placeholder height={height} width={width} color={color} />
  )
}

export default PlaceholderImage;