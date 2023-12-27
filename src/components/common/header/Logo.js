import React from "react";
import styled from "styled-components";
import LogoImage from '../../../assets/images/logos/fox-Logo.png';

const LogoWrapper = styled.div`
    text-align: center;
`;

const StyledLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

class Logo extends React.Component {
    
    render() {
        return (
            <LogoWrapper>
                <StyledLogo src={LogoImage} alt="Fox Logo" />
            </LogoWrapper>
        )
    }
}

export default Logo;