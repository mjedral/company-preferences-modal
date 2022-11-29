import styled from 'styled-components';
import { px } from '../../tools/css';

export const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: ${px(80)};
  width: 100%;
`;

export const Header = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['18px']};
  font-weight: 600;
`;
