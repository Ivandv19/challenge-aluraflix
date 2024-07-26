import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards/Index';
import Modal from '../../components/Modal';
import GlobalStyles from '../../components/GlobalStyles';
import { GlobalProvider } from '../../contexts/GlobalContext';

const MainStyled = styled.main`
  width: 100%;
  height: auto;
  background-color: ${hexToRgba('#000000', 0.90)};
  padding: 125px 0 0 0;
`;

const Main = () => {
  return (
    <>
      <GlobalStyles /> {/* Asegúrate de que GlobalStyles esté correctamente configurado */}
      <MainStyled>
        <GlobalProvider> {/* GlobalProvider para proporcionar contexto global */}
          <Banner />
          <Cards />
          <Modal />
        </GlobalProvider>
      </MainStyled>
    </>
  );
};

export default Main;