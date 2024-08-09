
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

// Componente que muestra los videos de la categoría "FRONT END"
const Frontend = () => {
  // Obtener los videos del contexto global
  const { videos } = useGlobalContext();
  // Filtrar los videos por la categoría "FRONT END"
  const frontendVideos = videos.filter(video => video.Categoria === 'FRONT END');

  return (
    <FrontendContainer>
      <CategoryStyled>
        {/*Mostrar el botón de categoría "FRONT END" */}
        <Categoría Categoria={'FRONT END'}></Categoría>
      </CategoryStyled>
      <CardsFrontendStyled>
        {/*Mapear los videos de la categoría "FRONT END" y mostrarlos en tarjetas */}
        {frontendVideos.map((video) => (
          <Card key={video.id} src={video.ImagenURL} alt={`imgcard-${video.id}`} idVideo={video.id} Categoria={video.Categoria} />
        ))
        };
      </CardsFrontendStyled>
    </FrontendContainer>
  );
};

export default Frontend;