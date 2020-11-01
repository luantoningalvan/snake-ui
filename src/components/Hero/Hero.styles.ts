import styled from "styled-components";
import defaultTheme from "../theme/defaultTheme";

export const HeroContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.paper};
  padding: 40px 30px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .hero-actions {
    margin-top: 16px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.palette.text.primary};
  }

  p {
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;

HeroContainer.defaultProps = { theme: defaultTheme };
