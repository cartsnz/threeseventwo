import styled from "styled-components";

const HeaderStyles = styled.header`
  border-bottom: 1px solid ${({theme}) => theme.primaryDark};
  color: ${({theme}) => theme.primaryDark};
  display: flex;
  justify-content: space-around;
  padding: 2rem 1rem;
`

export default HeaderStyles;