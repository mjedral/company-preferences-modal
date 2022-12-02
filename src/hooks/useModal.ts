import { useState } from 'react';

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const openModal = () => {
    setisOpen(!isOpen);
  };

  const closeModal = () => {
    setisOpen(!isOpen);
  };


  return {
    isOpen,
    openModal,
    closeModal
  };
}
