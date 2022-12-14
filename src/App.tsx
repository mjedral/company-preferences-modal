import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button/Button';
import {
  GreenCircle,
  CompanyNumber,
  CompanyName,
} from './components/CompanyInfo/StyledCompanyInfo';
import { Container } from './components/Container/Container';
import { Description } from './components/Label/Description/Description';
import { Label } from './components/Label/Label';
import { Layout } from './components/Layout/Layout';
import { GlobalStyles } from './consts/globalStyles/globalStyles';
import { theme } from './consts/theme/theme';
import circle from './assets/icons/circle.svg';
import { ModalContainer } from './components/Modal/ModalContainer/ModalContainer';
import { CloseButton } from './components/Modal/CloseButton';
import useModal from './hooks/useModal';
import { ModalContextProvider } from './contexts/ModalContext';

function App(){

  const { isOpen, closeModal, openModal} = useModal()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <ModalContextProvider close={closeModal} open={openModal}>
          <Container>
            <Label text={'Selected company'}>
              <Description>
                <GreenCircle src={circle} alt='green circle' />
                <CompanyNumber>1-2300423445</CompanyNumber>
                <CompanyName>Flying Bisons</CompanyName>
              </Description>
            </Label>
            <Label text={'Chosen preferences'}>
              <Description>
                <span>You don’t have any preferences chosen.</span>
              </Description>
            </Label>
            <Button call={openModal}>Add preferences</Button>
          </Container>
          {isOpen ? (
            <ModalContainer>
              <span>Edit user’s privileges for a company</span>
              <CloseButton />
              <Label text={'Selected company'}>
                <Description>
                  <GreenCircle src={circle} alt='green circle' />
                  <CompanyNumber>1-2300423445</CompanyNumber>
                  <CompanyName>Flying Bisons</CompanyName>
                </Description>
              </Label>
            </ModalContainer>
          ) : null}
        </ModalContextProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
