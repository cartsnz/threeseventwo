import styled from "styled-components";

const NavStyles = styled.nav`
  display: none;

  @media (min-width: ${({theme}) => theme.mobile}) {
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.primaryDark};
  }

  a:hover {
    text-decoration: underline;
    color: ${({theme}) => theme.primaryHover};
  }
`

export default NavStyles;