import React, { useContext, useMemo } from 'react';

export const ModalContext = React.createContext<{ closeModal: () => void } | null>(null);

export const useModal = () => {
  return useContext(ModalContext);
};

type ModalContextProps = {
  closeModal: () => void;
  children: React.ReactNode;
};

export const ModalContextProvider = ({ closeModal, children }: ModalContextProps) => {
  const context = useMemo(() => {
    return {
      closeModal,
    };
  }, [closeModal]);

  ModalContext.Provider;

  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};
