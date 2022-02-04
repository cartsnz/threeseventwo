import styled from "styled-components";
import { device } from "../../lib/sizes";

const NavStyles = styled.nav`
  display: none;

  @media ${device.tablet} {
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
    color: var(--color-primary);
  }

  a:hover {
    text-decoration: underline;
  }
`

export default NavStyles;