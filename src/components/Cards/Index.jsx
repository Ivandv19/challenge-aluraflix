import styled from "styled-components"
import BackEnd from "./Backend"
import Frontend from "./Frontend"
import InnoyGest from "./InnoyGest"

const CardsContainer = styled.section`
padding: 50px 100px 50px 100px;
display: flex;
flex-direction: column;
gap: 93px;

@media (max-width: 755px) {
    padding: 50px 20px;
}

`

const Cards = () => {
    return (
        <>
            <CardsContainer>
                <Frontend />
                <BackEnd />
                <InnoyGest />
            </CardsContainer>

        </>
    )
}

export default Cards