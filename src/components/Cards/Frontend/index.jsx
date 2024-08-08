
import styled from 'styled-components';

import { useGlobalContext } from '../../../contexts/GlobalContext';
import BotonDelete from '../BotonDelete';
import BotonEdit from '../BotonEdit';
import Categoría from '../BotonCategoria';


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

const CardStyled = styled.div`
  /* Estilos de tus tarjetas */
`;


const VideoCard = styled.div`
  width: 429.19px;
  height: 260.85px;
`;

const DyEContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 15px 0;
`;

const DeleteyEdit = styled.div`
  display: flex;
  width: 440px;
  height: 59px;
  border-radius: 0px 0px 15px 15px;
  border-style: solid;
  border-color: var(--FrontEnd, #6bd1ff);
  box-shadow: 0px -4px 5px 3px #6bd1ff inset;
  background-color: #000000e5;
  justify-content: center;
`;





const Frontend = () => {
  const { videos } = useGlobalContext();
  const frontendVideos = videos.filter(video => video.Categoria === 'FRONT END');

  return (
    <FrontendContainer>
      <CategoryStyled>
        <Categoría Categoria={'FRONT END'}></Categoría>
      </CategoryStyled>

      <CardsFrontendStyled>
        {frontendVideos.map((video) => (
          <CardStyled key={video.id}>
            <VideoCard>
              <img src={video.ImagenURL} alt={`imgcard-${video.id}`} />
            </VideoCard>
            <DeleteyEdit>
              <DyEContainer>
                <BotonDelete idVideo={video.id} />
                <BotonEdit idVideo={video.id} />
              </DyEContainer>
            </DeleteyEdit>
          </CardStyled>
        ))
        };
      </CardsFrontendStyled>
    </FrontendContainer>
  );
};

export default Frontend;