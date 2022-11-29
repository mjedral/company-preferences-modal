import styled from 'styled-components';
import { px } from '../../../tools/css';

export const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const StyledBox = styled.div`
  display: block;
  background: white;
  width: 33%;
  height: 70%;
  padding: ${px(16)};
  border-radius: ${px(16)};
`;
