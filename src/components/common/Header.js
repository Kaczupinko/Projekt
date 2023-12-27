import React from "react";
import styled from "styled-components";
import { AuthButton, Logo, Nav } from "./header/index";
import items from "./../../utils/items";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #6200EA;
    color: #fff;
    font-family: "Roboto", sans-serif;
`;

class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav items={items} />
            </HeaderWrapper>
        )
    }
}

export default Header;