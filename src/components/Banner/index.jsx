import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalContext';

const imageUrl = '/img/banner.png';

const BannerStyled = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  padding: 343px 10px 155px 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 40px;
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
  margin: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PlayerStyled = styled.div``;

const Banner = () => {

  const { useVideos } = useGlobalContext();

  // Filtrar videos por categoría "Banner"
  const bannerVideos = useVideos.filter(video => video.Categoria === 'Banner');

  return (
    <BannerStyled>
      {bannerVideos.map((video) => (
        <ContainerStyled key={video.id}>
          <Card>
            <ButtonStyled>FRONT END</ButtonStyled>
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