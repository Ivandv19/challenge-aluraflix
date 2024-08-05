
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import BotonDelete from '../BotonDelete';
import BotonEdit from '../BotonEdit';


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

const ButtonStyled = styled.button`
  width: 432px;
  height: 70px;
  border-radius: 15px;
  background: var(--FrontEnd, #FFBA05);
  border: none;
  font-weight: 800;
  font-size: 32px;
  line-height: 37.5px;
  text-align: center;
  color: #f5f5f5;
  font-family: 'Roboto';
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
  border-color: var(--FrontEnd, #FFBA05);
  box-shadow: 0px -4px 5px 3px #FFBA05 inset;
  background-color: #000000e5;
  justify-content: center;
`;


const InnoyGest = () => {

  const { videos } = useGlobalContext();

  // Filtrar los videos por la categoría "INNOVACIÓN Y GESTIÓN"
  const iygVideos = videos.filter(video => video.Categoria === 'INNOVACIÓN Y GESTIÓN');

  return (
    <FrontendContainer>
      <CategoryStyled>
        <ButtonStyled>INNOVACIÓN Y GESTIÓN</ButtonStyled>
      </CategoryStyled>
      <CardsFrontendStyled>
        {iygVideos.map(video => (
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
        ))}
      </CardsFrontendStyled>
    </FrontendContainer>
  );
};

export default InnoyGest;