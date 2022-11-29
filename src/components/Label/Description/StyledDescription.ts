import styled from 'styled-components';
import { px } from '../../../tools/css';

export const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${px(8)};
`;

export const CompanyNumber = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  margin-right: ${px(8)}; ;
`;

export const CompanyName = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: ${px(100)};
`;

export const GreenCircle = styled.img`
  margin-right: ${px(6)};
  width: ${px(8)};
`;
