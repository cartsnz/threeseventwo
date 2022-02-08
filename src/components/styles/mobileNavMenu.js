import styled from "styled-components";

const MobileNavMenuStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({theme}) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 4rem 2rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({theme}) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({theme}) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ccc;
    }
  }
`

export default MobileNavMenuStyles;