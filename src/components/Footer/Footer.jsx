import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const FooterStyles = styled.footer`
width: 100%;
height: auto;
background-color: ${hexToRgba('#000000', 0.99)};

display: flex;
justify-content: center;
align-items: center;
padding: 42.5px ;
box-shadow: 0px 5px 29px 0px #2271D1B2;


    
`

const Footer = () => {
    return (
        <>
            <FooterStyles>
            <img src="/img/LogoMain.png" alt="logo main" />
            </FooterStyles>

        </>
    )
}

export default Footer