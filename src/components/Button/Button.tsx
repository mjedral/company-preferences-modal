import React from 'react';
import { StyledButton } from './StyledButton';

type ButtonProps = {
  children: React.ReactText;
  width?: string;
  call?: () => void;
};

export const Button = ({ children, width, call }: ButtonProps) => {
  return (
    <StyledButton style={{ width }} onClick={call}>
      {children}
    </StyledButton>
  );
};
