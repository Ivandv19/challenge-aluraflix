import React, { Children } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../../contexts/GlobalContext";

const Boton = styled.button`
  width: 180.13px;
  height: 54px;
  border-radius: 10px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  font-family: SourceSansProRegular;
  font-weight: 900;
  font-size: 20px;
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
  const { handleButtonClick, botonSeleccionado } = useGlobalContext();


  return (
    <>
      <Boton onClick={() => handleButtonClick(boton)}
        isSelected={botonSeleccionado === boton}>
        {children}
      </Boton>
    </>
  );
};

export default BotonesNav;
