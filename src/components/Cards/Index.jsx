import styled from 'styled-components';
import BackEnd from './Backend';
import Frontend from './Frontend';
import InnoyGest from './InnoyGest';

const CardsContainer = styled.section`
  padding: 50px 100px 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 93px;

  @media (max-width: 755px) {
    padding: 20px 10px;
    padding-bottom: 100px;
    width: 100%;
    height: auto;
  }
`;

const Cards = () => {
  return (
    <CardsContainer>
      <Frontend />
      <BackEnd />
      <InnoyGest />
    </CardsContainer>
  );
};

export default Cards;
