import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header/index,';
import Footer from '../../components/Footer/Footer';




const PaginaBase = () => {
  return (
    <>
      <GlobalStyles /> {/* Asegúrate de que GlobalStyles esté correctamente configurado */}
      <Header />
        <Outlet /> {/* Outlet para renderizar contenido de rutas anidadas */}
      <Footer/>
    
    
    </>
  );
};

export default PaginaBase;