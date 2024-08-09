import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 432px;
  height: 70px;
  border-radius: 15px;
  background: ${(props) => props.color || '#6bd1ff'};
  border: none;
  font-weight: 800;
  font-size: 32px;
  line-height: 37.5px;
  text-align: center;
  color: #f5f5f5;
  font-family: 'Roboto';
`;

const categoryColors = {
  'FRONT END': '#6bd1ff', // Azul claro
  'INNOVACIÓN Y GESTIÓN': '#FFBA05',  // Amarillo
  'BACK END': '#00C86F', // Verde
};

function Categoría({ Categoria }) {
  const color = categoryColors[Categoria] || '#6bd1ff'; // Color predeterminado

  return (
    <ButtonStyled color={color}>
      {Categoria}
    </ButtonStyled>
  );
}

export default Categoría;