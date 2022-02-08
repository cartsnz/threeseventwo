import * as React from 'react'
import styled from 'styled-components';

const Placeholder = styled.div`
  height: ${props => props.height || '75px'};
  width: ${props => props.width || '150px'};
  background-color: ${props => props.color || '#ccc'};
`

const PlaceholderImage = ({height, width, color}) => {
  return (
    <Placeholder height={height} width={width} color={color} />
  )
}

export default PlaceholderImage;