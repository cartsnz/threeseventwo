import styled from "styled-components";

const HeaderStyles = styled.header`
  border-bottom: 1px solid ${({theme}) => theme.primaryDark};
  color: ${({theme}) => theme.primaryDark};
  display: flex;
  justify-content: space-around;
  padding: 1rem 1rem;
  width: 100%;

  position: ${props => props.scrolled ? "fixed" : "static"};
  top: 0;
  left: 0;
  background-color: #fff;

`

export default HeaderStyles;