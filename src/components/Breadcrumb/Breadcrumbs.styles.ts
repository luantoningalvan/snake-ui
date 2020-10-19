import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  align-items: center;

  li + li {
    display: flex;
    align-items: center;
    &::before {
      content: '>';
      margin: 0px 8px;
      font-size: 0.6em;
    }
  }

  > li,
  > li a {
    color: ${(props) => props.theme.palette.text.secondary};
  }

  > li a:hover {
    text-decoration: underline;
  }
`;
