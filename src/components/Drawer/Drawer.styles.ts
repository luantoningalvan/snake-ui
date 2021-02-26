import styled from 'styled-components';
import defaultTheme from "../theme/defaultTheme";

export const DrawerContainer = styled.aside`
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.palette.primary};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0px;
  box-sizing: border-box;
`;
DrawerContainer.defaultProps = { theme: defaultTheme };

export const ClientIdentification = styled.div`
  margin: 0px 16px;
  display: flex;
  align-items: center;

  .text {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    flex: 1;
  }

  h3 {
    margin: 0;
    margin-bottom: 4px;
  }

  button {
    background: transparent;
    border-radius: 50%;
    padding: 8px;
    margin-right: -8px;
    cursor: pointer;
    border: none;
    color: #fff;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  span {
    font-size: 0.7rem;
  }
`;

export const Avatar = styled.div<{ url: string }>`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  background: url(${props => props.url});
  background-size: cover;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 0px 16px;
  line-height: 1rem;
`;

export const List = styled.nav``;

export const MenuItem = styled.li`
  list-style: none;

  > div {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.3rem;
    color: #fff;
    padding: 16px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  span {
    margin-left: 12px;
  }
`;
