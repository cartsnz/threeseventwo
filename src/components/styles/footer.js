import styled from "styled-components";

const FooterStyles = styled.footer`
  flex-shrink: 0;
  height: 200px;
  background-color: ${({theme}) => theme.primaryDark};
`

export default FooterStyles;