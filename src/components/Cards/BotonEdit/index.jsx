
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

  const { handleVideoSelec } = useGlobalContext();

  return (
    <Edit onClick={() => handleVideoSelec(idVideo)} >
      <img src="/img/icon-edit.png" alt="Icon edit" />
      <p>EDITAR</p>
    </Edit>
  );
};

export default BotonEdit;