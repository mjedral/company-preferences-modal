import React from 'react';
import { StyledCloseButton, StyledCloseIcon } from './StyledCloseButton';
import closeIcon from '../../assets/icons/close.svg';
import { useModalContext } from '../../contexts/ModalContext';

export const CloseButton = () => {
  const { close } = useModalContext();
  return (
    <StyledCloseButton onClick={close}>
      <StyledCloseIcon src={closeIcon} alt='close icon' />
    </StyledCloseButton>
  );
};
