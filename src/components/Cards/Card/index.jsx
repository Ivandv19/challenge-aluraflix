import React from 'react'
import styled from 'styled-components';
import BotonDelete from '../BotonDelete';
import BotonEdit from '../BotonEdit';

const CardStyled = styled.div`
  /* Estilos de tus tarjetas */
`;

const VideoCard = styled.div`
  width: 429.19px;
  height: 260.85px;
`;

const DeleteyEdit = styled.div`
  display: flex;
  width: 440px;
  height: 59px;
  border-radius: 0px 0px 15px 15px;
  border-style: solid;
  border-color: ${(props) => props.color || '#6bd1ff'};
  box-shadow: 0px -4px 5px 3px ${(props) => props.color || '#6bd1ff'} inset;
  background-color: #000000e5;
  justify-content: center;
`;

const DyEContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 15px 0;
`;

const categoryColors = {
  'FRONT END': '#6bd1ff', // Azul claro
  'INNOVACIÓN Y GESTIÓN': '#FFBA05',  // Amarillo
  'BACK END': '#00C86F', // Verde
};


function Card({ src, idVideo, alt, Categoria }) {
  const color = categoryColors[Categoria] || '#6bd1ff'; // Color predeterminado
  return (
    <CardStyled>
      <VideoCard>
        <img src={src} alt={alt} />
      </VideoCard>
      <DeleteyEdit color={color}>
        <DyEContainer>
          <BotonDelete idVideo={idVideo} />
          <BotonEdit idVideo={idVideo} />
        </DyEContainer>
      </DeleteyEdit>
    </CardStyled>
  )
}

export default Card