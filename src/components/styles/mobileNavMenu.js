import styled from "styled-components";
import { motion } from "framer-motion";

const MobileNavMenuStyles = styled(motion.ul)`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100px;
  width: 230px;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  list-style: none;
  line-height: 2;

  li {
    padding: 0.5rem 0;
  }

  a {
    font-size: 1.5rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: ${({theme}) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #ccc;
    }
  }
`

export default MobileNavMenuStyles;

/*
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
*/