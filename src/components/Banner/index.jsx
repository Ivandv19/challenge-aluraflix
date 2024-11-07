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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  

  @media (min-width: 756px) and (max-width: 1199px) {
    padding: 150px 50px 100px 50px;
    gap: 50px;
  }

  @media (max-width: 755px){
    display: none;
  }
 
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30vw;
  border-radius: 15px 15px 15px 15px;
`;

const BannerMain = styled.div`
border-radius: 15px 15px 15px 15px;
`;


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

  @media (min-width: 600px) and (max-width: 1199px) {
    gap: 0;
    justify-content: space-between;
  }

`;

const BotonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  animation: ${zoomIn} 0.5s ease-out;
  @media (min-width: 600px) and (max-width: 1199px){
    justify-content: center;
  }
`

const PlayerStyled = styled.div`
border-radius: 15px 15px 15px 15px;
box-shadow: ${(props) => (props.color ? `2px 2px 25px 0px ${props.color}` : 'transparent')};

img {
  border-radius: 15px 15px 15px 15px;
}
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Banner = () => {

  // Obtenemos los valores y funciones del contexto global
  const { 
    videos, 
    categoriaSeleccionada, 
    setCategoriaSeleccionada, 
    videosListadosFrontend, 
    videosListadosBackend, 
    videosListadosInnoyGest 
  } = useGlobalContext();

  const [videoMain, setVideoMain] = useState([]); // Estado para el video principal que se mostrará en el banner

  // Lista de categorías disponibles
  const categorias = ['FRONT END', 'BACK END', 'INNOVACIÓN Y GESTIÓN'];

  // Ref para almacenar el identificador del intervalo (utilizado para cambiar automáticamente la categoría)
  const intervalRef = useRef(null);

  // Efecto para cambiar la categoría automáticamente cada 10 segundos
  useEffect(() => {
    // Función para iniciar el intervalo
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Limpiamos cualquier intervalo previo
      }

      intervalRef.current = setInterval(() => {
        // Cambiar la categoría seleccionada
        setCategoriaSeleccionada(prevCategoria => {
          const currentIndex = categorias.indexOf(prevCategoria); // Encontramos el índice de la categoría actual
          const nextIndex = (currentIndex + 1) % categorias.length; // Calculamos el índice siguiente, ciclando entre las categorías
          return categorias[nextIndex]; // Establecemos la siguiente categoría
        });
      }, 10000); // 10000 ms = 10 segundos
    };

    startInterval(); // Iniciamos el intervalo al montar el componente

    // Limpiar el intervalo cuando el componente se desmonte para evitar efectos secundarios
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Limpiamos el intervalo al desmontar
      }
    };
  }, [setCategoriaSeleccionada, categorias]); // Dependencias: se ejecuta al montar el componente

  // Efecto para actualizar el video principal cada vez que cambie la categoría seleccionada
  useEffect(() => {
    let selectedVideos = [];

    // Seleccionamos el array adecuado de videos basado en la categoría seleccionada
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
        selectedVideos = []; // Si no hay categoría, dejamos el array vacío
    }
    
    // Establecemos el primer video del array seleccionado como el video principal
    if (selectedVideos.length > 0) {
      setVideoMain([selectedVideos[0]]);
    } else {
      // Si no hay videos en la categoría seleccionada, establecemos un video por defecto
      const initialBannerVideo = videos.filter(video => video.id === '0');
      setVideoMain(initialBannerVideo);
    }
  }, [categoriaSeleccionada, videosListadosFrontend, videosListadosBackend, videosListadosInnoyGest]); // Se ejecuta cada vez que cambian las dependencias

  // Colores para cada categoría
  const categoryColors = {
    'FRONT END': '#6bd1ff', // Azul claro
    'INNOVACIÓN Y GESTIÓN': '#FFBA05',  // Amarillo
    'BACK END': '#00C86F', // Verde
  };

  // Se asigna el color correspondiente según la categoría seleccionada
  const color = categoryColors[categoriaSeleccionada] || '#6bd1ff'; // Azul claro como color predeterminado

  return (
    <BannerStyled>
      <InfoContainer>
        <BotonContainer>
          {/* Mostrar el botón de la categoría actual */}
          <BotonCategoria Categoria={categoriaSeleccionada}></BotonCategoria>
        </BotonContainer>

        {/* Mostrar los detalles del video principal */}
        {videoMain.map((video) => (
          <ContainerStyled key={video.id}>
            <Card>
              <TitleStyled>{video.Titulo}</TitleStyled> {/* Título del video */}
              <PStyled>{video.Descripcion}</PStyled> {/* Descripción del video */}
            </Card>
            <BannerMain>
              {/* Componente para mostrar el video con el color correspondiente */}
              <PlayerStyled color={color}>
                <img src={video.ImagenURL} alt="player" /> {/* Imagen representativa del video */}
              </PlayerStyled>
            </BannerMain>
          </ContainerStyled>
        ))}
      </InfoContainer>
    </BannerStyled>
  );
}

export default Banner;