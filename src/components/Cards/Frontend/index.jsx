import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import Card from '../Card';
import BotonCategoria from '../BotonCategoria';

const FrontendContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 755px) {
    justify-content: center;
    align-items: center;
  }
`;

const CardsFrontendStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
  width: 100%;

  @media (max-width: 755px) {
    display: flex;
    flex-direction: column;
  }
`;

const CategoryStyled = styled.section`
  @media (max-width: 755px) {
    width: 100%;
    height: auto;
  }
`;

const Frontend = () => {
  // Obtener los videos filtrados por la categoría "FRONT END" del contexto global
  const { videosListadosFrontend } = useGlobalContext();

  return (
    <FrontendContainer>
      <CategoryStyled>
        {/* Mostrar el botón de categoría "FRONT END" */}
        <BotonCategoria Categoria={'FRONT END'} />
      </CategoryStyled>
      <CardsFrontendStyled>
        {/* Mapear los videos de la categoría "FRONT END" y mostrarlos en tarjetas */}
        {videosListadosFrontend.map((video) => (
          <Card
            key={video.id}
            src={video.ImagenURL}
            alt={`imgcard-${video.id}`}
            idVideo={video.id}
            Categoria={video.Categoria}
          />
        ))}
      </CardsFrontendStyled>
    </FrontendContainer>
  );
};

export default Frontend;
