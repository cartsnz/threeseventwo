import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../lib/theme";

const MobileNavStyles = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
`

export default MobileNavStyles;