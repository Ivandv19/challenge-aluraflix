
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
`;

const BotonDelete = ({ idVideo }) => {

    const { handleDeleteClick } = useGlobalContext();

    return (
        <Delete onClick={() => handleDeleteClick(idVideo)}>
            <img src="/img/icon-delete.png" alt="Icon Delete" />
            <p>BORRAR</p>
        </Delete>
    );
};

export default BotonDelete;
