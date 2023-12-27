import React from "react";
import styled from "styled-components";
import { Menu } from './index';

const NavBarWrapper = styled.nav`
    background: #B39DDB;
    padding: 10px 20px;
    color: #212121;
`;

class NavBar extends React.Component {
    render () {
        const { items } = this.props;
        return (
            <NavBarWrapper>
                <Menu items={items} />
            </NavBarWrapper>
        );
    }
}

export default NavBar;