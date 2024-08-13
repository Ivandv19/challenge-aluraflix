import styled, { keyframes } from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';
import BotonCategoria from '../Cards/BotonCategoria';
import { useEffect, useRef, useState } from 'react';

const imageUrl = '/img/banner.png';

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

const BannerStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  padding: 250px 150px 155px 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
 
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30vw;
`;

const BannerMain = styled.div``;


const TitleStyled = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 46px;
  color: #f5f5f5;
`;

const PStyled = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #f5f5f5;
`;

const ContainerStyled = styled.section`
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 250px;
  animation: ${zoomIn} 0.8s ease-out;

`;

const BotonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  animation: ${zoomIn} 0.5s ease-out;
`

const PlayerStyled = styled.div``;

const Banner = () => {

  const { videos, categoriaSeleccionada, setCategoriaSeleccionada, videosListadosFrontend, videosListadosBackend, videosListadosInnoyGest } = useGlobalContext();

  const [videoMain, setVideoMain] = useState([]);

  // Lista de categorías
  const categorias = ['FRONT END', 'BACK END', 'INNOVACIÓN Y GESTIÓN'];

  // Ref para almacenar el identificador del intervalo
  const intervalRef = useRef(null);

  // Cambiar categoría automáticamente cada 10 segundos
  useEffect(() => {
    // Función para iniciar el intervalo
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setCategoriaSeleccionada(prevCategoria => {
          const currentIndex = categorias.indexOf(prevCategoria);
          const nextIndex = (currentIndex + 1) % categorias.length;
          return categorias[nextIndex];
        });
      }, 10000); // 10000 ms = 10 segundos
    };

    startInterval(); // Inicia el intervalo al montar el componente

    // Limpiar intervalo al desmontar el componente
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [setCategoriaSeleccionada, categorias]);

  // Efecto para actualizar videoMain cuando cambia categoriaSeleccionada
  useEffect(() => {
    let selectedVideos = [];

    // Seleccionar el array adecuado basado en categoriaSeleccionada
    switch (categoriaSeleccionada) {
      case 'FRONT END':
        selectedVideos = videosListadosFrontend;
        break;
      case 'BACK END':
        selectedVideos = videosListadosBackend;
        break;
      case 'INNOVACIÓN Y GESTIÓN':
        selectedVideos = videosListadosInnoyGest;
        break;
      default:
        selectedVideos = [];
    }
    // Establecer el primer video del array seleccionado
    if (selectedVideos.length > 0) {
      setVideoMain([selectedVideos[0]]);
    } else {
      const initialBannerVideo = videos.filter(video => video.id === '0');
      setVideoMain(initialBannerVideo);
    }
  }, [categoriaSeleccionada, videosListadosFrontend, videosListadosBackend, videosListadosInnoyGest]); // Incluye todas las dependencias necesarias



  return (
    <BannerStyled>
      <BotonContainer>
        <BotonCategoria Categoria={categoriaSeleccionada}></BotonCategoria>
      </BotonContainer>

      {videoMain.map((video) => (
        <ContainerStyled key={video.id}>
          <Card>
            <TitleStyled>{video.Titulo}</TitleStyled>
            <PStyled>{video.Descripcion}</PStyled>
          </Card>
          <BannerMain>
            <PlayerStyled>
              <img src={video.ImagenURL} alt="player" />
            </PlayerStyled>
          </BannerMain>
        </ContainerStyled>
      ))}
    </BannerStyled>
  );
}

export default Banner;