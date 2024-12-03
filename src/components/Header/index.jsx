import styled from 'styled-components';
import Nav from './Nav';
import { useGlobalContext } from '../../contexts/GlobalContext';

// Componente estilizado para el Header
const HeaderStyled = styled.header`
  width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.selected ? 'rgba(38, 38, 38, 1)' : '#000000'};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 25px 20px;
  border-bottom: 4px solid var(--Blue, rgba(34, 113, 209, 1));
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.9);
  font-family: 'SourceSansProRegular';
  position: fixed;
  top: 0;
  z-index: 1;

  @media (max-width: 599px) {
    top: auto;
    bottom: 0;
    border-top: 4px solid var(--Blue, rgba(34, 113, 209, 1));
    border-bottom: 0;
    justify-content: center;
    padding: 0;
    height: 60px;
  }
`;

const ImgContainer = styled.div`
  @media (max-width: 599px) {
    display: none;
  }
`;

const Header = () => {
  // Accedemos al estado global que contiene el botón seleccionado
  const { botonSeleccionado } = useGlobalContext();

  return (
    // Componente estilizado para el encabezado, con un estilo condicional dependiendo del botón seleccionado
    <HeaderStyled selected={botonSeleccionado === 'home'}>
      {/* Contenedor para la imagen del logo */}
      <ImgContainer>
        <img src="/img/LogoMain.png" alt="logo" />
      </ImgContainer>

      {/* Renderizamos el componente Nav que contiene la barra de navegación */}
      <Nav />
    </HeaderStyled>
  );
};

export default Header;
