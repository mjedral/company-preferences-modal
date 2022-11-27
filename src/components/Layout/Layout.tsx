import React from 'react';
import { StyledLayout } from './StyledLayout';

// TODO: remove unneccessary props

type Props = {
  children?: any;
  className?: string;
};

export const Layout: React.FC = ({ children, className }: Props) => {
  return <StyledLayout className={className}>{children}</StyledLayout>;
};
