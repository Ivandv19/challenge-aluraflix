import React from 'react';
import styled from 'styled-components';

import { useGlobalContext } from '../../../contexts/GlobalContext';


const FrontendContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CategoryStyled = styled.section`
  /* Estilos de tu categoría */
`;

const CardsFrontendStyled = styled.section`
  display: flex;
  flex-direction: row;
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
  background: var(--FrontEnd, #6bd1ff);
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
  border-color: var(--FrontEnd, #6bd1ff);
  box-shadow: 0px -4px 5px 3px #6bd1ff inset;
  background-color: #000000e5;
  justify-content: center;
`;

const Delete = styled.button`
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
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Edit = styled.button`
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
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Frontend = () => {
    const { useVideos, openModal, deleteVideo } = useGlobalContext();
    const frontendVideos = useVideos.filter(video => video.Categoria === 'FRONT END');

    const handleEditClick = () => {
        openModal(); // Abre el modal y pasa el video como argumento
    };

    const handleDeleteClick = async (id) => {
        try {
            await deleteVideo(id); // Llama a la función deleteVideo con el id del video
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <FrontendContainer>
            <CategoryStyled>
                <ButtonStyled>FRONT END</ButtonStyled>
            </CategoryStyled>

            <CardsFrontendStyled>
                {frontendVideos.map((video) => (
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

                                <Edit onClick={() => handleEditClick()}>
                                <img src="/img/icon-edit.png" alt="Icon edit" />
                                    <p>EDITAR</p>
                                </Edit>
                            </DyEContainer>
                        </DeleteyEdit>
                    </CardStyled>
                ))}
            </CardsFrontendStyled>
        </FrontendContainer>
    );
};

export default Frontend;