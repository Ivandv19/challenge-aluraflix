import { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';

const ButtonStyled = styled.button`
  width: 432px;
  height: 70px;
  border-radius: 15px;
  background: ${(props) => props.color || '#6bd1ff'};
  border: none;
  font-weight: 800;
  font-size: 32px;
  line-height: 37.5px;
  text-align: center;
  color: #f5f5f5;
  font-family: 'Roboto';
  cursor: pointer;
  box-shadow: ${(props) =>
    props.color ? `2px 2px 25px 0px ${props.color}` : 'transparent'};
  transition: border-color 0.25s;

  @media (max-width: 755px) {
    width: 100%;
    height: 60px;
    font-size: 5vw;
  }
`;

const categoryColors = {
  'FRONT END': '#6bd1ff', // Azul claro
  'INNOVACIÓN Y GESTIÓN': '#FFBA05', // Amarillo
  'BACK END': '#00C86F', // Verde
};

function BotonCategoria({ Categoria }) {
  // Definimos el color basado en la categoría, usando un color predeterminado si no se encuentra en 'categoryColors'
  const color = categoryColors[Categoria] || '#6bd1ff'; // Color predeterminado es azul claro

  // Obtenemos la función 'seleccionarCategoria' del contexto global
  const { seleccionarCategoria } = useGlobalContext();

  return (
    <ButtonStyled color={color} onClick={() => seleccionarCategoria(Categoria)}>
      {/* Mostramos el nombre de la categoría dentro del botón */}
      {Categoria}
    </ButtonStyled>
  );
}

export default BotonCategoria;
