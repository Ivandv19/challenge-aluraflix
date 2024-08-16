import React from 'react'
import styled from 'styled-components';
import BotonDelete from '../BotonDelete';
import BotonEdit from '../BotonEdit';

const CardStyled = styled.div`
  width: 430px;
  height: auto;

  

`;

const VideoCard = styled.div`
width: 100%;
box-shadow: ${(props) => (props.color ? `2px 2px 25px 0px ${props.color}` : 'transparent')};

img {
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
      <VideoCard color={color}>
        <img src={src} alt={alt} />
      </VideoCard>
      <DeleteyEdit color={color}>
        <DyEContainer>
          <BotonDelete idVideo={idVideo} />
          <BotonEdit idVideo={idVideo}/>
        </DyEContainer>
      </DeleteyEdit>
    </CardStyled>
  )
}

export default Card