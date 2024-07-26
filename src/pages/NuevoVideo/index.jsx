import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';


const NuevosVideosContainer = styled.div`
  background: rgba(25, 25, 25, 1);
  padding: 120px 0 0 0;
`;

const TitulosContainer = styled.section`
  padding: 20px;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: 'SourceSansProRegular';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: transparent;
  width: 470px;
  height: 62px;
  border-radius: 10px;
  background: rgba(25, 25, 25, 1);
  border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: transparent;
  width: 470px;
  height: 62px;
  border-radius: 10px;
  background: rgba(25, 25, 25, 1);
  border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
  color: white;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 573px;
  height: 220px;
  border-radius: 15px;
  border: 3px solid #191919;
  background-color: transparent;
  background: rgba(25, 25, 25, 1);
  color: white;
`;

const Button = styled.button`
  width: 180.13px;
  height: 54px;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid rgba(34, 113, 209, 1);
  font-family: 'SourceSansProRegular';
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
`;

const BlocksStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  font-family: 'Roboto';
  color: #F5F5F5;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  text-align: center;
  font-family: 'Roboto';
  color: #F5F5F5;
`;

const H3 = styled.h3`
  font-family: 'SourceSansProRegular';
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  color: #FFFFFF;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const NuevoVideo = () => {
 
  const { postVideo } = useGlobalContext();
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('frontend');
  const [imagenURL, setImagenURL] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVideo = {
      Titulo: titulo,
      Categoria: categoria,
      ImagenURL: imagenURL,
      VideoURL: videoURL,
      Descripcion: descripcion,
    };

    try {
      await postVideo(newVideo);

      // Limpiar el formulario después de enviar los datos
      setTitulo('');
      setCategoria('frontend');
      setImagenURL('');
      setVideoURL('');
      setDescripcion('');

      alert('El video se ha guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar el video:', error);
      alert('Hubo un error al intentar guardar el video. Por favor, intenta nuevamente.');
    }
  };

  return (
    <>
      <NuevosVideosContainer>
        <TitulosContainer>
          <H1>Nuevo video</H1>
          <H2>Complete el formulario para crear una nueva tarjeta de video</H2>
        </TitulosContainer>

        <FormContainer onSubmit={handleSubmit}>
          <BlocksStyled>
            <H3>Crear Tarjeta</H3>
          </BlocksStyled>

          <BlocksStyled>
            <DivStyled>
              <InputLabel>Título</InputLabel>
              <InputField
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ingrese el título del video"
              />
            </DivStyled>

            <DivStyled>
              <InputLabel>Categoría</InputLabel>
              <SelectField
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="FRONT END">Frontend</option>
                <option value="BACK END">Backend</option>
                <option value="INNOVACIÓN Y GESTIÓN">Innovación y Gestion</option>
              </SelectField>
            </DivStyled>
          </BlocksStyled>

          <BlocksStyled>
            <DivStyled>
              <InputLabel>Imagen (URL)</InputLabel>
              <InputField
                type="url"
                value={imagenURL}
                onChange={(e) => setImagenURL(e.target.value)}
                placeholder="Ingrese la URL de la imagen"
              />
            </DivStyled>

            <DivStyled>
              <InputLabel>Video (URL)</InputLabel>
              <InputField
                type="url"
                value={videoURL}
                onChange={(e) => setVideoURL(e.target.value)}
                placeholder="Ingrese la URL del video"
              />
            </DivStyled>
          </BlocksStyled>

          <BlocksStyled>
            <DivStyled>
              <InputLabel>Descripción</InputLabel>
              <TextAreaField
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows={5}
                placeholder="Ingrese una descripción del video"
              />
            </DivStyled>
          </BlocksStyled>

          <BlocksStyled>
            <Button type="submit">Guardar</Button>
            <Button type="button" onClick={() => {
              setTitulo('');
              setCategoria('frontend');
              setImagenURL('');
              setVideoURL('');
              setDescripcion('');
            }}>Limpiar</Button>
          </BlocksStyled>
        </FormContainer>
      </NuevosVideosContainer>
    </>
  );
};

export default NuevoVideo;