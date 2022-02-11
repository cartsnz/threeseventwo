import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: ${({theme}) => theme.primaryDark};
  color: ${({theme}) => theme.primaryLight};
  padding: 30px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`

export default FooterStyles;