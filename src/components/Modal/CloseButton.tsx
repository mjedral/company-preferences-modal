import React from 'react';
import { StyledCloseButton, StyledCloseIcon } from './StyledCloseButton';
import closeIcon from '../../assets/icons/close.svg';

export const CloseButton = () => {
  return (
    <StyledCloseButton>
      <StyledCloseIcon src={closeIcon} alt='close icon' />
    </StyledCloseButton>
  );
};
