import React from "react";
import { MenuItem } from "./index";

class Menu extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map((item, index) => {
                    return <MenuItem key={index} text={item.text} url={item.url} />
                })}
            </ul>
        );
    }
}

Menu.defaultProps = {
    items: [], 
};

  
export default Menu;