import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

const Boton = styled.button`
  width: 180.13px;
  height: 54px;
  background-color: ${(props) => (props.selected ? hexToRgba('#000000E5', 0.90) : 'transparent')};
  color: ${(props) => (props.selected ? '#2271D1' : 'white')};
  border: 2px solid ${(props) => (props.selected ? '#2271D1' : '#F5F5F5')};
  border-radius: 15px;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  box-shadow: ${(props) => (props.selected ? '0px 0px 12px 4px #2271D1 inset' : 'none')};
`;

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavStyled>
      <Boton
        selected={location.pathname === '/'}
        onClick={() => navigate('/')}
      >
        HOME
      </Boton>
      <Boton
        selected={location.pathname === '/nuevovideo'}
        onClick={() => navigate('/nuevovideo')}
      >
        NUEVO VIDEO
      </Boton>
    </NavStyled>
  );
}

export default Nav;