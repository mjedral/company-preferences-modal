import React from 'react';
import { StyledButton } from './StyledButton';

type ButtonProps = {
  children: React.ReactText;
  width?: string;
};

export const Button = ({ children, width }: ButtonProps) => {
  return <StyledButton style={{ width }}>{children}</StyledButton>;
};
