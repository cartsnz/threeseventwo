import styled from "styled-components";
import { motion } from "framer-motion";

const Header = styled(motion.header)`
  color: ${({theme}) => theme.primaryDark};
  display: flex;
  justify-content: space-around;
  padding: 1rem 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

export default Header;