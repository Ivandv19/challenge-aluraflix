import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';


const FooterStyles = styled.footer`
width: 100%;
height: auto;
background-color: ${hexToRgba('#000000', 0.99)};
color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 42.5px ;
box-shadow: 0px 5px 29px 0px #2271D1B2;

@media (max-width: 599px) {
    display: none;
}
    
`
const ImgContainer = styled.div`


    
`





const Footer = () => {
    return (
        <>
            <FooterStyles>
                <ImgContainer>
                    <img src="/img/LogoMain.png" alt="logo main" />
                </ImgContainer>
            </FooterStyles>

        </>
    )
}

export default Footer