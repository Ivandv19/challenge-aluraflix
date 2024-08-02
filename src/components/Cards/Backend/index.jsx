import React from 'react';
import styled from 'styled-components';

import { useGlobalContext } from '../../../contexts/GlobalContext';

const BackendContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CategoryStyled = styled.section`
  /* Estilos de tu categoría */
`;

const CardsBackendStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`;

const CardStyled = styled.div`
  /* Estilos de tus tarjetas */
`;

const ButtonStyled = styled.button`
  width: 432px;
  height: 70px;
  border-radius: 15px;
  background: var(--BackEnd, #00C86F);
  border: none;
  font-weight: 800;
  font-size: 32px;
  line-height: 37.5px;
  text-align: center;
  color: #f5f5f5;
  font-family: 'Roboto';
`;

const VideoCard = styled.div`
  width: 429.19px;
  height: 260.85px;
`;

const DyEContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 15px 0;
`;

const DeleteyEdit = styled.div`
  display: flex;
  width: 440px;
  height: 59px;
  border-radius: 0px 0px 15px 15px;
  border-style: solid;
  border-color: var(--BackEnd, #00C86F);
  box-shadow: 0px -4px 5px 3px #00C86F inset;
  background-color: #000000e5;
  justify-content: center;
`;

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 16px;
  line-height: 18.75px;
  cursor: pointer;
`;

const Edit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 16px;
  line-height: 18.75px;
  cursor: pointer;
`;

const BackEnd = () => {

  const { useVideos, openModal, deleteVideo } = useGlobalContext();

  // Filtrar los videos por la categoría "BACK END"
  const backendVideos = useVideos.filter(video => video.Categoria === 'BACK END');

  const handleDeleteClick = async (id) => {
    try {
      await deleteVideo(id); // Llama a la función deleteVideo con el id del video
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <BackendContainer>
      <CategoryStyled>
        <ButtonStyled>BACK END</ButtonStyled>
      </CategoryStyled>
      <CardsBackendStyled>
        {backendVideos.map(video => (
          <CardStyled key={video.id}>
            <VideoCard>
              <img src={video.ImagenURL} alt={`imgcard-${video.id}`} />
            </VideoCard>
            <DeleteyEdit>
              <DyEContainer>
                <Delete onClick={() => handleDeleteClick(video.id)}>
                  <img src="/img/icon-delete.png" alt="Icon Delete" />
                  <p>BORRAR</p>
                </Delete>
                <Edit onClick={openModal}>
                  <img src="/img/icon-edit.png" alt="Icon edit" />
                  <p>EDITAR</p>
                </Edit>
              </DyEContainer>
            </DeleteyEdit>
          </CardStyled>
        ))}
      </CardsBackendStyled>
    </BackendContainer>
  );
};

export default BackEnd;