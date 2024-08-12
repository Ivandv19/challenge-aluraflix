
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import Card from '../Card';
import BotonCategoria from '../BotonCategoria';
import { useEffect, useState } from 'react';

const BackendContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CategoryStyled = styled.section`
  /* Estilos de tu categoría */
`;

const CardsBackendStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`;

// Componente que muestra los videos de la categoría "BACK END"
const BackEnd = () => {
  // Obtener los videos del contexto global
  const { videos } = useGlobalContext();
  // Filtrar los videos por la categoría "BACK END"


  const [videosListadosBackend, setVideosListadosBackend] = useState([]);

  useEffect(() => {
    const backendVideos = videos.filter(video => video.Categoria === 'BACK END');
    setVideosListadosBackend(backendVideos);
  }, [videos]);

  console.log('videosListadosBackend', videosListadosBackend);

  return (
    <BackendContainer>
      <CategoryStyled>
        {/* Mostrar el botón de categoría "BACK END" */}
        <BotonCategoria Categoria={'BACK END'}></BotonCategoria>
      </CategoryStyled>
      <CardsBackendStyled>
        {/*Mapear los videos de la categoría "BACK END" y mostrarlos en tarjetas */}
        {videosListadosBackend.map(video => (
          <Card key={video.id}
            src={video.ImagenURL}
            alt={`imgcard-${video.id}`}
            idVideo={video.id}
            Categoria={video.Categoria}
          />
        ))}
      </CardsBackendStyled>
    </BackendContainer>
  );
};

export default BackEnd;