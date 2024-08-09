import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';
import BotonCategoria from '../Cards/BotonCategoria';

const imageUrl = '/img/banner.png';

const BannerStyled = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  padding: 343px 100px 155px 100px;
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

const ButtonStyled = styled.button`
  width: 296.82px;
  height: 92px;
  border-radius: 15px;
  background-color: #6bd1ff;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 48px;
  text-align: center;
  color: #f5f5f5;
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
 
 

`;

const BotonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const PlayerStyled = styled.div``;

const Banner = () => {

  const { videos } = useGlobalContext();

  // Filtrar videos por categoría "Banner"
  const bannerVideos = videos.filter(video => video.Categoria === 'Banner');

  return (
    <BannerStyled>
      <BotonContainer>
        <BotonCategoria Categoria={'Banner'}></BotonCategoria>
      </BotonContainer>

      {bannerVideos.map((video) => (
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