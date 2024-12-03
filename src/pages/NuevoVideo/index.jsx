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

const ErroresContainer = styled.p`
  color: red;
  font-family: 'SourceSansProRegular';
  font-weight: 400;
`;

const MensajeExito = styled.p`
  color: green;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
`;

const MensajeError = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
`;

function NuevoVideo() {
  const { postVideo } = useGlobalContext();

  // Estados locales para los campos del formulario
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('frontend');
  const [imagenURL, setImagenURL] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Estados para los errores
  const [errores, setErrores] = useState({
    titulo: '',
    imagenURL: '',
    videoURL: '',
    descripcion: '',
  });

  // Estado para los mensajes
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState(''); // Estado para el mensaje de error

  // Función de validación para URLs
  const esURLValida = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  // Función para limpiar el error cuando se hace clic en el campo
  const handleFocus = (campo) => {
    setErrores((prev) => ({ ...prev, [campo]: '' }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    let erroresEncontrados = {};

    // Verificar que los campos no estén vacíos
    if (!titulo) erroresEncontrados.titulo = 'El título es obligatorio.';
    if (!imagenURL)
      erroresEncontrados.imagenURL = 'La URL de la imagen es obligatoria.';
    if (!videoURL)
      erroresEncontrados.videoURL = 'La URL del video es obligatoria.';
    if (!descripcion)
      erroresEncontrados.descripcion = 'La descripción es obligatoria.';

    // Validar si las URLs de la imagen y el video son válidas
    if (imagenURL && !esURLValida(imagenURL)) {
      erroresEncontrados.imagenURL = 'La URL de la imagen no es válida.';
    }
    if (videoURL && !esURLValida(videoURL)) {
      erroresEncontrados.videoURL = 'La URL del video no es válida.';
    }

    // Si hay errores, actualizar el estado de los errores
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
      return;
    }

    // Si todo es válido, enviamos el formulario
    const nuevoVideo = {
      Titulo: titulo,
      Categoria: categoria,
      ImagenURL: imagenURL,
      VideoURL: videoURL,
      Descripcion: descripcion,
    };

    try {
      await postVideo(nuevoVideo);

      // Limpiar el formulario después de enviar los datos
      setTitulo('');
      setCategoria('frontend');
      setImagenURL('');
      setVideoURL('');
      setDescripcion('');
      setErrores({}); // Limpiar errores
      setMensajeExito('El video se ha guardado correctamente.'); // Mostrar mensaje de éxito
      setMensajeError(''); // Limpiar el mensaje de error
    } catch (error) {
      console.error('Error al guardar el video:', error);
      setMensajeExito(''); // Limpiar el mensaje de éxito si hay error
      setMensajeError(
        'Hubo un error al intentar guardar el video. Por favor, intenta nuevamente.',
      ); // Mostrar mensaje de error
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
              onChange={(e) => setTitulo(e.target.value)}
              onFocus={() => handleFocus('titulo')}
              placeholder="Ingrese el título del video"
            />
            {errores.titulo && (
              <ErroresContainer>{errores.titulo}</ErroresContainer>
            )}
          </DivStyled>
          <DivStyled>
            <InputLabel>Categoría</InputLabel>
            <SelectField
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="FRONT END">Frontend</option>
              <option value="BACK END">Backend</option>
              <option value="INNOVACIÓN Y GESTIÓN">Innovación y Gestión</option>
            </SelectField>
          </DivStyled>
          {/* Sección de Imagen y Video */}
          <DivStyled>
            <InputLabel>Imagen (URL)</InputLabel>
            <InputField
              type="text"
              value={imagenURL}
              onChange={(e) => setImagenURL(e.target.value)}
              onFocus={() => handleFocus('imagenURL')}
              placeholder="Ingrese la URL de la imagen"
            />
            {errores.imagenURL && (
              <ErroresContainer>{errores.imagenURL}</ErroresContainer>
            )}
          </DivStyled>
          <DivStyled>
            <InputLabel>Video (URL)</InputLabel>
            <InputField
              type="text"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              onFocus={() => handleFocus('videoURL')}
              placeholder="Ingrese la URL del video"
            />
            {errores.videoURL && (
              <ErroresContainer>{errores.videoURL}</ErroresContainer>
            )}
          </DivStyled>
        </GridContainer>
        <DescriptionContainer>
          {/* Sección de Descripción */}
          <DivStyled>
            <InputLabel>Descripción</InputLabel>
            <TextAreaField
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              onFocus={() => handleFocus('descripcion')}
              rows={5}
              placeholder="Ingrese una descripción del video"
            />
            {errores.descripcion && (
              <ErroresContainer>{errores.descripcion}</ErroresContainer>
            )}
          </DivStyled>
        </DescriptionContainer>
        <BlocksStyled>
          <ButtonContainer>
            {/* Botón de Guardar */}
            <Button type="submit">Guardar</Button>
            {/* Botón de Limpiar */}
            <Button
              type="button"
              onClick={() => {
                setTitulo('');
                setCategoria('frontend');
                setImagenURL('');
                setVideoURL('');
                setDescripcion('');
                setErrores({}); // Limpiar errores
                setMensajeExito(''); // Limpiar mensaje de éxito
                setMensajeError(''); // Limpiar mensaje de error
              }}
            >
              Limpiar
            </Button>
          </ButtonContainer>
        </BlocksStyled>

        {/* Mensajes de éxito y error */}
        {mensajeExito && <MensajeExito>{mensajeExito}</MensajeExito>}
        {mensajeError && <MensajeError>{mensajeError}</MensajeError>}
      </FormContainer>
    </NuevosVideosContainer>
  );
}

export default NuevoVideo;
