import React from 'react';
import { Header, StyledLabel } from './StyledLabel';

type SelectedCompanyProps = {
  children: React.ReactNode;
  text: string;
};

export const Label = ({ children, text }: SelectedCompanyProps) => {
  return (
    <StyledLabel>
      <Header>{text}</Header>
      {children}
    </StyledLabel>
  );
};
