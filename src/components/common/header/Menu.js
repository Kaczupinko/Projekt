import React from "react";
import styled from "styled-components";
import { MenuItem } from "./index";

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
`;

class Menu extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <MenuList>
                {items.map((item, index) => {
                    return <MenuItem key={index} text={item.text} url={item.url} />
                })}
            </MenuList>
        );
    }
}

Menu.defaultProps = {
    items: [], 
};

  
export default Menu;