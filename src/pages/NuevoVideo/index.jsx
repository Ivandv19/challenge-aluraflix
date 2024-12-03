import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { useState } from 'react';

const NuevosVideosContainer = styled.div`
  background: rgba(25, 25, 25, 1);
  padding: 120px 0 50px 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 599px) {
    padding: 0;
  }
`;

const TitulosContainer = styled.section`
  padding: 20px;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  height: auto;
  gap: 50px;

  @media (min-width: 600px) and (max-width: 1199px) {
    padding: 20px 20px;
    gap: 0;
  }

  @media (max-width: 599px) {
    padding: 0 10px;
    padding-bottom: 100px;
    width: 100%;
    height: auto;
    gap: 20px;
    max-width: 100%; /* Elimina el max-width en pantallas pequeñas */
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: 'SourceSansProRegular';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  @media (max-width: 599px) {
    font-size: 15px;
  }
`;

const InputField = styled.input`
  width: 470px;
  height: 62px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 10px;
  background: rgba(25, 25, 25, 1);
  border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
  color: white;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const SelectField = styled.select`
  width: 470px;
  height: 62px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 10px;
  background: rgba(25, 25, 25, 1);
  border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
  color: white;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  min-height: 220px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 15px;
  border: 3px solid #191919;
  background-color: transparent;
  background: rgba(25, 25, 25, 1);
  border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
  color: white;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 180.13px;
  height: 54px;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid white;
  font-family: 'SourceSansProRegular';
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: black;
    box-shadow: 2px 2px 25px 0px rgba(34, 113, 209, 0.9);
    border: 2px solid rgba(34, 113, 209, 0.9);
    transition: border-color 0.25s;
  }

  @media (max-width: 599px) {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 10px;
    font-size: 16px;
  }
`;

const BlocksStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 600px) and (max-width: 1199px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      padding-bottom: 50px;
    }
  }

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  font-family: 'Roboto';
  color: #f5f5f5;

  @media (max-width: 599px) {
    font-size: 40px;
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  text-align: center;
  font-family: 'Roboto';
  color: #f5f5f5;

  @media (max-width: 599px) {
    font-size: 15px;
  }
`;

const H3 = styled.h3`
  font-family: 'SourceSansProRegular';
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  color: #ffffff;

  @media (max-width: 599px) {
    font-size: 30px;
  }
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 599px) {
    width: 100%;
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 599px) {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: auto;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;

  @media (min-width: 600px) and (max-width: 1199px) {
    display: flex;

    flex-direction: column;
  }

  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  height: auto;
`;

function NuevoVideo() {
  // Extrae la función postVideo del contexto global para enviar datos
  const { postVideo } = useGlobalContext();

  // Estados locales para cada uno de los campos del formulario
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('frontend');
  const [imagenURL, setImagenURL] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene la acción por defecto del formulario

    // Validación de campos obligatorios
    if (!titulo || !imagenURL || !videoURL || !descripcion) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Objeto que se enviará al servidor
    const newVideo = {
      Titulo: titulo,
      Categoria: categoria,
      ImagenURL: imagenURL,
      VideoURL: videoURL,
      Descripcion: descripcion,
    };

    try {
      // Llamada a la función del contexto global para guardar el video
      await postVideo(newVideo);

      // Limpiar el formulario después de enviar los datos
      setTitulo('');
      setCategoria('frontend');
      setImagenURL('');
      setVideoURL('');
      setDescripcion('');

      // Mensaje de confirmación
      alert('El video se ha guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar el video:', error);
      alert(
        'Hubo un error al intentar guardar el video. Por favor, intenta nuevamente.',
      );
    }
  };

  return (
    <NuevosVideosContainer>
      <TitulosContainer>
        <H1>Nuevo video</H1>
        <H2>Complete el formulario para crear una nueva tarjeta de video</H2>
      </TitulosContainer>
      <FormContainer onSubmit={handleSubmit}>
        <BlocksStyled>
          <H3>Crear Tarjeta</H3>
        </BlocksStyled>
        <GridContainer>
          {/* Sección de Título y Categoría */}
          <DivStyled>
            <InputLabel>Título</InputLabel>
            <InputField
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)} // Actualiza el estado del título
              placeholder="Ingrese el título del video"
            />
          </DivStyled>
          <DivStyled>
            <InputLabel>Categoría</InputLabel>
            <SelectField
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado de la categoría
            >
              <option value="FRONT END">Frontend</option>
              <option value="BACK END">Backend</option>
              <option value="INNOVACIÓN Y GESTIÓN">Innovación y Gestion</option>
            </SelectField>
          </DivStyled>
          {/* Sección de Imagen y Video */}
          <DivStyled>
            <InputLabel>Imagen (URL)</InputLabel>
            <InputField
              type="url"
              value={imagenURL}
              onChange={(e) => setImagenURL(e.target.value)} // Actualiza el estado de la URL de la imagen
              placeholder="Ingrese la URL de la imagen"
            />
          </DivStyled>
          <DivStyled>
            <InputLabel>Video (URL)</InputLabel>
            <InputField
              type="url"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)} // Actualiza el estado de la URL del video
              placeholder="Ingrese la URL del video"
            />
          </DivStyled>
        </GridContainer>
        <DescriptionContainer>
          {/* Sección de Descripción */}
          <DivStyled>
            <InputLabel>Descripción</InputLabel>
            <TextAreaField
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)} // Actualiza el estado de la descripción
              rows={5}
              placeholder="Ingrese una descripción del video"
            />
          </DivStyled>
        </DescriptionContainer>
        <BlocksStyled>
          <ButtonContainer>
            {/* Botón de Guardar */}
            <Button type="submit">Guardar</Button>
            {/* Botón de Limpiar, que restablece todos los campos */}
            <Button
              type="button"
              onClick={() => {
                setTitulo('');
                setCategoria('frontend');
                setImagenURL('');
                setVideoURL('');
                setDescripcion('');
              }}
            >
              Limpiar
            </Button>
          </ButtonContainer>
        </BlocksStyled>
      </FormContainer>
    </NuevosVideosContainer>
  );
}

export default NuevoVideo;
