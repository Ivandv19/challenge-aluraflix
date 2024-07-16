import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useGlobalContext } from '../../contexts/GlobalContext';


const Formulario = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: rgba(3, 18, 47, 1);
  padding: 20px;
  border-radius: 10px;
  width: 60vw;
  height: 97vh;
  border: 5px solid rgba(107, 209, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 200px;
  position: relative;
`;

const FormularioContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 60px;
  color: rgba(34, 113, 209, 1);
  text-align: center;
`;

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

const LabelStyled = styled.label`
  font-weight: 600;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 8px;
  font-family: SourceSansProRegular;
`;

const InputStyled = styled.input`
  color: rgba(165, 165, 165, 1);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border: 3px solid var(--Blue, rgba(34, 113, 209, 1));
  border-radius: 10px;
  padding: 16px 11px;
  background-color: transparent;
  margin-bottom: 16px;
  font-family: SourceSansProRegular;

  ::placeholder {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    font-family: SourceSansProRegular;
  }
`;

const SelectStyled = styled.select`
  color: rgba(165, 165, 165, 1);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border: 3px solid var(--Blue, rgba(34, 113, 209, 1));
  border-radius: 10px;
  padding: 16px 11px;
  background-color: transparent;
  margin-bottom: 16px;
  font-family: SourceSansProRegular;

  option {
    background-color: rgba(3, 18, 47, 1);
    color: rgba(165, 165, 165, 1);
    font-family: SourceSansProRegular;
  }
`;

const TextareaStyled = styled.textarea`
  color: rgba(165, 165, 165, 1);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border: 3px solid var(--Blue, rgba(34, 113, 209, 1));
  border-radius: 10px;
  padding: 16px 11px;
  background-color: transparent;
  margin-bottom: 16px;
  font-family: SourceSansProRegular;

  ::placeholder {
    color: #a5a5a5;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonStyled = styled.button`
  width: 180.13px;
  height: 54px;
  border-radius: 10px;
  border: 2px;
  color: white;
  background-color: #000000e5;
  border: 2px solid var(--Blue, #2271d1);
  box-shadow: 0px 0px 12px 4px #2271d1 inset;

  font-family: SourceSansProRegular;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
`;

const Modal = () => {

  const { useModal, closeModal } = useGlobalContext();

  const handleSave = async () => {
    // Lógica para guardar el formulario
    try {
      closeModal();
    } catch (error) {
      console.error('Error al guardar el formulario:', error);
      // Manejar el error
    }
  };

  return (
    <>
      {useModal && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton aria-label="Close" onClick={closeModal}>&times;</CloseButton>
            <FormularioContainer>
              <Formulario>
                <header>
                  <Title>EDITAR VIDEO</Title>
                </header>

                <SectionStyled>
                  <LabelStyled htmlFor="title">Título</LabelStyled>
                  <InputStyled
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Ingresa Título"
                  />

                  <LabelStyled htmlFor="category">Categoría</LabelStyled>
                  <SelectStyled
                    id="category"
                    name="category"
                    defaultValue="FRONT END"
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
                  />

                  <LabelStyled htmlFor="video">Video</LabelStyled>
                  <InputStyled
                    type="url"
                    id="video"
                    name="video"
                    placeholder="Ingresa Video"
                  />

                  <LabelStyled htmlFor="description">Descripción</LabelStyled>
                  <TextareaStyled
                    id="description"
                    name="description"
                    placeholder="Ingresa Descripción"
                  />
                </SectionStyled>

                <FooterStyled>
                  <ButtonStyled type="button" onClick={handleSave}>GUARDAR</ButtonStyled>
                  <ButtonStyled type="button" onClick={closeModal}>
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