import React from 'react';
import { StyledCloseButton, StyledCloseIcon } from './StyledCloseButton';
import closeIcon from '../../assets/icons/close.svg';
import useModal from '../../hooks/useModal';

export const CloseButton = () => {
  const { isOpen, toggle } = useModal();
  console.log(isOpen);
  return (
    <StyledCloseButton onClick={toggle}>
      <StyledCloseIcon src={closeIcon} alt='close icon' />
    </StyledCloseButton>
  );
};
