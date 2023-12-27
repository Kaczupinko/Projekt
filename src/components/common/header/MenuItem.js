import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuItemWrapper = styled.li`
    margin: 0 1em;
`;

const StyledLink = styled(Link)`
    /* Add your styles for the link here */
    color: #000;
    text-decoration: none;
    &:hover {
        color: blue;
    }
`;

class MenuItem extends React.Component {
    render() {
        const { text, url } = this.props;
        return (
            <MenuItemWrapper>
                <StyledLink to={url}>{text}</StyledLink>
            </MenuItemWrapper>
        );
    }
}

export default MenuItem;