
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import Categoría from '../BotonCategoria';
import Card from '../Card';


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
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`;

// Componente que muestra los videos de la categoría "INNOVACIÓN Y GESTIÓN"
const InnoyGest = () => {
  // Obtener los videos del contexto global
  const { videos } = useGlobalContext();
  // Filtrar los videos por la categoría "INNOVACIÓN Y GESTIÓN"
  const iygVideos = videos.filter(video => video.Categoria === 'INNOVACIÓN Y GESTIÓN');

  return (
    <FrontendContainer>
      <CategoryStyled>
        {/* Mostrar el botón de categoría "INNOVACIÓN Y GESTIÓN"  */}
        <Categoría Categoria={'INNOVACIÓN Y GESTIÓN'}></Categoría>
      </CategoryStyled>
      <CardsFrontendStyled>
        {/* Mapear los videos de la categoría "INNOVACIÓN Y GESTIÓN" y mostrarlos en tarjetas */}
        {iygVideos.map(video => (
          <Card key={video.id} src={video.ImagenURL} alt={`imgcard-${video.id}`} idVideo={video.id} />
        ))}
      </CardsFrontendStyled>
    </FrontendContainer>
  );
};

export default InnoyGest;