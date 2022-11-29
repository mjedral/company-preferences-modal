import styled from 'styled-components';
import { px } from '../../tools/css';

export const StyledCloseButton = styled.a`
  position: absolute;
  right: 34.5%;
  display: 'flex';
  align-items: 'center';
  background: 'transparent';
  border: 'none';
`;

export const StyledCloseIcon = styled.img`
  width: ${px(16)};
  height: ${px(16)};
  &:hover {
    cursor: 'pointer';
  }
`;
