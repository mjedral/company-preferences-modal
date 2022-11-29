import styled from 'styled-components';
import { px } from '../../tools/css';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.container};
  background-color: ${({ theme }) => theme.colors.button};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  border: none;
  border-radius: ${px(6)};
  width: ${px(144)};
  height: ${px(45)};

  &:hover {
    cursor: pointer;
  }
`;
