import React from 'react';
import { StyledDescription } from './StyledDescription';
import circle from '../../../assets/icons/circle.svg';

type DescriptionProps = {
  children: React.ReactNode;
};

export const Description = ({ children }: DescriptionProps) => {
  return <StyledDescription>{children}</StyledDescription>;
};

{
  /* <GreenCircle src={circle} alt='green circle' />
<CompanyNumber>1-2300423445</CompanyNumber>
<CompanyName>Flying Bisons</CompanyName> */
}
