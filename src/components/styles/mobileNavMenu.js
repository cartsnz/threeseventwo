import styled from "styled-components";
import { motion } from "framer-motion";

const MobileNavMenu = styled(motion.ul)`
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

export default MobileNavMenu;
