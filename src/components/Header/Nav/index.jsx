import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BotonesNav from './BotonesNav';
import { useGlobalContext } from '../../../contexts/GlobalContext';

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.img`
  width: 35px;
  height: 35px;
  display: none;

  @media (max-width: 600px) {
    display: block;
    width: 27px;
    height: 27px;
  }

  // Cambiar imagen en hover
  &:hover {
    content: url(${(props) =>
      props.botonSeleccionado === props.boton
        ? `/img/icono-${props.boton}-activo.png`
        : `/img/icono-${props.boton}-activo.png`});
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Mantiene el color del texto del enlace */
`;

const Pstyled = styled.p`
  @media (max-width: 600px) {
    font-weight: 900;
    display: ${(props) =>
      props.botonSeleccionado === props.boton ? 'block' : 'none'};
    font-size: 15px;
  }
`;

const Nav = () => {
  // Accedemos al estado global que contiene el botón seleccionado
  const { botonSeleccionado } = useGlobalContext();

  return (
    // Componente estilizado que actúa como un contenedor de la barra de navegación
    <NavStyled>
      {/* Enlace a la página principal */}
      <StyledLink to="/">
        {/* Componente BotonesNav que renderiza un botón de navegación para "home" */}
        <BotonesNav boton="home">
          {/* Condicional para cambiar la imagen según el estado del botón seleccionado */}
          <ImgContainer
            src={
              botonSeleccionado === 'home'
                ? '/img/icono-home-activo.png'
                : '/img/icono-home.png'
            }
            botonSeleccionado={botonSeleccionado}
            boton="home"
          />
          {/* Estilo condicional para el texto dependiendo de si el botón está seleccionado */}
          <Pstyled botonSeleccionado={botonSeleccionado} boton="home">
            HOME
          </Pstyled>
        </BotonesNav>
      </StyledLink>

      {/* Enlace a la página para crear un nuevo video */}
      <StyledLink to="/nuevovideo">
        {/* Componente BotonesNav que renderiza un botón de navegación para "nuevo-video" */}
        <BotonesNav boton="nuevo-video">
          {/* Condicional para cambiar la imagen según el estado del botón seleccionado */}
          <ImgContainer
            src={
              botonSeleccionado === 'nuevo-video'
                ? '/img/icono-nuevo-video-activo.png'
                : '/img/icono-nuevo-video.png'
            }
            botonSeleccionado={botonSeleccionado}
            boton="nuevo-video"
          />
          {/* Estilo condicional para el texto dependiendo de si el botón está seleccionado */}
          <Pstyled botonSeleccionado={botonSeleccionado} boton="nuevo-video">
            NUEVO VIDEO
          </Pstyled>
        </BotonesNav>
      </StyledLink>
    </NavStyled>
  );
};

export default Nav;
