import styled from "styled-components";
import { motion } from "framer-motion";

const MenuBlock = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: ${({theme}) => theme.mobile}) {
    grid-template-columns: 1fr;
  }

  .menu-block-item {
    display: grid;
    grid-template-areas: 
      "name name name . price"
      "desc desc desc desc ."
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h4 {
    grid-area: name;
  }

  p {
    grid-area: desc;
    font-style: italic;
  }

  span {
    grid-area: price;
    text-align: right;
  }
`;

export default MenuBlock;