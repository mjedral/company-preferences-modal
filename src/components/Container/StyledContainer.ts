// TODO: styles for wrapper

import styled from 'styled-components';
import { px } from '../../tools/css';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${px(16)};
  height: ${px(235)};
  border-radius: ${px(8)};
  width: 33%;
  background-color: ${({ theme }) => theme.colors.container};
  color: ${({ theme }) => theme.colors.font};
`;
