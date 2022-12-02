import React, { useContext, useMemo } from 'react';

type ModalContextProps = {
  close: () => void;
  open: () => void;
}

export const ModalContext = React.createContext<ModalContextProps>(
  {close, open}
);

export const useModalContext = () => {
  return useContext(ModalContext);
};

type ModalContextProviderProps = {
  close: () => void;
  open: () => void;
  children: React.ReactNode;
};

export const ModalContextProvider = ({ close, open, children }: ModalContextProviderProps) => {
  const context = useMemo(() => {
    return {
      close,
      open,
    };
  }, [close, open]);

  ModalContext.Provider;

  return <ModalContext.Provider value={context}>{children}</ModalContext.Provider>;
};
