import React from 'react'
import styled from 'styled-components';
import BotonDelete from '../BotonDelete';
import BotonEdit from '../BotonEdit';

const CardStyled = styled.div`
  width: 430px;
  height: auto;
  border-radius: 15px 15px 0px 0px;

  @media (max-width: 755px) {
    width: 100%;
    height: auto;
  }
`;

const VideoCard = styled.div`
width: 100%;
box-shadow: ${(props) => (props.color ? `2px 2px 25px 0px ${props.color}` : 'transparent')};
border-radius: 15px 15px 0px 0px;

img {
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0px 0px;
  
}

@media (max-width: 755px) {
    width: 100%;
    height: auto;
  }


`;

const DeleteyEdit = styled.div`
  display: flex;
  width: 100%;
  height: 59px;
  border-radius: 0px 0px 15px 15px;
  border-style: solid;
  border-color: ${(props) => props.color || '#6bd1ff'};
  box-shadow: ${(props) => (props.color ? `2px 2px 25px 0px ${props.color}` : 'transparent')};
  background-color: #000000e5;
  justify-content: center;

  @media (max-width: 755px) {
    width: 100%;
    height: auto;
  }
`;

const DyEContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 15px 0;

  @media (max-width: 755px) {
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    gap: 2vw;
  }
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
      <VideoCard color={color}>
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