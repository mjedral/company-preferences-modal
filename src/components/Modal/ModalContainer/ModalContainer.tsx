import React from 'react';
import { StyledOverlay, StyledBox } from './StyledModalContainer';

type ModalContainerProps = {
  children: React.ReactNode;
};

export const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <StyledOverlay>
      <StyledBox>{children}</StyledBox>
    </StyledOverlay>
  );
};
