
import styled from "styled-components";
import Nav from "./Nav";
import { useGlobalContext } from "../../contexts/GlobalContext";


// Componente estilizado para el Header
const HeaderStyled = styled.header`
  width: 100%;
  height: auto;
  background-color: ${(props) => (props.selected ? 'rgba(38, 38, 38, 1)' : '#000000')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 42px 51px;
  border-bottom: 4px solid var(--Blue, rgba(34, 113, 209, 1));
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.9);
  font-family: 'SourceSansProRegular';
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Header = () => {
    const { botonSeleccionado } = useGlobalContext();
    
    return (
        <HeaderStyled selected={botonSeleccionado === 'HOME'}>
            <img src="/img/LogoMain.png" alt="logo" />
            <Nav />
        </HeaderStyled>
    );
};

export default Header;