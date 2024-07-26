import React from "react";
import styled from "styled-components";
import Nav from "./Nav";


const HeaderStyled = styled.header`
  width: 100%;
  height: auto;
  background-color: rgba(38, 38, 38, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 42px 51px;
  border-bottom: 4px solid var(--Blue, rgba(34, 113, 209, 1));
  box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.9);
  font-family: 'SourceSansProRegular';
  position: fixed;
  top: 0;
`;

const Header = () => {
    return (
        <>
            <HeaderStyled>
            <img src="/img/LogoMain.png" alt="Icon Delete" />
                <Nav />
            </HeaderStyled>


        </>

    );
};

export default Header;