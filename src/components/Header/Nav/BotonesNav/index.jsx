import React, { Children } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../../contexts/GlobalContext";

const Boton = styled.button`
  width: 180.13px;
  height: 45px;
  border-radius: 10px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  font-family: SourceSansProRegular;
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;


  &:hover {
    background-color: black;
    box-shadow: 2px 2px 25px 0px rgba(34, 113, 209, 0.9);
    border: 2px solid rgba(34, 113, 209, 0.9);
    transition: border-color 0.3s;
  }

  @media (max-width: 600px){
    border-radius: 50px;
    width: 100%;
    height: auto;
    padding: 5px 15px;
    gap: 10px;
    border: ${(props) => (props.isSelected ? '2px' : '0')} solid ${(props) => (props.isSelected ? "#2271D1" : "white")};
    color: ${(props) => (props.isSelected ? "#2271D1" : "white")};
    background-color: ${(props) => (props.isSelected ? "#2271D13D" : "transparent")};

  }

`;


const BotonesNav = ({ boton, children }) => {
  // Desestructuramos el contexto global para acceder a las funciones y estados necesarios
  const { handleButtonClick, botonSeleccionado } = useGlobalContext();

  return (
    // Botón estilizado que ejecuta la función handleButtonClick al hacer clic
    <Boton 
      onClick={() => handleButtonClick(boton)} // Llama a handleButtonClick con el valor del botón clickeado
      isSelected={botonSeleccionado === boton} // Aplica un estilo adicional si el botón está seleccionado
    >
      {children}  {/* Los hijos del componente BotonesNav (usualmente texto o iconos dentro del botón) */}
    </Boton>
  );
};

export default BotonesNav;
