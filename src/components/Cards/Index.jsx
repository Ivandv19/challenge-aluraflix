import styled from "styled-components"
import BackEnd from "./Backend"
import Frontend from "./Frontend"
import InnoyGest from "./InnoyGest"

const CardsContainer = styled.section`
padding: 25px 100px 100px 100px;
display: flex;
flex-direction: column;
gap: 93px;
    
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