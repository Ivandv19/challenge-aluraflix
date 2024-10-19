import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { useGlobalContext } from '../../contexts/GlobalContext';

// Definir la animación de zoom
const zoomIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;


const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    padding: 30px 20px;
    height: auto;
    gap: 30px;
  }
 
`;

const imageUrl = '/img/cross.png';

const CloseButton = styled.button`
  background: url(${imageUrl}) no-repeat center center;
  background-size: contain; /* Ajusta el tamaño de la imagen de fondo */
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 755px){
    width: 10vw;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0px;
    box-sizing: border-box;
    width: 100%;
    max-height: 100vh; /* Ajusta la altura máxima del modal */
    overflow-y: auto; /* Habilita el scroll dentro del modal */
    
  }
  
`;

const ModalContent = styled.div`
  background-color: rgba(25, 25, 25, 1);
  border-radius: 10px;
  width: 1000px;
  height: 90%;
  border: 3px solid var(--Blue, rgba(34, 113, 209, 1));
  box-shadow: 2px 2px 30px 0px var(--Blue, rgba(34, 113, 209, 1));
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px;
  position: relative;
  animation: ${zoomIn} 0.3s ease-out;

  @media (max-width: 600px) {
    padding: 0;
    box-sizing: border-box;
    position: fixed; /* Fija el modal en la pantalla */
    width: 100%;
     max-height: 100vh; /* Ajusta la altura máxima del modal */
    overflow-y: auto; /* Habilita el scroll dentro del modal */
  }
  
`;

const FormularioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 60px;
  color: white;
  width: 100%;
  height: auto;
  margin: 0;
  text-align: center;

  @media (max-width: 599px) {
    font-size: 30px;
  }
`;

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const LabelStyled = styled.label`
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin-bottom: 8px;
  font-family: SourceSansProRegular;

  @media (max-width: 599px) {
    font-size: 15px;
  }
`;

const InputStyled = styled.input`

  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  padding: 16px 11px;
  background-color: transparent;
  margin-bottom: 16px;
  font-family: SourceSansProRegular;


  background: rgba(25, 25, 25, 1);
  border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
  color: rgba(165, 165, 165, 1);

  ::placeholder {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    font-family: SourceSansProRegular;
  }

  @media (max-width: 599px) {
    font-size: 16px;
  }

 
`;

const SelectStyled = styled.select`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  padding: 16px 11px;
  background-color: transparent;
  margin-bottom: 16px;
  font-family: SourceSansProRegular;
  background: rgba(25, 25, 25, 1);
  border: 3px solid ${(props) => (props.color)};
  color: rgba(165, 165, 165, 1);

  option {
    background-color: rgba(25, 25, 25, 1);
    color: rgba(165, 165, 165, 1);
    font-family: SourceSansProRegular;
    
  }

  &:focus{
    outline: none;

  }

  @media (max-width: 599px) {
    font-size: 16px;
  }
`;

const TextareaStyled = styled.textarea`
  color: rgba(165, 165, 165, 1);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  padding: 16px 11px;
  margin-bottom: 16px;
  font-family: SourceSansProRegular;
  background-color: transparent;
  background: rgba(25, 25, 25, 1);


  ::placeholder {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    width: 100%;
   height: 20vh;
   font-size: 16px;
  }
`;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    gap: 15px;
  }
`;

const ButtonStyled = styled.button`
  width: 180.13px;
  height: 54px;
  border-radius: 10px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  font-family: SourceSansProRegular;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  

  &:hover{
    background-color: black;
    box-shadow: 2px 2px 25px 0px rgba(34, 113, 209, 0.9);
    border: 2px solid rgba(34, 113, 209, 0.9);
    transition: border-color 0.25s;
  }
  @media (max-width: 600px) {
    box-sizing: border-box;
    width: 100%;
    font-size: 17px;

  }
  
`;



const HeaderStyled = styled.header`
  width: 100%;
  height: auto;
 
`

const categoryColors = {
  'FRONT END': '#6bd1ff', // Azul claro
  'INNOVACIÓN Y GESTIÓN': '#FFBA05',  // Amarillo
  'BACK END': '#00C86F', // Verde
};


const Modal = () => {
  const { Modal, closeModal, videoAEditar, editVideo } = useGlobalContext();

  // Estado local para los inputs
  const [title, setTitle] = useState(videoAEditar.Titulo || '');
  const [category, setCategory] = useState(videoAEditar.Categoria || '');
  const [image, setImage] = useState(videoAEditar.ImagenURL || '');
  const [video, setVideo] = useState(videoAEditar.VideoURL || '');
  const [description, setDescription] = useState(videoAEditar.Descripcion || '');

  useEffect(() => {
    // Actualizar el estado cuando cambie el video a editar
    setTitle(videoAEditar.Titulo || '');
    setCategory(videoAEditar.Categoria || '');
    setImage(videoAEditar.ImagenURL || '');
    setVideo(videoAEditar.VideoURL || '');
    setDescription(videoAEditar.Descripcion || '');
  }, [videoAEditar]);


  const color = categoryColors[category]; // Color predeterminado
  console.log(category);




  const handleSave = async () => {
    // Validación de campos
    if (!title || !image || !video) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Lógica para guardar el formulario
    try {
      const updatedVideo = {
        Titulo: title,
        Categoria: category,
        ImagenURL: image,
        VideoURL: video,
        Descripcion: description
      };
      // Llama a la función para guardar los cambios en la base de datos
      await editVideo(videoAEditar.id, updatedVideo);
      closeModal();
    } catch (error) {
      console.error('Error al guardar el formulario:', error);
      // Manejar el error
    }
  };

  return (
    <>
      {Modal && (
        <ModalWrapper>
          <ModalContent color={color}>
            <CloseButton aria-label="Close" onClick={closeModal}></CloseButton>
            <FormularioContainer>
              <Formulario>
                <HeaderStyled>
                  <Title color={color}>EDITAR VIDEO</Title>
                </HeaderStyled>

                <SectionStyled>
                  <LabelStyled htmlFor="title">Título</LabelStyled>
                  <InputStyled
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Ingresa Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <LabelStyled htmlFor="category">Categoría</LabelStyled>
                  <SelectStyled
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    color={color}

                  >
                    <option value="FRONT END">Front End</option>
                    <option value="BACK END">Back End</option>
                    <option value="INNOVACIÓN Y GESTIÓN">Innovación y Gestión</option>
                  </SelectStyled>

                  <LabelStyled htmlFor="image">Imagen</LabelStyled>
                  <InputStyled
                    type="url"
                    id="image"
                    name="image"
                    placeholder="Ingresa Imagen"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />

                  <LabelStyled htmlFor="video">Video</LabelStyled>
                  <InputStyled
                    type="url"
                    id="video"
                    name="video"
                    placeholder="Ingresa Video"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                  />

                  <LabelStyled htmlFor="description">Descripción</LabelStyled>
                  <TextareaStyled
                    id="description"
                    name="description"
                    placeholder="Ingresa Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </SectionStyled>

                <FooterStyled>
                  <ButtonStyled type="button" onClick={handleSave} color={color}>GUARDAR</ButtonStyled>
                  <ButtonStyled type="button" onClick={closeModal} color={color}>
                    CANCELAR
                  </ButtonStyled>
                </FooterStyled>
              </Formulario>
            </FormularioContainer>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;