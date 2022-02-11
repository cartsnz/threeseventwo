import styled from "styled-components";
import { theme } from "../../lib/theme";

const primaryDark = theme.primaryDark;
const primaryLight = theme.primaryLight;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({theme}) => theme.primaryDark};
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({theme}) => theme.primaryLight};
  color: ${({theme}) => theme.primaryDark};

  // Adjust based on active state of button
  background-color: ${props => props.active ? `${primaryDark}` : `${primaryLight}`};
  color: ${props => props.active ? `${primaryLight}` : `${primaryDark}`};
`

export default Button;