
import styled from "styled-components";
import { useGlobalContext } from "../../../contexts/GlobalContext";


const Delete = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 800;
  font-size: 16px;
  line-height: 18.75px;
  background-color: transparent;
  border: none;
  cursor: pointer;


  @media (max-width: 755px) {
    display: flex;
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

const BotonDelete = ({ idVideo }) => {
  // Desestructuramos 'handleDeleteClick' desde el contexto global.
  const { handleDeleteClick } = useGlobalContext();

  return (
    // Componente 'Delete' que maneja el clic del botón para eliminar un video
    <Delete onClick={() => handleDeleteClick(idVideo)}>
      {/* Icono de borrar, se usa una imagen como icono para el botón */}
      <img src="/img/icon-delete.png" alt="Icon Delete" />
      {/* Texto que acompaña al icono */}
      <p>BORRAR</p>
    </Delete>
  );
};

export default BotonDelete;
