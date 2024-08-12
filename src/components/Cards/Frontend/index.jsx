
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import Card from '../Card';
import BotonCategoria from '../BotonCategoria';
import { useEffect, useState } from 'react';


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
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
 
`;

const Frontend = () => {
  // Obtener los videos del contexto global
  const { videos } = useGlobalContext();

  // Filtrar los videos por la categoría "FRONT END"
  const [videosListadosFrontend, setVideosListadosFrontend] = useState([]);

  useEffect(() => {
    // Filtrar los videos por la categoría "FRONT END" y actualizar el estado
    const videosFiltrados = videos.filter(video => video.Categoria === 'FRONT END');
    setVideosListadosFrontend(videosFiltrados);
  }, [videos]); // Dependencia en `videos` para actualizar si cambia

  console.log('videos listados del front ', videosListadosFrontend);

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