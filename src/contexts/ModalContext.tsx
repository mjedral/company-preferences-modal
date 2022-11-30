import React, { useContext, useMemo } from 'react';

export const ModalContext = React.createContext<{ close: () => void; open: () => void } | null>(
  null,
);

export const useModal = () => {
  return useContext(ModalContext);
};

type ModalContextProps = {
  close: () => void;
  open: () => void;
  children: React.ReactNode;
};

export const ModalContextProvider = ({ close, open, children }: ModalContextProps) => {
  const context = useMemo(() => {
    return {
      close,
      open,
    };
  }, [close, open]);

  ModalContext.Provider;

  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};
