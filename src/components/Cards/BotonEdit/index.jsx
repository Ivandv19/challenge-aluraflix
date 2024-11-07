
import styled from "styled-components";
import { useGlobalContext } from "../../../contexts/GlobalContext";


const Edit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 16px;
  line-height: 18.75px;
  cursor: pointer;

  @media (max-width: 755px) {
    gap: 2vw;

    img {
        width: 20px;
        height: 20px;
    }
    p {
    font-size: 3vw;
    }
  }
`;

const BotonEdit = ({ idVideo }) => {
  // Desestructuramos 'handleVideoSelec' desde el contexto global.
  const { handleVideoSelec } = useGlobalContext();

  return (
    // Componente 'Edit' estilizado que maneja el clic para seleccionar un video para editar
    <Edit onClick={() => handleVideoSelec(idVideo)}>
      {/* Icono de editar, representado con una imagen */}
      <img src="/img/icon-edit.png" alt="Icon edit" />
      {/* Texto descriptivo que acompaña al icono */}
      <p>EDITAR</p>
    </Edit>
  );
};

export default BotonEdit;