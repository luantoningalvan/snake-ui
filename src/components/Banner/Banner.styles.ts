import styled from 'styled-components';

const colors = {
  info: '#33b5e5',
  success: '#00c851',
  error: '#f44',
  warning: '#fb3',
};

type BannerContainerProps = {
  color: 'info' | 'success' | 'error' | 'warning';
};

export const BannerContainer = styled.div<BannerContainerProps>`
  width: 100%;
  border-radius: 4px;
  padding: 8px 16px;
  background: ${props => colors[props.color]};
  color: black;
  text-align: center;
  box-sizing: border-box;
`;
