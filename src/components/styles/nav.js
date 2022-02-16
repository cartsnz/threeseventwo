import styled from "styled-components";

const Nav = styled.nav`
  display: none;

  @media (min-width: ${({theme}) => theme.mobile}) {
    display: flex;
    align-items: center;
    width: 80%;
  }

  ul {
    display: flex;
    flex: 1 1 40%;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  div {
    flex: 0 0 20%;
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
    text-underline-offset: 0.3rem;
    color: ${({theme}) => theme.primaryHover};
  }

  a[aria-current] {
    font-weight: bold;
    color: ${({theme}) => theme.primaryHover};
  }
`

export default Nav;